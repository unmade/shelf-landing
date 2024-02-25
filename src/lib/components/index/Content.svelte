<script>
  import BoltOutlined from '../icons/BoltOutlined.svelte';
  import CircleStackOutlined from '../icons/CircleStackOutlined.svelte';
  import CloudMini from '../icons/CloudMini.svelte';
  import SwatchOutlined from '../icons/SwatchOutlined.svelte';
  import DevicePhoneMobileOutlined from '../icons/DevicePhoneMobileOutlined.svelte';
  import SearchOutlined from '../icons/SearchOutlined.svelte';
  import ServerStackOutlined from '../icons/ServerStackOutlined.svelte';

  import FeatureItem from './FeatureItem.svelte';
  import LinkButton from './LinkButton.svelte';
  import BanknotesOutlined from '../icons/BanknotesOutlined.svelte';
    import GithubButton from './GithubButton.svelte';
    import SupportProjectButton from './SupportProjectButton.svelte';
</script>

<main>
  <section
    class="flex flex-col items-center justify-center bg-zinc-900 text-gray-800 dark:text-zinc-200 bg-gradient-to-br from-sky-100 via-pink-100 to-violet-100 px-4 py-10 pt-14 md:px-20 lg:px-0 lg:pt-28 dark:from-sky-800 dark:via-pink-800 dark:to-amber-600"
  >
    <h1 class="max-w-3xl text-center text-5xl font-semibold lg:text-7xl">
      A Private Shelf for <br /> Your Photos
    </h1>
    <p
      class="mt-10 max-w-2xl px-4 text-center text-lg font-light text-gray-600 md:px-16 lg:px-0 lg:text-xl dark:text-zinc-100/80"
    >
      Upload, organize, and access your photos effortlessly, with the added intelligence of AI to
      streamline your experience
    </p>

    <div class="mt-16 flex space-x-4 px-4">
      <LinkButton to="https://app.getshelf.cloud/signup">
        <CloudMini slot="icon" />
        <slot>
          <span class="hidden md:inline">Try Shelf Cloud</span>
          <span class="md:hidden">Get started</span>
        </slot>
      </LinkButton>

      <GithubButton />
      <SupportProjectButton />
    </div>

    <div class="mt-12 md:w-10/12">
      <picture class="px-12 md:px-0">
        <source srcset="browser-dark.webp" media="(prefers-color-scheme: dark)" />
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
    class="bg-gradient-to-br from-pink-100 via-violet-100 to-sky-100 px-4 pb-14 lg:px-0 lg:py-14 lg:pt-8 xl:mx-auto dark:from-transparent dark:to-transparent dark:py-14 dark:lg:py-14"
  >
    <h2
      class="mx-auto w-fit bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-center text-xl font-semibold capitalize text-transparent lg:text-2xl dark:from-indigo-500 dark:via-violet-500 dark:to-purple-500"
    >
      Own your photos
    </h2>
    <h3 class="mt-1 text-center text-3xl font-medium text-gray-700 lg:text-5xl dark:text-zinc-200">
      All You Need to Manage Your Photos
    </h3>
    <div
      class="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:max-w-screen-xl lg:grid-cols-3 lg:gap-8 lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <FeatureItem
        title="Fast and efficient"
        description="We try to keep hardware requirements to a minimum so you can run it on your old laptop"
      >
        <BoltOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Automatic Categorization"
        description="We use AI image classification to automatically categorise your photos"
        sidenote="Cloud only"
      >
        <SwatchOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Powerful Search"
        description="Our AI-powered search makes it easy to find your precious moments"
        sidenote="Coming soon"
      >
        <SearchOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Mobile friendly"
        description="Shelf Cloud looks good on all screens whether it is a large HiDPI monitor or just a mobile phone"
      >
        <DevicePhoneMobileOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="Self-hosted"
        description="Run your own Shelf Cloud instance on the hardware of your choice and be in control of your data"
      >
        <ServerStackOutlined slot="icon" />
      </FeatureItem>

      <FeatureItem
        title="S3-compatible"
        description="Use your local filesystem or any S3-compatible storage of your choice"
      >
        <CircleStackOutlined slot="icon" />
      </FeatureItem>
    </div>
  </section>

  <section class="bg-gray-100 shadow-inner dark:bg-zinc-900 dark:shadow-none">
    <div
      class="mx-4 flex justify-between py-14 lg:max-w-screen-xl lg:px-10 xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div class="w-full">
        <h2 class="text-xl font-semibold text-gray-600 lg:text-3xl dark:text-zinc-200">
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
