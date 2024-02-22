<script>
  import Footer from '$lib/components/Footer.svelte';
  import Head from '$lib/components/Head.svelte';
  import Header from '$lib/components/Header.svelte';
  import Content from '$lib/components/terms/Content.svelte';

  export const prerender = true;
</script>

<svelte:head>
  <Head />
</svelte:head>

<div class="flex min-h-screen w-full flex-col bg-white font-sans dark:bg-zinc-900/95">
  <Header />
  <Content />
  <Footer />
</div>
