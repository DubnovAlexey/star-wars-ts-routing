import test from 'node:test';
import assert from 'node:assert/strict';
import {readCache,writeCache,isHeroInfo,isPlanetList,isOpeningText} from '../src/utils/cache.ts';
const storage=(value:string)=>({getItem:()=>value,setItem:()=>{}});
test('expired, future and malformed hero cache never reaches React output',()=>{
  assert.equal(readCache('hero',1000,isHeroInfo,'timestamp',storage('{bad'),1000),undefined);
  assert.equal(readCache('hero',1000,isHeroInfo,'timestamp',storage('{"timestamp":2000,"payload":{"name":"future"}}'),1000),undefined);
  assert.equal(readCache('hero',1000,isHeroInfo,'timestamp',storage('{"timestamp":950,"payload":{"name":{}}}'),1000),undefined);
  assert.deepEqual(readCache('hero',1000,isHeroInfo,'timestamp',storage('{"timestamp":950,"payload":{"name":"Luke"}}'),1000),{name:'Luke'});
});
test('unavailable storage and invalid planet data remain harmless',()=>{
  const denied={getItem:()=>{throw new Error('denied');},setItem:()=>{throw new Error('denied');}};
  assert.equal(readCache('hero',1000,isHeroInfo,'timestamp',denied),undefined);
  assert.equal(writeCache('hero',{name:'Luke'},denied),false);
  assert.equal(isPlanetList(['Earth',null]),false);assert.equal(isPlanetList(['Tatooine']),true);
  assert.equal(isHeroInfo([{name:'Luke'}]),false);
});

test('legacy empty opening-crawl cache never hides a new request',()=>{
  for(const value of ['undefined','null','   ',null,{},'x'.repeat(10001)]) assert.equal(isOpeningText(value),false);
  assert.equal(isOpeningText('A long time ago in a galaxy far, far away...'),true);
});
