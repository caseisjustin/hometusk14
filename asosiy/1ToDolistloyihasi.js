let arr = ["Ertalab turish", "Yuzni yuvish", "Nonushta qilish", "Ishga ketish"]
const Todo = {
    addTask(task){
        arr.push(task)
    },
    removeTask(indx){
        if(!arr[indx]){
            console.log("Bunday vazifa mavjud emas!!!")
            return 0
        }
        delete arr[indx]
    },
    printTasks(){
        console.log(arr)
    }
}

Todo.addTask("Tushlik qilish")
Todo.removeTask(3)
Todo.printTasks()