function fibonacci(num) {
	let fib=[0,1];
    for(let i=2;i<num;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    console.log(fib);
    return fib[num-1];
}

module.exports = fibonacci;
