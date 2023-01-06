<script>
  import FeatureItem from './FeatureItem.svelte';
  import BoltOutlined from './icons/BoltOutlined.svelte';
  import CircleStackOutlined from './icons/CircleStackOutlined.svelte';
  import CloudMini from './icons/CloudMini.svelte';
  import DevicePhoneMobileOutlined from './icons/DevicePhoneMobileOutlined.svelte';
  import DocumentDuplicateOutlined from './icons/DocumentDuplicateOutlined.svelte';
  import LinkOutlined from './icons/LinkOutlined.svelte';
  import ServerStackOutlined from './icons/ServerStackOutlined.svelte';
  import LinkButton from './LinkButton.svelte';
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
      class="mt-10 max-w-2xl px-4 text-center text-lg font-light text-gray-500 dark:text-zinc-100/80 md:px-16 lg:px-0 lg:text-xl"
    >
      Shelf is a cloud and self-hosted open-source file manager with an accent on speed, efficience
      and reliability
    </p>

    <div class="mt-16 flex space-x-4 px-4">
      <LinkButton to="https://app.getshelf.cloud/signup">
        <CloudMini slot="icon" />
        <slot>
          <span class="hidden md:inline">Join Shelf Cloud</span>
          <span class="md:hidden">Get started</span>
        </slot>
      </LinkButton>

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
    <h2
      class="mx-auto w-fit bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-center text-xl font-semibold text-transparent dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500 lg:text-2xl"
    >
      Own your files
    </h2>
    <h3 class="text-center text-3xl font-medium text-gray-700 dark:text-zinc-200 lg:text-5xl">
      All you need to manage your files in one place
    </h3>
    <div
      class="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:max-w-screen-xl lg:grid-cols-3 lg:gap-8 lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <FeatureItem
        title="Self-hosted"
        description="Run your own Shelf instance on the hardware of your choice and be in control of your data"
      >
        <ServerStackOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Fast and efficient"
        description="We try to keep hardware requirements to a minimum so you can run it on your old laptop"
      >
        <BoltOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Mobile friendly"
        description="Shelf looks good on all screens whether it is a large HiDPI monitor or just a mobile phone"
      >
        <DevicePhoneMobileOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="S3-compatible"
        description="Use your local filesystem or any S3-compatible storage of your choice"
      >
        <CircleStackOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Duplicates finder"
        description="You can easily find duplicates and nearly-identical images to keep your files organized"
      >
        <DocumentDuplicateOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Public Sharing"
        description="Share your files with your friends and colleguages"
      >
        <LinkOutlined slot="icon" />
      </FeatureItem>
    </div>
  </section>

  <section class="bg-gray-100 shadow-inner dark:bg-zinc-900 dark:shadow-none">
    <div
      class="mx-4 flex justify-between py-14 lg:max-w-screen-xl lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="w-full">
        <h2 class="text-xl font-semibold text-gray-600 dark:text-zinc-200 lg:text-3xl">
          Try Shelf Cloud today
        </h2>
        <div class="flex items-center justify-between">
          <p
            class="mt-1 bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent lg:text-3xl"
          >
            Join now and get
            <br class="md:hidden" />
            free 512MB storage
          </p>
          <div class="md:hidden">
            <LinkButton to="https://app.getshelf.cloud/signup" size="lg">Join</LinkButton>
          </div>
        </div>
      </div>

      <div class="hidden items-center md:block">
        <LinkButton to="https://app.getshelf.cloud/signup" size="lg">Join</LinkButton>
      </div>
    </div>
  </section>
</main>
