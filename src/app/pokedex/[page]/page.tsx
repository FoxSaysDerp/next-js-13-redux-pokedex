import Link from "next/link";
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

	const totalPages = Math.ceil(data.count / 20);

	const isFirst = Number(params.page) === 1;
	const isLast = Number(params.page) === totalPages;

	const prevPageIndex = "pokedex/" + (Number(params.page) - 1).toString();
	const nextPageIndex = "pokedex/" + (Number(params.page) + 1).toString();

	return (
		<div>
			<PokemonTable pokemon={data.results} />
			{!isFirst && <Link href={prevPageIndex}>Previous page</Link>}
			{!isLast && <Link href={nextPageIndex}>Next page</Link>}
		</div>
	);
}
