<script>
  import LetterKey from './lib/LetterKey.svelte'
  import { streetDictionary } from './streets'

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

  let filteredStreets = Object.keys(streetDictionary)

  let selectedStreet
  let selectedDistrict
  let filterText = 'hello'

  function resetFilterText() {
    filterText = ''
    filteredStreets = Object.keys(streetDictionary)
  }

  let appendFilterText = (letter) => (filterText += letter)
</script>

<main>
  <div class="mx-auto p-1">
    <div class="flex flex-col">
      <div class="flex flex-row gap-1">
        <div class="basis-1/2">
          {#if selectedDistrict}
            <fieldset class="w-full rounded-md border border-gray-300 p-1">
              <legend class="text-sm">District {selectedDistrict}</legend>
              <p>{districts[selectedDistrict].location}</p>
              <p>{districts[selectedDistrict].address}</p>
            </fieldset>
          {/if}
        </div>
        <div class="basis-1/2">
          <label for="streets" class="block text-sm">Choose a street:</label>
          <select
            class="w-full rounded-md border border-gray-300"
            id="streets"
            name="streets"
            size="10"
            bind:value={selectedStreet}
            on:change={() =>
              (selectedDistrict = streetDictionary[selectedStreet])}
          >
            {#each filteredStreets as street}
              <option value={street}> {street}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="mt-2 flex gap-2">
        <div class="flex-grow p-1 rounded-md border border-gray-300">
          {#if filterText}
            {filterText}
          {:else}
            <p class="text-gray-300">enter text to filter street list</p>
          {/if}
        </div>
        <div>
          <button
            class="p-1 rounded-md border border-red-400 bg-red-200 {filterText
              ? ''
              : 'opacity-50 cursor-not-allowed'}"
            on:click={resetFilterText}
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
      </div>
      <div class="mt-2 flex flex-col">
        <div class="flex flex-row justify-center">
          <div class="p-1 grow">
            <button
              class="p-1 w-full rounded-md border border-gray-300"
              on:click={() => (filterText += 'q')}>q</button
            >
          </div>
          <div class="p-1 grow">
            <button
              class="p-1 w-full rounded-md border border-gray-300"
              on:click={() => (filterText += 'w')}>w</button
            >
          </div>
          <div class="p-1 grow">
            <button
              class="p-1 w-full rounded-md border border-gray-300"
              on:click={() => (filterText += 'e')}>e</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >r</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >t</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >y</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >u</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >i</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >o</button
            >
          </div>
          <div class="p-1 grow">
            <button class="p-1 w-full rounded-md border border-gray-300"
              >p</button
            >
          </div>
        </div>
        <div class="flex flex-row">
          <LetterKey letter={'a'} clickHandler={appendFilterText} />
          <LetterKey letter={'s'} clickHandler={appendFilterText} />
          <LetterKey letter={'d'} clickHandler={appendFilterText} />
          <LetterKey letter={'f'} clickHandler={appendFilterText} />
          <LetterKey letter={'g'} clickHandler={appendFilterText} />
          <LetterKey letter={'h'} clickHandler={appendFilterText} />
          <LetterKey letter={'j'} clickHandler={appendFilterText} />
          <LetterKey letter={'k'} clickHandler={appendFilterText} />
          <LetterKey letter={'l'} clickHandler={appendFilterText} />
        </div>
        <div class="flex flex-row">
          <LetterKey letter={'z'} clickHandler={appendFilterText} />
          <LetterKey letter={'x'} clickHandler={appendFilterText} />
          <LetterKey letter={'c'} clickHandler={appendFilterText} />
          <LetterKey letter={'v'} clickHandler={appendFilterText} />
          <LetterKey letter={'b'} clickHandler={appendFilterText} />
          <LetterKey letter={'n'} clickHandler={appendFilterText} />
          <LetterKey letter={'m'} clickHandler={appendFilterText} />
          <div class="p-1 grow">
            <button
              class="p-1 w-full flex justify-center rounded-md border border-gray-300 {filterText
                ? ''
                : 'opacity-50 cursor-not-allowed'}"
              on:click={() => (filterText = filterText.slice(0, -1))}
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
                  d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
