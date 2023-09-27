<script>
  export let letter
  export let clickHandler
</script>

<div class="p-1 grow">
  <button
    class="p-1 w-full rounded-md border border-gray-300"
    on:click={() => clickHandler(letter)}
    >{letter}
  </button>
</div>
