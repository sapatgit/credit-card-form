export const generateMonthOptions = () => {
  const monthOptions = [];
  
  for (let i = 1; i <= 12; i++) {
    const option = i.toString();
    if (option.length < 2) {
      monthOptions.push({ key: i - 1, text: '0' + option, value: '0' + option});
    } else {
      monthOptions.push({ key: i - 1, text: option, value: option});
    }
  }

  return monthOptions;
};

export const generateYearOptions = (start, end) => {
  const yearOptions = [];

  for (let i = start; i <= end; i++) {
    const option = i.toString();
    yearOptions.push({key: i - start, text: option, value: option});
  }

  return yearOptions;
};

export const [CARDNUMBER, CARDHOLDER, DATE, CVV] = ['CARDNUMBER', 'CARDHOLDER', 'DATE', 'CVV'];