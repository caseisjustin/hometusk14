function numInStr(arr){
    let checker = true
    let res = []
    for (const i in arr){
        let check = false
        for(let j = 0; j<arr[i].length; j++)
            if(arr[i][j] < "A"){
                check = true
                checker = false
                break
            }
        if(check)
            res.push(arr[i])
    }
    if(checker)
        return arr
    else
        return res
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["this is a test", "test1"]))
console.log(numInStr(["HELLO", "WORLD", "NO", "NUMS"]))