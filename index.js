function add(str) {
    if (str === '') return 0; 
    let delimiter = /[,\n ;]/; 
    const regex = /^\/\/(.+)\n/; 
    const delimeterMatch = str.match(regex); 
  
    if (delimeterMatch) {
      delimiter = new RegExp(`[${delimeterMatch[1]}]`); 
      str = str.slice(delimeterMatch[0].length); 
    }
  
    const numbers = str.split(delimiter).map(Number).filter(num => !isNaN(num));
  
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
  }

try {
    // console.log(add(''));
    // console.log(add('1'));
    // console.log(add('1,5'));
    // console.log(add('1,2\n3'));
    // console.log(add('1,-2,3\n-4,5')); 
    // console.log(add('//;3\n;-4;-7;1;-8')); 
  }
  catch(error){
      console.error(error.message);
  }
