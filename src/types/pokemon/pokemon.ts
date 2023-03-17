import { Reference } from "../reference";
import { Ability } from "./ability";
import { GameIndice } from "./gameIndice";
import { Move } from "./move";
import { PokemonType } from "./pokemonType";
import { Sprite } from "./sprite";
import { Stat } from "./stat";

export interface Pokemon {
	id: number;
	name: Reference;
	abilities: Ability[];
	base_experience: number;
	forms: Reference[];
	game_indices: GameIndice[];
	height: number;
	weight: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	order: number;
	species: Reference;
	sprites: Sprite;
	stats: Stat[];
	types: PokemonType[];
}
