const submitBtn = document.querySelector(".submitBtn")
const workDate = document.querySelector(".workDate")
workDate.valueAsDate = new Date()
submitBtn.addEventListener("click", async (e) => {

  const amountEl = document.querySelector(".amount")
  const tipCardEl = document.querySelector(".tipCard")
  const tipCashEl = document.querySelector(".tipCash")
  const workDateEl = document.querySelector(".workDate")
  let amount = parseFloat(amountEl.value)
  let tipCard = parseFloat(tipCardEl.value)
  let tipCash = parseFloat(tipCashEl.value)
  const data = {  
      amount : amount,
      tipCard : tipCard,
      tipCash : tipCash,
      workDate : workDate.value 
  }
  const options ={
    method : "POST",
    headers : {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }
  const res = await fetch("/api",options)

})