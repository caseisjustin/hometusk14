let unli = "auoeiy"
let alphab = "abcdefghijklmnopqrstuvwxyz"
function nearestVowel(char){
    for(let i = 0; i<unli.length; i++)
        if(unli[i]==char)
            return char

    let indx = alphab.search(char)
    let before = indx
    for(indx; indx; indx++){
        if(unli.search(alphab[before]) != -1)
            return alphab[before]

        else if(unli.search(alphab[indx]) != -1)
            return alphab[indx]
        before--
    }
}


console.log(nearestVowel("b"))