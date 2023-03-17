import axios from "axios";
import { NextResponse } from "next/server";
import { Pokemon } from "@/types";

async function getPokemonByName(name: string): Promise<Pokemon | string> {
	try {
		const { data } = await axios.get<Pokemon>(
			`https://pokeapi.co/api/v2/pokemon/${name}`,
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

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);

	const name = searchParams.get("name");

	const data = await getPokemonByName(name || "zangoose");

	return NextResponse.json(data);
}
