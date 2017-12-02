function centuryFromYear(year) {
  // 50 / 100 = 0.5.round = 1
  // 100 / 100 = 1. round = 1
  // 130 / 100 = 1.3.round = 2
  // 1 ≤ year ≤ 2005.
  if (year > 2005 || year < 1) {
    throw new Error('Invalid year')
  }
  
  const century = year / 100
  return Math.ceil(century)
}

module.exports = centuryFromYear
