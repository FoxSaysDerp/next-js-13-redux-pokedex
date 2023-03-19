import { Pagination } from "@mantine/core";
import { getAllPokemonByPage } from "@/api/getAllPokemonByPage";
import PokemonTable from "@/components/PokemonTable/PokemonTable";
interface PageProps {
	params: {
		page: string;
	};
}

export default async function PokedexSinglePage(props: PageProps) {
	const { params } = props;
	const data = await getAllPokemonByPage(params.page);

	return (
		<div>
			<PokemonTable pokemon={data.results} />
		</div>
	);
}
