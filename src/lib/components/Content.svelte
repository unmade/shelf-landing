<script>
  import FeatureItem from './FeatureItem.svelte';
</script>

<main>
  <section
    class="flex flex-col items-center justify-center bg-zinc-900 bg-gradient-to-br from-sky-100 via-pink-100 to-violet-100 px-4 py-10 pt-14 dark:from-sky-800 dark:via-pink-800 dark:to-amber-600 md:px-20 lg:px-0 lg:pt-28"
  >
    <h1
      class="max-w-3xl text-center text-5xl font-semibold text-gray-700 dark:text-zinc-200 lg:text-7xl"
    >
      File manager that keeps your files organized
    </h1>
    <p
      class="mt-10 max-w-2xl px-16 text-center text-lg font-light text-gray-500 dark:text-zinc-100/80 lg:px-0 lg:text-xl"
    >
      Shelf is a cloud and self-hosted open-source file manager with an accent on speed, efficience
      and reliability
    </p>

    <div class="mt-16 flex space-x-4 px-4">
      <a
        href="https://app.getshelf.cloud/signup"
        class="inline-block rounded-lg bg-gradient-to-b from-teal-300 to-emerald-400 py-2 px-3 text-white shadow-lg hover:bg-gray-100 hover:from-teal-300/90 hover:to-emerald-400/90 dark:bg-gradient-to-br dark:from-sky-500 dark:to-pink-500 dark:hover:from-sky-500/90 dark:hover:to-pink-500/90 lg:rounded-xl lg:px-4"
      >
        <div class="flex items-center">
          <div class="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z"
              />
            </svg>
          </div>
          <div class="ml-2 block font-medium md:hidden">Get started</div>
          <div class="ml-2 hidden font-medium md:block">Join Shelf Cloud</div>
        </div>
      </a>

      <a
        href="https://github.com/unmade/shelf-showcase"
        target="_blank"
        rel="noreferrer"
        class="inline-block rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 py-2 px-3 text-gray-100 shadow-lg transition-colors ease-in-out hover:bg-gray-100 hover:from-gray-700/90 hover:to-gray-800/90 dark:from-zinc-700 dark:to-zinc-800 dark:text-zinc-200 dark:hover:from-zinc-700/90 dark:hover:to-zinc-800/90 lg:rounded-xl lg:px-4"
      >
        <div class="flex items-center">
          <div>
            <picture>
              <img
                src="/GitHub-Mark-Light-64px.png"
                class="h-5 w-5"
                title="GitHub Invertocat Logo"
                alt="GitHub Invertocat Logo"
                width="20"
                height="20"
                loading="eager"
              />
            </picture>
          </div>
          <div class="ml-2 block md:hidden">Source code</div>
          <div class="ml-2 hidden md:block">View on GitHub</div>
        </div>
      </a>
    </div>

    <div class="mt-12">
      <picture class="px-8 md:px-0">
        <source
          srcset="browser-dark.webp"
          media="(prefers-color-scheme: dark) and (min-width: 1024px)"
        />
        <source srcset="browser-light.webp" media="(min-width: 1024px)" />
        <source
          srcset="tablet-dark.webp"
          media="(prefers-color-scheme: dark) and (min-width: 768px)"
        />
        <source srcset="tablet-light.webp" media="(min-width: 768px)" />
        <source
          srcset="mobile-dark.webp"
          media="(prefers-color-scheme: dark) and (max-width: 768px)"
        />
        <source srcset="mobile-light.webp" media="(max-width: 768px)" />
        <img
          src="/browser-light.webp"
          title="Shelf Browser Preview"
          alt="Shelf Web Preview"
          loading="eager"
          width="1440"
          height="900"
        />
      </picture>
    </div>
  </section>

  <section
    class="bg-gradient-to-br from-pink-100 via-violet-100 to-sky-100 px-4 pb-14 dark:from-transparent dark:to-transparent dark:py-14 lg:py-14 lg:px-0 lg:pt-8 dark:lg:py-14 xl:mx-auto"
  >
    <h1
      class="mx-auto w-fit bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-center text-xl font-semibold text-transparent dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500 lg:text-2xl"
    >
      Own your files
    </h1>
    <h2 class="text-center text-3xl font-medium text-gray-700 dark:text-zinc-200 lg:text-5xl">
      All you need to manage your files in one place
    </h2>
    <div
      class="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:max-w-screen-xl lg:grid-cols-3 lg:gap-8 lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <FeatureItem
        title="Self-hosted"
        description="Run your own Shelf instance on the hardware of your choice and be in control of your data"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
      </FeatureItem>

      <FeatureItem
        title="Fast and efficient"
        description="We try to keep hardware requirements to a minimum so you can run it on your old laptop"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      </FeatureItem>

      <FeatureItem
        title="Mobile friendly"
        description="Shelf looks good on all screens whether it is a large HiDPI monitor or just a mobile phone"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      </FeatureItem>

      <FeatureItem
        title="S3-compatible"
        description="Use your local filesystem or any S3-compatible storage of your choice"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      </FeatureItem>

      <FeatureItem
        title="Duplicates finder"
        description="You can easily find duplicates and nearly-identical images to keep your files organized"
      >
        <svg
          slot="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </FeatureItem>

      <FeatureItem
        title="Public Sharing"
        description="Share your files with your friends and colleguages"
      >
        <div slot="icon" class="flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-10 w-10 shrink-0 rounded-lg bg-white/90 p-2 dark:bg-zinc-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
          <div class="flex items-center">
            <p
              class="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500  bg-clip-text px-2 py-1 text-sm font-medium text-transparent"
            >
              coming soon
            </p>
          </div>
        </div>
      </FeatureItem>
    </div>
  </section>

  <section class="bg-gray-100 shadow-inner dark:bg-zinc-900 dark:shadow-none">
    <div
      class="mx-4 flex justify-between py-14 lg:max-w-screen-xl lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="w-full">
        <h1 class="text-xl font-semibold text-gray-600 dark:text-zinc-200 lg:text-3xl">
          Try Shelf Cloud today
        </h1>
        <div class="flex items-center justify-between">
          <p
            class="mt-1 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent lg:text-3xl"
          >
            Join now and get
            <br class="md:hidden" />
            free 512MB storage
          </p>
          <a
            href="https://app.getshelf.cloud/signup"
            class="block rounded-lg bg-gradient-to-br from-teal-300 to-emerald-400 py-2 px-5 text-base text-white shadow-lg hover:bg-gray-100 hover:from-teal-300/90 hover:to-emerald-400/90 dark:from-sky-500 dark:to-pink-500 dark:hover:from-sky-500/90 dark:hover:to-pink-500/90 md:hidden lg:rounded-xl  lg:py-3 lg:px-8 lg:text-lg"
          >
            <div class="flex items-center font-medium">Join</div>
          </a>
        </div>
      </div>

      <div class="hidden items-center md:block">
        <a
          href="https://app.getshelf.cloud/signup"
          class="inline-block rounded-lg bg-gradient-to-br from-teal-300 to-emerald-400 py-2 px-5 text-base text-white shadow-lg hover:bg-gray-100 hover:from-teal-300/90 hover:to-emerald-400/90 dark:from-sky-500 dark:to-pink-500 dark:hover:from-sky-500/90 dark:hover:to-pink-500/90 lg:rounded-xl  lg:py-3 lg:px-8 lg:text-lg"
        >
          <div class="flex items-center font-medium">Join</div>
        </a>
      </div>
    </div>
  </section>
</main>
