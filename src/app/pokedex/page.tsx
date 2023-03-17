import axios from "axios";
import { Pokedex } from "@/types";
import PokemonTable from "@/components/PokemonTable";

export default async function PokedexPage() {
	const { data } = await axios.get<Pokedex>(
		"http://localhost:3000/api/get-all"
	);

	return (
		<main>
			<PokemonTable pokemon={data.results} />
		</main>
	);
}
