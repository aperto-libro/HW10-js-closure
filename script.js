console.log('------------- # 4');

function sum(x) {
  return function (y) {
    return x + y;
  };
}

const sum1 = sum(1);

console.log(sum1(2));
console.log(sum(1)(2));
