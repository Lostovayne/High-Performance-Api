/* eslint-disable @next/next/no-img-element */
'use client';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import React from 'react';

export default function Home() {
	const [input, setInput] = React.useState<string>('');
	const [searchResults, setSearchResults] = React.useState<{ results: string[]; duration: number }>();

	React.useEffect(() => {
		const fetchData = async () => {
			if (!input) return setSearchResults(undefined);
			const resp = await fetch(`https://apifast.epsaind.workers.dev/api/search?q=${input}`);
			const data = (await resp.json()) as { results: string[]; duration: number };
			setSearchResults(data);
		};

		fetchData();
	}, [input]);

	return (
		<main className='h-screen w-screen grainy'>
			<div className='flex flex-col gap-6 items-center pt-32 duration-500 animate-in animate fade-in-5 slide-in-from-bottom-2.5'>
				<h1 className='text-5xl tracking-tight font-bold '>SpeedSearch ⚡ </h1>
				<p className='text-zinc-600 text-lg max-w-prose text-center'>
					Experience the power of lightning-fast search with our cutting-edge API, built on a robust foundation of
					Hono,Nextjs, and Cloudflare.
					<br />
					Enter your query below and discover the speed and precision.
				</p>
				<div className='max-w-md w-full max-md:px-5'>
					<Command>
						<CommandInput
							value={input}
							onValueChange={setInput}
							placeholder='Search countries...'
							className='placeholder:text-zinc-500'
						/>
						<CommandList>
							{searchResults?.results.length === 0 ? <CommandEmpty>No results found</CommandEmpty> : null}

							{searchResults?.results ? (
								<CommandGroup heading='Results'>
									{searchResults.results.map((result) => (
										<CommandItem
											key={result}
											value={result}
											onSelect={setInput}>
											{result}
										</CommandItem>
									))}
								</CommandGroup>
							) : null}

							{searchResults?.results ? (
								<>
									<div className='h-px w-full bg-zinc-200' />
									<p className='p-2 text-xs text-zinc-500'>
										Found {searchResults?.results.length} results in {searchResults?.duration.toFixed(0)} ms
									</p>
								</>
							) : null}
						</CommandList>
					</Command>
				</div>
			</div>
		</main>
	);
}
