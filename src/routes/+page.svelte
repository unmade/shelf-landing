<script>
  import Header from '$lib/components/Header.svelte';
  import Content from '$lib/components/Content.svelte';

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
    content="Cloud and self-hosted open-source file manager with an accent on speed, efficience and reliability"
  />

  <meta property="og:site_name" content="Get Shelf" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="Shelf - Keep Your Files Organized" />
  <meta
    property="og:description"
    content="Cloud and self-hosted open-source file manager with an accent on speed, efficience and reliability"
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

<div class="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-zinc-900/95">
  <Header />
  <Content />

  <footer class="bg-gray-100 pb-8 text-sm dark:bg-zinc-900">
    <p
      class="mx-4 border-t pt-8 text-gray-400 dark:border-zinc-800 dark:text-zinc-500 md:mx-8 lg:max-w-screen-xl lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      © 2022, Aleksei Maslakov. All rights reserved.
    </p>
  </footer>
</div>
