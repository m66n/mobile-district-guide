<script>
  export let disabled
  export let clickHandler
</script>

<div>
  <button
    class="p-1 rounded-md border border-red-400 bg-red-200 {disabled
      ? 'opacity-50 cursor-not-allowed'
      : ''}"
    on:click={() => clickHandler()}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg></button
  >
</div>
