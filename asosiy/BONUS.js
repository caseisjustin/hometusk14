let studentsList = new Map()
const DB = {
    create(data){
        let checker = true
        studentsList.forEach(i => {
            if(i.fname == data.fname){
                checker = false
            }
        });
        if(checker)
            studentsList.set(data.fname, data)
        else{
            console.log("Bunday ismli student mavjud!!!")
            return 0
        }
        return studentsList
    },

    read(fname){
        let check = true
        studentsList.forEach(i => {
            if(i.fname == fname){
                console.log("\n\n", i)
                check = false
            }
        });
        if(check)
            return "\n\nFoydalanuvchi topilmadi"
        else
            return "Ism boycha topilgan ma'lumot"
        
    },

    update(fname, data){
        if(studentsList.has(fname)){
            studentsList.set(fname, data)
            console.log("\n\n Yangilangan ma'lumotlar")
            return studentsList
        }
        else{
            return "\nFoydalanuvchi topilmadi!"
        }
    },

    Delete(fname){
        if(studentsList.has(fname)){
            studentsList.delete(fname)
            return "\n\nFoydalanuvchi ochirildi!!!"
        }
        else{
            return "\n\nFoydalanuvchi topilmadi!"
        }
    }
}

let data = {fname: "Normad", yoshi: 15, guruh: "litsey"}
let data1 = {fname: "Shermat", yoshi: 12, guruh: "standart"}
let data2 = {fname: "Hurmat", yoshi: 14, guruh: "middle"}
let data3 = {fname: "Uchtet", yoshi: 16, guruh: "high"}
let data4 = {fname: "Gornan", yoshi: 10, guruh: "beginner"}
let data5 = {fname: "Jarmad", yoshi: 13, guruh: "litsey"}
let data6 = {fname: "Aoruv", yoshi: 17, guruh: "high"}
let data7 = {fname: "Overba", yoshi: 18, guruh: "high"}
console.log(`\n${DB.create(data)}`)
console.log(DB.create(data1))
console.log(DB.create(data2))
console.log(DB.create(data3))
console.log(DB.create(data4))
console.log(DB.create(data5))
console.log(DB.create(data6))
console.log(DB.create(data7))





console.log(DB.read("Normad"))




console.log(DB.update("Normad", {fname: "Zokir", yoshi: 18}))



console.log(DB.Delete("Normad"))