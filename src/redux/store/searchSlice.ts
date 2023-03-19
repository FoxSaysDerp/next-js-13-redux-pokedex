import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Pokemon, Reference } from "@/types";

export interface SearchState {
	search: string;
	startupPokemon: Reference[];
}

const initialState: SearchState = {
	search: "",
	startupPokemon: [],
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setStartupPokemon: (state, action: PayloadAction<Reference[]>) => {
			state.startupPokemon = action.payload;
		},
	},
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
