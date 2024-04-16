const users = [
    {
        intro: {
            fistname: "Solih",
            lastname: "Abdullayev",
        },
        age: 24,
        addess: ["Toshkent, Yashnabod", "Samarqand", "Mikrayon"],
        contact: {
            email: "samad@gmail.com",
            social: {
                telegram: "@samad001",
                instagram: "@samad1k",
            },
            phone: ["+99 899 811 22 10", "+99 899 811 22 12"],
        },
        extra_info: {
            father: "Halim Abdullayev",
        },
    },
    {
        intro: {
            fistname: "Jamol",
        },
        contact: {
            email: "jamol@gmail.com",
            phone: ["+99 890 500 11 11"],
        },
        addess: ["Toshkent, Yunusobod"],
    },    
];




// YOSH
function yosh(arr){
    let j = 0
    for (let i in arr)
        if(arr[i].age)
            console.log(++j, "chi foydalanuvchining yoshi", arr[i].age)
        else
            console.log(++j,"chi foydalanuvchining yoshi kiritilmagan!!")
        j++
}
yosh(users)
console.log("\n\n")




// TELEFON RAQAMLARI
function phoneNum(arr){
    let j = 0
    for(let i in arr)
        if(arr[i].contact.phone)
            console.log(arr[i].contact.phone)
        else
            console.log(++j, "chi foydalanuvchining tel raqami yoq")
        j++
}
phoneNum(users)
console.log("\n\n")




// TELEGRAM ADDRESSLARI
function tgAddr(arr){
    let j = 0
    for(let i in arr)
        if(arr[i].contact?.social?.telegram)
            console.log(++j, "chi foydalanuvchining telegrami", arr[i].contact.social.telegram)
        else
            console.log(++j, "chi foydalanuvchining social tarmogi yoq")
        j++
}
tgAddr(users)