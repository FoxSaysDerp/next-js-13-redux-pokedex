import { Pokemon, Reference } from "@/types";

const PokemonTable = ({ pokemon }: { pokemon: Reference[] }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{pokemon.map((pokemonItem) => (
					<tr key={pokemonItem.name}>
						<td>{pokemonItem.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
