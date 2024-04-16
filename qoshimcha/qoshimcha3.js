function letit(arr){
    let name, age, email, phone;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 18)
            age = arr[i]

        else if(arr[i]=="Salim")
            name = arr[i]
        
        else if(arr[i].includes("@gmail.com"))
            email = arr[i]
    
        else if(arr[i].includes("+998"))
            phone = arr[i]
    }
    return {age, email, name, phone}
}

let user = ["Salim", 18, "salim@gmail.com", "+9982873"]
console.log(JSON.stringify(letit(user)))
