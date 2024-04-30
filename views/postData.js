const submitBtn = document.querySelector(".submitBtn")
async function postDate() {
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
      workDate : workDateEl.value 
  }
  const options ={
    method : "POST",
    headers : {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  }
  const res = await fetch("/api",options)

}

submitBtn.addEventListener("click", postDate)