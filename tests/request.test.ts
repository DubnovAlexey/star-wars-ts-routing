import test from 'node:test';
import assert from 'node:assert/strict';
import {fetchJson} from '../src/utils/request.ts';

const pending = ((_url: string|URL|Request, init?: RequestInit) => new Promise<Response>((_resolve,reject) => {
  const signal=init?.signal;
  const aborted=()=>reject(signal?.reason ?? new DOMException('Aborted','AbortError'));
  if (signal?.aborted) aborted(); else signal?.addEventListener('abort',aborted,{once:true});
})) as typeof fetch;

test('an unresponsive service reaches a bounded timeout', async()=>{
  await assert.rejects(fetchJson('https://example.invalid',new AbortController().signal,pending,10),/timed out/);
});
test('parent cancellation retains AbortError rather than becoming a timeout',async()=>{
  const parent=new AbortController();
  const promise=fetchJson('https://example.invalid',parent.signal,pending,12000);
  parent.abort();
  await assert.rejects(promise,(error:unknown)=>error instanceof DOMException && error.name==='AbortError');
});
test('already cancelled requests never call the service',async()=>{
  const parent=new AbortController();parent.abort();let called=false;
  await assert.rejects(fetchJson('https://example.invalid',parent.signal,(async()=>{called=true;return new Response('{}');}) as typeof fetch));
  assert.equal(called,false);
});
