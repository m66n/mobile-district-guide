// @ts-nocheck
function lowerAndStrip(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '')
}

function pushStreet(str, lvl) {
  if (!('strs' in lvl)) {
    lvl['strs'] = [str]
  } else {
    lvl['strs'].push(str)
  }
}

export default function constructGraph(strList) {
  let graph = {}

  let currentLevel = graph

  for (const str of strList) {
    for (const c of lowerAndStrip(str)) {
      if (!(c in currentLevel)) {
        currentLevel[c] = {}
      }
      pushStreet(str, currentLevel)
      currentLevel = currentLevel[c]
    }
    pushStreet(str, currentLevel)
    currentLevel = graph
  }

  return graph
}
