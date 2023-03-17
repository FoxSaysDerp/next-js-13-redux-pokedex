import { Reference } from "../reference";

interface VersionGroupDetail {
	level_learned_at: number;
	move_learn_method: Reference;
	version_group: Reference;
}

export interface Move {
	move: Reference;
	version_group_details: VersionGroupDetail[];
}
