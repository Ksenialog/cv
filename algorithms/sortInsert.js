const data = [
  {
    ticker: 'WISH',
    price: 5.14
  },
  {
    ticker: 'SPCE',
    price: 20.10
  },
  {
    ticker: 'AAPL',
    price: 151.86
  },
  {
    ticker: 'QCOM',
    price: 155.98,
  },
  {
    ticker: 'ABNB',
    price: 178.06,
  }
];

const loaded = {
  ticker: 'BABA',
  price: 11.99
}

const sortPush = (array, element) => {
  let pointOfInsertion = 0
  
  while (pointOfInsertion < array.length && element.price > array[pointOfInsertion].price) {
    pointOfInsertion += 1
  }
  
  return pointOfInsertion === 0
    ? [element, ...array]
    : [...array.slice(0, pointOfInsertion), loaded, ...array.slice(pointOfInsertion)]
}

console.log(sortPush(data, loaded))