document.getElementById("btn-discover").addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "./page2.html"
})
//document.getElementById("btn-pTwo").addEventListener('click',function(event){
   // event.preventDefault();
 //   console.log("done")
 //   window.location.href = "./index.html"
//})
for(let i = 1; i<= 6;i++)
document.getElementById(`btn-${i}`).addEventListener('click',function(event){
    event.preventDefault();
    let button = document.getElementById(`btn-${i}`);
    if(button){
        this.disabled = true;
    }
    console.log(i)
    alert("Board updated successfuly");
    const newTask = getInnerTextById("task-1");
    const newSum = newTask + 1;
    const task = getInnerTextById("task-2");
    const sum = task - 1;
    document.getElementById("task-1").innerText = newSum;
    document.getElementById("task-2").innerText = sum;
    const description = document.getElementById("description");
    const desc1 = document.createElement('p');
    desc1.innerText =`you have complete the task at${new Date().toLocaleTimeString()}`
    desc1.style.border = "2px solid"
    desc1.style.borderRadius = "10px"
    desc1.style.textAlign = "center"
    desc1.style.backgroundColor = "#F4F7FF"
    desc1.style.margin = "10px"
    desc1.style.padding = "10px"
    description.append(desc1);
    console.log(desc1)  
})

document.getElementById("btn-clear").addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("description").style.display="none"

})

