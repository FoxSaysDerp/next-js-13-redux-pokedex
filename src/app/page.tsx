import Link from "next/link";
export default async function Home() {
	return (
		<main>
			Pokedex
			<Link href="search">Go to Search</Link>
		</main>
	);
}
