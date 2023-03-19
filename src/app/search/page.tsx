import { store } from "@/redux/store";
import { setStartupPokemon } from "@/redux/store/searchSlice";

export default function Search() {
	const handleSubmit = () => {};
	return (
		<main>
			<form action="">
				<label htmlFor="searchForPokemon" />
				<input type="text" id="searchForPokemon" />
				<button type="submit">Search</button>
			</form>
		</main>
	);
}
