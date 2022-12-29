<script>
  export let title = '';
  export let description = '';
</script>

<div
  class="space-y-2 rounded-xl bg-white/50 p-6 text-gray-700 dark:bg-zinc-700/50 dark:text-zinc-200"
>
  <slot name="icon" />
  <h2 class=" text-lg font-medium">
    {title}
  </h2>
  <p class="text-base text-gray-800/60 dark:text-zinc-400">
    {description}
  </p>
</div>
