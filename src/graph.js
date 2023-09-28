function lowerAndStrip(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '')
}

export default function constructGraph(strList) {
  let graph = {}
  
  let currentLevel = graph

  for (const str of strList) {
    for (const c of lowerAndStrip(str)) {
      if (!(c in currentLevel)) {
        currentLevel[c] = {}
      }
      if (!('strs' in currentLevel)) {
        currentLevel['strs'] = [str]
      } else {
        currentLevel['strs'].push(str)
      }
      currentLevel = currentLevel[c]
    }
    currentLevel = graph
  }

  return graph
}