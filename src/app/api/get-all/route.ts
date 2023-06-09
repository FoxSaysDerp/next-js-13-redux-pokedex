import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Pagination, Pokedex, PokedexWithIds } from "@/types";

async function getAllPokemon({
	offset,
	limit,
}: Pagination): Promise<PokedexWithIds | string> {
	try {
		const { data } = await axios.get<Pokedex>(
			`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		let pokemonData: PokedexWithIds = data;
		pokemonData.results.forEach((_, index) => {
			pokemonData.results[index].id = offset + (index + 1);
		});

		return pokemonData;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			return error.message;
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error occurred";
		}
	}
}

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const offset = searchParams.get("offset");
	const limit = searchParams.get("limit");

	const data = await getAllPokemon({
		offset: Number(offset),
		limit: Number(limit),
	});

	return NextResponse.json(data);
}
