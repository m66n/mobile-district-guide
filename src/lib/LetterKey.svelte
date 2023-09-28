<script>
  export let letter
  export let clickHandler
  export let disabled
</script>

<div class="grow">
  <button
    class="p-1 w-full rounded-md border border-gray-300 {disabled ? 'opacity-50 cursor-not-allowed' : 'bg-green-300'}"
    on:click={() => clickHandler(letter)}
    >{letter}
  </button>
</div>
