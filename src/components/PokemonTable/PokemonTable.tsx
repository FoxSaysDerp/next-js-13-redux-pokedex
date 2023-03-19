import { ReferenceWithId } from "@/types/reference";
import s from "./PokemonTable.module.scss";

const PokemonTable = ({ pokemon }: { pokemon: ReferenceWithId[] }) => {
	if (!pokemon) {
		return <div>No Pokemon found {":("}</div>;
	}
	return (
		<table className={s.table}>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{pokemon?.map((pokemonItem) => (
					<tr key={pokemonItem.name}>
						<td>
							<span className={s.id}>{pokemonItem.id}.</span>
						</td>
						<td className={s.item}>{pokemonItem.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
