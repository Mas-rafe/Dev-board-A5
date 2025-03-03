document.getElementById("btn-discover").addEventListener('click',function(event){
    event.preventDefault;
    console.log("done")
    window.location.href = "./page2.html"
})

document.getElementById("btn-1").addEventListener('click',function(event){
    event.preventDefault()
    const task = getInnerTextById("task1");
    console.log(task)
    const newTask = task - 1;
    const display = newTask;
    console.log(newTask)
    return display
})