const adviceId = document.querySelector('#number');
const adviceText = document.querySelector('#quote_text');
const btn = document.querySelector('#btn');

function dice(){
    fetch('https://api.adviceslip.com/advice').then(Response => {
        return Response.json();
    }).then(adviceData =>{
        const adviceNum = adviceData.slip.id;
        const adviceTxt = adviceData.slip.advice;
        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `<p>"${adviceTxt}"</p>`;
    }).catch(error =>{
        console.log(error);
    })
}
btn.addEventListener('click' , function(){
    dice();
});
window.onload = () =>{
    dice();
}