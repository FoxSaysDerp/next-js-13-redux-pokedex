import Link from "next/link";
import s from "./page.module.scss";

export default async function Home() {
	return (
		<main className={s.mainContainer}>
			<h1 className={s.title}>Pokédex</h1>
			<Link href="search" className="button">
				Go to Search
			</Link>
		</main>
	);
}
