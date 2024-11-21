let buttons = document.querySelectorAll('button');
let numberss=document.querySelectorAll('.numbers');



numberss.forEach((btn)=>btn.addEventListener('click',()=>{

   
sessionStorage.removeItem('stars')
console.log(btn)
numberss.forEach((b)=>b.classList.remove('selected'));
btn.classList.add('selected');
sessionStorage.setItem('stars',btn.innerHTML)





}))




let submitButton = document.getElementById('submit');
function submitForm(){
console.log('click')
window.location=('thankyou.html')


}

submitButton.addEventListener('click',submitForm)