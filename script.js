document.addEventListener('DOMContentLoaded',()=>{
 const ContainerEl=document.querySelector('.container');
 const ThanksContainer=document.querySelector('.Thanks-State');
 const Btns=document.querySelectorAll('button');
 const SubmitBtn=document.getElementById('SubmitBtn');
 let SelectedValue=document.getElementById('number');
 


SubmitBtn.addEventListener('click',event=>{
 ContainerEl.style.display="none";
 ThanksContainer.style.display="flex";
 });


Btns.forEach(buttons=>{
    buttons.addEventListener('click',event=>{
    Btns.forEach(btn=>{
        btn.style.backgroundColor='';
        btn.style.color='';

    });
    buttons.style.backgroundColor="white";
    buttons.style.color="black";
     // Call Selection with the selected value
    Selection(buttons.textContent)
});


function Selection(value){
   SelectedValue.textContent=value;
}


});


});