let buttons = document.querySelectorAll('button');
let numberss=document.querySelectorAll('.numbers')
numberss.forEach((btn)=>btn.addEventListener('click',()=>{

   
sessionStorage.removeItem('stars')
console.log(btn)
numberss.forEach((b)=>b.classList.remove('selected'));
btn.classList.add('selected');
sessionStorage.setItem('stars',btn.innerHTML)





}))



function verifysessionStorage(){
let submitButton =document.getElementById('submit')

if(sessionStorage.getItem("stars")==null){
    submitButton.disabled=true;


}


}
verifysessionStorage()