<script>
	export const prerender = true;
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#18181b" media="(prefers-color-scheme: dark)" />
	<meta name="msapplication-TileColor" content="#603cba" />

	<meta
		name="description"
		content="The on-premise or off-premise file hosting service with accent on speed, efficiency and reliability"
	/>

	<meta property="og:site_name" content="Get Shelf" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content="Shelf - Keep Your Files Organized" />
	<meta
		property="og:description"
		content="The on-premise or off-premise file hosting service with accent on speed, efficiency and reliability"
	/>
	<meta property="og:url" content="https://getshelf.cloud" />
	<meta property="og:image" content="https://getshelf.cloud/og_preview.jpg" />
	<meta property="og:image:secure_url" content="https://i.imgur.com/3IxCXAgh.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@getshelfcloud" />

	<link rel="canonical" href="https://getshelf.cloud" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/logo.svg" />
	<link rel="apple-touch-icon" sizes="152x152" href="/touch-icon-ipad.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/touch-icon-iphone-retina.png" />
	<link rel="apple-touch-icon" sizes="167x167" href="/touch-icon-ipad-retina.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#059669" />
	<link rel="manifest" href="/manifest.json" />
	<title>Shelf - Keep Your Files Organized</title>
</svelte:head>

<div class="font-sans bg-gray-100 flex flex-col min-h-screen w-full dark:bg-zinc-900/95">
	<!-- Header -->
	<header class="bg-white px-4 py-3 dark:bg-zinc-900 ">
		<div class="w-full lg:max-w-7xl lg:mx-auto flex items-center justify-between">
			<div class="flex">
				<div class="mr-2 flex items-center rounded-xl bg-white p-2 dark:bg-zinc-800">
					<img
						src="/logo.svg"
						class="h-7 w-7 shrink-0 text-gray-600 dark:text-zinc-300"
						title="Application Logo"
						alt="Application Logo"
						width="28"
						height="28"
						loading="eager"
					/>
				</div>
				<div
					class="h-7 inline-block py-2 text-gray-800 dark:text-zinc-200 text-2xl font-mono font-bold"
				>
					shelf
				</div>
			</div>

			<div>
				<a
					href="https://app.getshelf.cloud/signin"
					class="inline-block py-1 lg:py-4 text-gray-500 hover:text-gray-600 dark:text-zinc-400 dark:hover:text-zinc-200 mr-6"
				>
					Sign In
				</a>
				<a
					href="https://app.getshelf.cloud/signup"
					class="hidden lg:inline-block px-4 py-1 border border-teal-400 text-teal-500 rounded-xl hover:bg-gradient-to-br hover:from-teal-300 hover:to-emerald-300 dark:hover:from-teal-400 dark:hover:to-emerald-400 hover:text-white hover:border-transparent"
				>
					Sign Up
				</a>
			</div>
		</div>
	</header>

	<!-- Content -->
	<main>
		<!-- First page -->
		<div>
			<div
				class="mx-auto mt-16 lg:mt-0 xl:max-w-7xl min-h-[85vh] h-full flex flex-col lg:flex-row lg:space-x-4 xl:space-x-10"
			>
				<!-- Content: Left Side -->
				<div class="lg:w-1/3 p-4 flex items-center justify-center text-center lg:text-left">
					<div>
						<div>
							<h1
								class="text-gray-700 dark:text-zinc-200 font-medium lg:font-light text-4xl lg:text-5xl"
							>
								Keep your files organized
							</h1>
							<p class="mt-6 text-gray-500 dark:text-zinc-400 font-light text-base lg:text-lg">
								<span class="font-medium">Shelf</span> is the on-premise or off-premise file hosting
								service with accent on speed, efficiency and reliability
							</p>
						</div>

						<!-- Button Section -->
						<div
							class="mt-8 space-y-4 space-x-4 lg:space-x-0 xl:space-x-2 text-xs text-center sm:text-sm xl:text-base"
						>
							<!-- Get Started Button -->
							<a
								href="https://app.getshelf.cloud/signup"
								class="inline-block py-2 px-4 text-white hover:bg-gray-100 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 dark:from-teal-500 dark:to-emerald-500 dark:hover:from-teal-400 dark:hover:to-emerald-400"
							>
								<div class="flex items-center">
									<div class="text-white">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="w-5 h-5"
										>
											<path
												d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z"
											/>
										</svg>
									</div>
									<div class="ml-2 font-medium">Join Shelf Cloud</div>
								</div>
							</a>
							<!-- View on GitHub button -->
							<a
								href="https://github.com/unmade/shelf-showcase"
								target="_blank"
								rel="noreferrer"
								class="inline-block border py-2 px-4 text-gray-700 dark:text-zinc-200 bg-white dark:bg-zinc-700/50 hover:bg-gray-100 dark:hover:bg-zinc-700/70 dark:border-zinc-700 rounded-xl transition-colors ease-in-out"
							>
								<div class="flex items-center">
									<div>
										<picture>
											<source
												srcset="/GitHub-Mark-Light-64px.png"
												media="(prefers-color-scheme: dark)"
											/>
											<img
												src="/GitHub-Mark-64px.png"
												class="w-5 h-5"
												title="GitHub Invertocat Logo"
												alt="GitHub Invertocat Logo"
												width="20"
												height="20"
												loading="eager"
											/>
										</picture>
									</div>
									<div class="ml-2">View on GitHub</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				<!-- Content: Right Side -->
				<div class="mt-8 lg:mt-0 lg:w-2/3 flex items-center justify-center">
					<div class="max-w-4xl mx-auto hidden md:block">
						<picture>
							<source srcset="browser-dark.webp" media="(prefers-color-scheme: dark)" />
							<img
								src="/browser-light.webp"
								title="Shelf Browser Preview"
								alt="Shelf Web Preview"
								width="1024"
								height="746"
								loading="eager"
							/>
						</picture>
					</div>
					<div class="mx-auto block md:hidden max-w-xl">
						<picture>
							<source srcset="/mobile-dark.webp" media="(prefers-color-scheme: dark)" />
							<img
								src="/mobile-light.webp"
								title="Shelf Mobile Preview"
								alt="Shelf Mobile Preview"
								width="1400"
								height="2700"
								loading="eager"
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
	</main>

	<footer>
		<div class="max-w-7xl mx-auto text-sm py-4">
			<p
				class="text-center text-gray-500 dark:text-zinc-400 flex text-sm items-center justify-center"
			>
				Created with&nbsp;
				<span class="inline-block text-red-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
						/>
					</svg>
				</span>
				&nbsp;by&nbsp;
				<a
					class="border-b text-blue-500 dark:text-indigo-400 no-underline"
					href="https://github.com/unmade"
					target="_blank"
					rel="noreferrer"
				>
					@unmade
				</a>
			</p>
		</div>
	</footer>
</div>
