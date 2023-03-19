import { Reference, ReferenceWithId } from "./reference";

export interface Pokedex {
	count: number;
	results: Reference[];
}
export interface PokedexWithIds {
	count: number;
	results: ReferenceWithId[];
}
