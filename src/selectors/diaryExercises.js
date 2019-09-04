// Get visible exercises

export default (diaryExercises, { date }) => {
  
  return diaryExercises.filter((exercise) => {
      const dateMatch = exercise.diaryDate === date.valueOf()
      return dateMatch
    })
} 
