<script>
  import BackspaceKey from './lib/BackspaceKey.svelte'
  import ClearKey from './lib/ClearKey.svelte'
  import LetterKey from './lib/LetterKey.svelte'
  import { streetDictionary } from './streets'
  import constructGraph from './graph'

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

  const filterGraph = constructGraph(Object.keys(streetDictionary))
  let currentLevel = filterGraph
  let prevLevels = []

  let filteredStreets = Object.keys(streetDictionary)

  let selectedStreet
  let selectedDistrict
  let filterText = ''

  function resetFilterText() {
    filterText = ''
    filteredStreets = Object.keys(streetDictionary)
    currentLevel = filterGraph
    prevLevels = []
    selectedStreet = null
    selectedDistrict = null
  }

  let appendFilterText = (letter) => {
    filterText += letter
    prevLevels.push(currentLevel)
    currentLevel = currentLevel[letter]
    filteredStreets = currentLevel['strs']
    if (!(selectedStreet in filteredStreets)) {
      selectedStreet = null
      selectedDistrict = null
    }
  }

  function shortenFilterText() {
    filterText = filterText.slice(0, -1)
    currentLevel = prevLevels.pop()
    filteredStreets = currentLevel['strs']
  }

  let disable = (letter) => !(letter in currentLevel)
</script>

<main>
  <div class="mx-auto p-1">
    <div class="flex flex-col">
      <div class="flex flex-row gap-2">
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
              <option value={street}>{street}</option>
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
        <ClearKey disabled={!filterText} clickHandler={resetFilterText} />
      </div>
      <div class="mt-2 flex flex-col gap-1">
        <div class="flex flex-row gap-1">
          <LetterKey
            letter={'q'}
            clickHandler={appendFilterText}
            disabled={!('q' in currentLevel)}
          />
          <LetterKey
            letter={'w'}
            clickHandler={appendFilterText}
            disabled={!('w' in currentLevel)}
          />
          <LetterKey
            letter={'e'}
            clickHandler={appendFilterText}
            disabled={!('e' in currentLevel)}
          />
          <LetterKey
            letter={'r'}
            clickHandler={appendFilterText}
            disabled={!('r' in currentLevel)}
          />
          <LetterKey
            letter={'t'}
            clickHandler={appendFilterText}
            disabled={!('t' in currentLevel)}
          />
          <LetterKey
            letter={'y'}
            clickHandler={appendFilterText}
            disabled={!('y' in currentLevel)}
          />
          <LetterKey
            letter={'u'}
            clickHandler={appendFilterText}
            disabled={!('u' in currentLevel)}
          />
          <LetterKey
            letter={'i'}
            clickHandler={appendFilterText}
            disabled={!('i' in currentLevel)}
          />
          <LetterKey
            letter={'o'}
            clickHandler={appendFilterText}
            disabled={!('o' in currentLevel)}
          />
          <LetterKey
            letter={'p'}
            clickHandler={appendFilterText}
            disabled={!('p' in currentLevel)}
          />
        </div>
        <div class="flex flex-row gap-1">
          <LetterKey
            letter={'a'}
            clickHandler={appendFilterText}
            disabled={!('a' in currentLevel)}
          />
          <LetterKey
            letter={'s'}
            clickHandler={appendFilterText}
            disabled={!('s' in currentLevel)}
          />
          <LetterKey
            letter={'d'}
            clickHandler={appendFilterText}
            disabled={!('d' in currentLevel)}
          />
          <LetterKey
            letter={'f'}
            clickHandler={appendFilterText}
            disabled={!('f' in currentLevel)}
          />
          <LetterKey
            letter={'g'}
            clickHandler={appendFilterText}
            disabled={!('g' in currentLevel)}
          />
          <LetterKey
            letter={'h'}
            clickHandler={appendFilterText}
            disabled={!('h' in currentLevel)}
          />
          <LetterKey
            letter={'j'}
            clickHandler={appendFilterText}
            disabled={!('j' in currentLevel)}
          />
          <LetterKey
            letter={'k'}
            clickHandler={appendFilterText}
            disabled={!('k' in currentLevel)}
          />
          <LetterKey
            letter={'l'}
            clickHandler={appendFilterText}
            disabled={!('l' in currentLevel)}
          />
        </div>
        <div class="flex flex-row gap-1">
          <LetterKey
            letter={'z'}
            clickHandler={appendFilterText}
            disabled={!('z' in currentLevel)}
          />
          <LetterKey
            letter={'x'}
            clickHandler={appendFilterText}
            disabled={!('x' in currentLevel)}
          />
          <LetterKey
            letter={'c'}
            clickHandler={appendFilterText}
            disabled={!('c' in currentLevel)}
          />
          <LetterKey
            letter={'v'}
            clickHandler={appendFilterText}
            disabled={!('v' in currentLevel)}
          />
          <LetterKey
            letter={'b'}
            clickHandler={appendFilterText}
            disabled={!('b' in currentLevel)}
          />
          <LetterKey
            letter={'n'}
            clickHandler={appendFilterText}
            disabled={!('n' in currentLevel)}
          />
          <LetterKey
            letter={'m'}
            clickHandler={appendFilterText}
            disabled={!('m' in currentLevel)}
          />
          <BackspaceKey
            disabled={!filterText}
            clickHandler={() => shortenFilterText()}
          />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
