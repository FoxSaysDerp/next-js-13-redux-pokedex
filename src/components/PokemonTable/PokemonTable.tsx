import { Reference } from "@/types";

const PokemonTable = ({ pokemon }: { pokemon: Reference[] }) => {
	if (!pokemon) {
		return <div>No Pokemon found {":("}</div>;
	}
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{pokemon?.map((pokemonItem) => (
					<tr key={pokemonItem.name}>
						<td>{pokemonItem.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
