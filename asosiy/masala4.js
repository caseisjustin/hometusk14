function checkout(products){
    let total = 0
    let percent = 6
    for (const i in products){
        if(products[i].taxable)
            total += (products[i].prc * products[i].qty) + (products[i].prc * percent/100)
        else
            total += products[i].prc * products[i].qty
    }
    return total
}

console.log(
    checkout([
            { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
            { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
            { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
        ])
)