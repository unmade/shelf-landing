<script>
  import LinkButton from './LinkButton.svelte';
</script>

<header class="bg-gradient-to-r from-sky-100 to-pink-100 dark:from-sky-800 dark:to-pink-800">
  <div class="px-4 py-4">
    <div class="flex w-full items-center justify-between lg:mx-auto lg:max-w-7xl">
      <div class="flex">
        <div class="flex">
          <div class="mr-2 flex items-center rounded-xl bg-white p-2 dark:bg-white/5">
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
            class="inline-block h-7 py-1 font-mono text-2xl font-bold text-gray-800 dark:text-zinc-200"
          >
            shelf
          </div>
        </div>

        <!-- <div class="ml-10 space-x-8 text-lg flex items-center justify-center font-medium dark:text-zinc-200">
          <div>Features</div>
          <div>Pricing</div>
          <div>Roadmap</div>
          <div>Self-hosting</div>
        </div> -->
      </div>

      <div class="space-x-4">
        <LinkButton to="https://app.getshelf.cloud/signin" type="text">
          <span class="px-1"> Log In </span>
        </LinkButton>
        <LinkButton to="https://app.getshelf.cloud/signup">
          <span class="px-1"> Sign Up </span>
        </LinkButton>
      </div>
    </div>
  </div>
</header>
