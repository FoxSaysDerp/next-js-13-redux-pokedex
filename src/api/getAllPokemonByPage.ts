import { Pokedex } from "@/types";
import axios from "axios";

export const getAllPokemonByPage = async (page: string): Promise<Pokedex> => {
	const pageNumber = Number(page);

	const offset = (pageNumber - 1) * 20;

	const { data } = await axios.get<Pokedex>(
		`http://localhost:3000/api/get-all?offset=${offset}&limit=20`
	);

	return data;
};
