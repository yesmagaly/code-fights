function pairOfShoes(shoes) {
  var leftShoes = [];
  var rightShoes = [];

  // 1 ≤ shoes.length ≤ 25
  if (shoes.length < 1 || shoes.length > 25) {
    throw new Error('The number of shoes exceded the allowed quantity!')
  }

  const areValidSizes = shoes.every((shoe) => {
    return shoe[1] <= 100 && shoe[1] >= 1
  })
  
  if (!areValidSizes) {
    throw new Error('One of the shoe has a invalid size')
  }

  for (var i = 0; i < shoes.length; i++) {
    if (shoes[i][0] === 0) {
      leftShoes.push(shoes[i][1]);
    } else {
      rightShoes.push(shoes[i][1]);
    }
  }

  leftShoes.sort();
  rightShoes.sort();

  if (leftShoes.length !== rightShoes.length) {
    return false;
  }

  for (var i = 0; i < leftShoes.length; i++) {
    if (leftShoes[i] !== rightShoes[i]) {
      return false;
    }
  }
  return true;
}

module.exports = pairOfShoes
