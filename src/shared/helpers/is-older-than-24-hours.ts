export const isOlderThan24Hours = (createdAt: Date) => {
  const createdAtTime = new Date(createdAt).getTime()
  const now = Date.now()
  const diffInHours = (now - createdAtTime) / (1000 * 60 * 60)

  return diffInHours >= 24
}
