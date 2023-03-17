import axios from "axios";
import { NextResponse } from "next/server";
import { Pokemon } from "@/types";

interface Pokedex {
	count: number;
	result: Pokemon[];
}

async function getAllPokemon(): Promise<Pokedex | string> {
	try {
		const { data } = await axios.get<Pokedex>(
			"https://pokeapi.co/api/v2/pokemon/",
			{
				headers: {
					Accept: "application/json",
				},
			}
		);
		return data;
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

export async function GET() {
	const data = await getAllPokemon();

	return NextResponse.json(data);
}
