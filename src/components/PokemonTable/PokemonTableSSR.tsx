import { store } from "@/redux/store";
import PokemonTable from "./PokemonTable";

function PokemonTableSSR() {
	const { search } = store.getState();

	return (
		<div>
			<PokemonTable pokemon={search.startupPokemon} />
		</div>
	);
}

export default PokemonTableSSR;
