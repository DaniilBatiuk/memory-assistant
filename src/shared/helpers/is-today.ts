export const isToday = (createdAt: Date) => {
  const createdAtTime = new Date(createdAt).toLocaleDateString()
  const now = new Date(Date.now()).toLocaleDateString()
  return now === createdAtTime
}
