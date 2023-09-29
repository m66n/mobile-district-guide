<script>
  export let streets = []
  export let getDistrict

  const districts = {
    1: {
      location: 'West Hill School',
      address: 'Cronin Drive'
    },
    2: {
      location: 'Moser School',
      address: '10 School Street'
    },
    3: {
      location: 'Griswold Middle School',
      address: '144 Bailey Road'
    }
  }
</script>

<div class="grow max-h-full overflow-auto rounded-md border border-gray-300">
  {#each streets as street}
  <p class="p-0.5">{street}: {districts[getDistrict(street)].location}</p>
  {/each}
</div>
