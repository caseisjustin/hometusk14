function countAll(str){
    let result = {"HARFLAR": 0, "RAQMLAR": 0}
    for (const i in str) 
        if(str[i] < ":" && str[i] > "/")
            result["RAQMLAR"]++
        else if((str[i] > "A" && str[i] < "Z") || (str[i] > "a" && str[i] < "z"))
            result["HARFLAR"]++

    return result
}

console.log(countAll("Hello World"))
console.log(countAll("987654321 World"))
console.log(countAll("123"))
console.log(countAll("Hello 0 World"))
