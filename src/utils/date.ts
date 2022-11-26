export const calcDiffInYears = (
  startDateString: string,
  endDateTimestamp: number = Date.now(),
): number => {
  const yearInMs = 1000 * 60 * 60 * 24 * 365;

  return (endDateTimestamp - Date.parse(startDateString)) / yearInMs;
};

export const formatYearString = (year: number): string => {
  if (year < 1) {
    const monthString = Math.floor(year * 12).toLocaleString('en-GB', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    });

    const monthSuffix = monthString === '1' ? 'month' : 'months';

    return `${monthString} ${monthSuffix}`;
  }

  const yearString = year.toLocaleString('en-GB', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  const yearSuffix = yearString === '1' ? 'year' : 'years';

  return `${yearString} ${yearSuffix}`;
};
