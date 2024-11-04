function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
  
    if (decimalInput === '' || isNaN(decimalInput)) {
      document.getElementById('binaryResult').innerHTML = '';
    } else {
      const binaryResult = decimalToBinary(decimalInput);
  
      document.getElementById('binaryResult').innerHTML = binaryResult ? `La représentation binaire est : ${binaryResult}` : '';
    }
  }
  
  function decimalToBinary(decimal) {
    if (decimal.includes('.')) {
      return '';
    }
  
    let binary = '';
    let quotient = parseInt(decimal);
  
    while (quotient > 0) {
      const rest = quotient % 2;
      binary = rest + binary;
      quotient = Math.floor(quotient / 2);
    }
  
    return binary;
  }

