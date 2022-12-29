<script>
  /** @type {string} */
  export let title;

  /** @type {string} */
  export let description;

  export const comingSoon = false;
</script>

<div
  class="space-y-2 rounded-xl bg-white/50 p-6 text-gray-700 dark:bg-zinc-700/50 dark:text-zinc-200"
>
  {#if $$props.comingSoon}
    <div class="flex justify-between">
      <div class="h-10 w-10 rounded-lg bg-white/90 p-2 dark:bg-zinc-800">
        <slot name="icon" />
      </div>
      <div class="flex items-center">
        <p
          class="rounded-lg bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500  bg-clip-text px-2 py-1 text-sm font-medium text-transparent"
        >
          coming soon
        </p>
      </div>
    </div>
  {:else}
    <div class="h-10 w-10 rounded-lg bg-white/90 p-2 dark:bg-zinc-800">
      <slot name="icon" />
    </div>
  {/if}
  <h2 class=" text-lg font-medium">
    {title}
  </h2>
  <p class="text-base text-gray-800/60 dark:text-zinc-400">
    {description}
  </p>
</div>
