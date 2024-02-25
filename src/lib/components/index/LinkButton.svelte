<script>
  /** @type {string} */
  export let to;

  export let type = 'primary';
  export let size = 'base';

  /** @type {Object.<string, string>} */
  const colorsByType = {
    primary: [
      'shadow dark:shadow-lg text-white',
      'bg-gradient-to-b from-teal-400 to-emerald-500',
      'hover:bg-gray-100 hover:from-teal-300/90 hover:to-emerald-400/90',
      'dark:bg-gradient-to-br dark:from-teal-500 dark:to-emerald-500',
      'dark:hover:from-teal-500 dark:hover:to-emerald-500/90'
    ].join(' '),
    text: [
      'text-gray-700',
      'hover:bg-gradient-to-b hover:from-white/50 hover:to-white/60',
      'dark:text-zinc-200',
      'dark:hover:bg-gradient-to-b dark:hover:from-white/10 dark:hover:to-white/5'
    ].join(' ')
  };

  /** @type {Object.<string, string>} */
  const paddingsBySize = {
    base: 'py-2 px-3 lg:px-4',
    lg: 'py-2 px-5 lg:py-3 lg:px-8'
  };

  const color = colorsByType[type];
  const padding = paddingsBySize[size];
</script>

<a href={to} class="inline-block rounded-lg {padding} {color} font-medium lg:rounded-xl">
  {#if $$slots.icon}
    <div class="flex items-center">
      <slot name="icon" />
      <span class="ml-2">
        <slot />
      </span>
    </div>
  {:else}
    <slot />
  {/if}
</a>
