document.getElementById("btn-discover").addEventListener('click',function(event){
    event.preventDefault;
    console.log("done")
    window.location.href = "./page2.html"
})

document.getElementById("btn-1").addEventListener('click',function(event){
    event.preventDefault()
    alert("Board updated successfuly")
    const newTask = getInnerTextById("task-1");
    const newSum = newTask + 1;
    const task = getInnerTextById("task-2");
    const sum = task - 1;
    document.getElementById("task-1").innerText = newSum;
    document.getElementById("task-2").innerText = sum;
})
document.getElementById("btn-2").addEventListener('click',function(event){
    event.preventDefault()
    alert("Board updated successfuly")
    const newTask = getInnerTextById("task-1");
    const newSum = newTask + 1;
    const task = getInnerTextById("task-2");
    const sum = task - 1;
    document.getElementById("task-1").innerText = newSum;
    document.getElementById("task-2").innerText = sum;
})