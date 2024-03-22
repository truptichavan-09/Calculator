const btnE1 = document.getElementById("calculate");
const bilinput = document.getElementById("bill");
const tipinput = document.getElementById("Tip");
const Totalspan = document.getElementById("total");

function calculateTotal (){
const bilvalue = bilinput.value;
const tipvalue = tipinput.value;
const TotalValue = bilvalue * (1+ tipvalue / 100);
Totalspan.innerText = TotalValue.toFixed(2);

}
btnE1.addEventListener ("click",calculateTotal);