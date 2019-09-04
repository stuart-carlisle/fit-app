// Get visible expenses

export default (exercises, { text, sortBy }) => {
  
  return exercises.filter((exercise) => {
      const textMatch = exercise.description.toLowerCase().includes(text.toLowerCase())
      return textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.lastUsed < b.lastUsed ? 1 : -1;
      } else if (sortBy === 'alphabetical') {
        return a.description > b.description ? 1 : -1;
      }
    })
  } 
