export const getLocalStorageItem = (key: string) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key)
}

export const createInitials = (name: string = '', length: 1 | 2 = 2) => {
  if (!name) return ''
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, length)
    .toUpperCase()
}

export const pluralize = (value: number, word: string) => {
  return `${value} ${word}${value !== 1 ? 's' : ''}`
}

export const getLastSeenTime = (date: Date) => {
  const currentDate = new Date()
  const diff = currentDate.getTime() - date.getTime()

  const seconds = Math.floor(diff / 1000)
  if (seconds < 60) {
    return `${seconds}s`
  }

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return `${minutes} min`
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return `${hours}h`
  }

  const days = Math.floor(hours / 24)
  if (days < 7) {
    return `${days} day`
  }

  const weeks = Math.floor(days / 7)
  if (weeks < 4) {
    return `${weeks}w`
  }

  const months = Math.floor(days / 30)
  if (months < 12) {
    return `${months} month`
  }

  const years = Math.floor(months / 12)
  return `${years} year`
}

export const getAsciiAverage = (str: string) => {
  const sum = str
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((acc, cur) => acc + cur, 0)
  return Math.floor(sum / str.length)
}
