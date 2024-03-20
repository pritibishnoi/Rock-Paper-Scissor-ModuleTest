const rulesBtn = document.querySelector(".rulesBtn");
const close = document.querySelector(".closeBtn");
const rules = document.querySelector(".rulesPart");
rules.style.display = "none";
   
rulesBtn.addEventListener("click",()=>{
    rules.style.display = "block";
})
close.addEventListener("click",()=>{
    rules.style.display = "none";
})