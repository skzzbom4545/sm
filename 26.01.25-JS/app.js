
var  number = parseInt(prompt("Մուտքագրեք ցանկացած թիվ:"));

if (number <= 1) {
  console.log(number + " ոչ պարզ է,ոչ բաղադրյալ:");
} else {
  var isPrime = true;
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number + " պարզ է:");
  } else {
    console.log(number + " բաղադրյալ է:");
  }
}






var numbers = [2, 33, 44, 5, 86, 37, 8, 9, 10, 11, 13, 20];
var primeCount = 0;

for (var s = 0; s < numbers.length; s++) {
    var num = numbers[s];

    if (num <= 1) continue;
    var isPrime = true

    for (var j = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primeCount++;
}

console.log("Պարզ թվերի քանակը՝", primeCount);





var numbers = [2, 33, 44, 9, 10, 11, 13, 20];
var divisor = parseInt(prompt("Մուտքագրեք թիվը:"));

var filteredNumbers = numbers.filter(num => num % divisor !== 0);

console.log("Չբաժանվող թվերը:", filteredNumbers);





  
const arr = [2, 33, 44, 9, 10, 11, 13, 20];
var sum = 0;
 
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
    }
  }
  
  console.log(sum);