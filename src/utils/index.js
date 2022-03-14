import { isValid, format, parseISO } from 'date-fns'

export const convertDate = (utcDate) => {
  if (!utcDate) {
    return 'Invalid Date'
  }

  const parsedDate = parseISO(utcDate)
  const isValidDate = isValid(parsedDate)
  if (isValidDate) {
    // parsedDate is a `Date` object, so you can use it directly,
    // instead of `new Date(utcDate)`
    const messageDate = format(parsedDate, 'PPP')
    return messageDate
  } else {
    return 'InvalidDate'
  }
}

export const countFormatter = (amount) => {
  if (amount >= 999999)
    return (amount / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'

  if (amount >= 1000) {
    const calculation = amount / 1000

    if (calculation >= 999)
      return calculation.toFixed(3).split('.')[0].replace(/\.0$/, '') + 'K'

    return calculation.toFixed(1).split('.')[0].replace(/\.0$/, '') + 'K'
  }

  return amount
}
