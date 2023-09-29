<script>
  export let streets = []
  export let getDistrict

  const districts = {
    1: {
      location: 'West Hill School',
      address: 'Cronin Drive',
      bg: 'bg-amber-100'
    },
    2: {
      location: 'Moser School',
      address: '10 School Street',
      bg: 'bg-cyan-100'
    },
    3: {
      location: 'Griswold Middle School',
      address: '144 Bailey Road',
      bg: 'bg-purple-100'
    }
  }
</script>

<div class="grow max-h-full overflow-auto rounded-md border border-gray-300">
  {#each streets as street}
    <p
      class="p-0.25 last:pb-0 mb-0.5 last:mb-0 {districts[getDistrict(street)]
        .bg}"
    >
      {street} &nbsp; &#8658; &nbsp; {districts[getDistrict(street)].location}
    </p>
  {/each}
</div>
