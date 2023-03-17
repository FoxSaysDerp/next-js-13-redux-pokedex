import { Reference } from "../reference";

export interface Ability {
	ability: Reference;
	is_hidden: boolean;
	slot: number;
}
