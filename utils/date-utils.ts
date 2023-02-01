import dayjs from 'dayjs'

export default function getValidDate(date: string): string {
  const currentDate = dayjs()
  if (currentDate.isAfter(date)) {
    return currentDate.format('YYYY-MM-DD')
  } else {
    return date
  }
}

export function dayMonthFromDate(dateString: string): string {
  const date = new Date(dateString)
  return `${date.getDate()} ${date.toLocaleString('default', {
    month: 'long',
  })}`
}
