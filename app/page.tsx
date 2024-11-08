'use client';
import React from 'react';

export default function Home() {
	const [input, setInput] = React.useState<string>('');
	const [searchResults, setSearchResults] = React.useState<{ results: string[]; duration: number }>();

	React.useEffect(() => {
		const fetchData = async () => {
			if (!input) return setSearchResults(undefined);
			const resp = await fetch(`/api/search?q=${input}`);
		};

		fetchData();
	}, [input]);

	return (
		<main className='h-screen w-screen grainy'>
			<div className='flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5'>
				<h1 className='text-5xl tracking-tight font-bold '>SpeedSearch</h1>
				<p className='text-zinc-600 text-lg max-w-prose text-center'>
					Experience the power of lightning-fast search with our cutting-edge API, built on a robust foundation of Hono,
					Nextjs, and Cloudflare.
					<br />
					Enter your query below and discover the speed and precision that sets us apart from the rest
				</p>
				<div className='max-w-md w-full'></div>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className='text-zinc-900 border border-zinc-300 max-w-sm rounded-lg px-4 py-2 w-full'
					type='text'
				/>
			</div>
		</main>
	);
}
