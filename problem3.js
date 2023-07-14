function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function sumPrimes(high, wide, start) {
    const primes = [];
    let currentNumber = start;
  
    while (primes.length < high * wide) {
      if (isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }
  
    const primeSum = primes.reduce((sum, prime) => sum + prime, 0);
  
    // Membangun segiempat
    const square = [];
    for (let i = 0; i < high; i++) {
      const row = primes.slice(i * wide, (i + 1) * wide);
      square.push(row);
    }
  
    return [square, primeSum];
  }
  
  // Menggunakan fungsi sumPrimes untuk membuat segiempat dan menghitung jumlah bilangan prima
  const high = 4;
  const wide = 5;
  const start = 10;
  const [square, primeSum] = sumPrimes(high, wide, start);
  
  // Menampilkan segiempat
  for (const row of square) {
    console.log(row);
  }
  
  // Menampilkan jumlah bilangan prima
  console.log("Jumlah bilangan prima:", primeSum);
  