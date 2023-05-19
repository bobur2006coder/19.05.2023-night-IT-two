let btn = document.querySelector(".sing-up");
let cross = document.querySelector("i")


let enter=()=>{
    let box = document.querySelector(".box");
    box.classList.remove("visually-hidden")
}
btn.addEventListener("click",enter)

let exit =()=>{
    let box = document.querySelector(".box");
    box.classList.add("visually-hidden")
    
}

cross.addEventListener("click",exit)






