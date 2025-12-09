export interface SWContextValue {
    hero: string;
    changeHero: (hero: string) => void;
}

export interface Hero{
    name: string,
    img: string,
    url: string
}

export type Characters = Record<string, Hero>;