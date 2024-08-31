const btnEl=document.querySelectorAll(".btn");
const resetBtn=document.querySelector("#reset-btn");
const msgEl=document.querySelector("#msg-el")
let turnO=true;
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
function enabledBoxes(){
  for(let box of btnEl){
    box.disabled=false
    box.innerText=""
    msgEl.textContent=""
}
}
resetBtn.addEventListener("click",function(){
  enabledBoxes()
})
btnEl.forEach((box)=>{
  box.addEventListener("click",function(){
    if(turnO){
      box.innerText="O"
      box.style.color="black"
      turnO=false;
    }
    else{
      box.innerText="X"
      box.style.color="#D24B52"
      turnO=true
    }
    box.disabled=true;
    checkWinner()
  })
  
});

function disabledBoxes(){
  for(let box of btnEl){
    box.disabled=true
    
  }
}
function checkWinner(){
  for(let pattern of winPatterns){
   let posVal1=btnEl[pattern[0]].innerText
   let posVal2=btnEl[pattern[1]].innerText
   let posVal3=btnEl[pattern[2]].innerText
  if(posVal1!="" && posVal2!="" && posVal3!=""){
      if(posVal1===posVal2&&posVal2===posVal3){
        msgEl.textContent+="Winner: "+posVal1
        if (posVal1==="X") {
          msgEl.style.color="red"
        }
        else{
          msgEl.style.color="black"
        }
        if (posVal1==="X"){
          posVal1.style.color="red"
        }
        disabledBoxes()
      }
  }
  }
}