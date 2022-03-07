import styles from '../styles/Home.module.css';
import Layout from './components/Layout/Layout';
import SearchInput from './components/SearchInput/SearchInput';

export default function Home({ countries }) {
	return (
		<Layout>
			<div className={styles.count}>Found {countries.length} countries</div>
			<SearchInput />
		</Layout>
	);
}

export async function getStaticProps() {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	return {
		props: {
			countries: data,
		},
	};
}
