const Expenses = {
    "suv": [{date: "2024-01-31", amount: 30000}],
    "gaz": [{date: "2024-01-31", amount: 15000}],
    "elektr": [{date: "2024-01-31", amount: 20000}],
    addExpense(type, data){
        if(type == "suv")
            this["suv"].push(data)
        else if(type == "gaz")
            this["gaz"].push(data)
        else if(type == "elektr")
            this["elektr"].push(data)
    },
    removeExpenseBydate(type, chislo){
        if(type == "suv")
            for(let i = 0; i < this["suv"].length; i++)
                if(this["suv"][i].date == chislo)
                    delete this["suv"][i]

        if(type == "gaz")
            for(let i = 0; i < this["gaz"].length; i++)
                if(this["gaz"][i].date == chislo)
                    delete this["gaz"][i]

        if(type == "elektr")
            for(let i = 0; i < this["elektr"].length; i++)
                if(this["elektr"][i].date == chislo)
                    delete this["elektr"][i]
    },
    totalReport(){
        let res = 0
        for(let i = 0; i < this["suv"].length; i++)
            if(this["suv"][i])
                res += this["suv"][i].amount
            
        for(let i = 0; i < this["gaz"].length; i++)
            if(this["gaz"][i])
                res += this["gaz"][i].amount

        for(let i = 0; i < this["elektr"].length; i++)
            if(this["elektr"][i])
                res += this["elektr"][i].amount

        return `TOTAL report for all months ${res}`
    }
}


let expenSuv = {date: "2024-02-29", amount: 40000}
let expenGaz = {date: "2024-04-30", amount: 12000}
let expenElektr = {date: "2024-03-31", amount: 23000}

Expenses.addExpense("suv", expenSuv)
Expenses.addExpense("gaz", expenGaz)
Expenses.addExpense("elektr", expenElektr)


Expenses.removeExpenseBydate("suv", "2024-01-31")
// Expenses.removeExpenseBydate("gaz", "2024-01-31")
// Expenses.removeExpenseBydate("elektr", "2024-01-31")



console.log("Suv", Expenses["suv"], "\nGaz", Expenses["gaz"], "\nElektr", Expenses["elektr"])
console.log(Expenses.totalReport())