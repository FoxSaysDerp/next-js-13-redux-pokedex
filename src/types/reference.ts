export interface Reference {
	name: string;
	url: string;
}

export interface ReferenceWithId extends Reference {
	id?: number;
}
