import { useEffect, useState } from 'react';

export default function Home() {
	const [input, setInput] = useState<string>('');
	const [searchResults, setSearchResults] = useState<{ results: string[]; duration: number }>();

	useEffect(() => {
		const fetchData = async () => {
			if (!input) return setSearchResults(undefined);
			const resp = await fetch(`/api/search?q=${input}`);
		};

		fetchData();
	}, [input]);

	return (
		<div>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type='text'
			/>
		</div>
	);
}
