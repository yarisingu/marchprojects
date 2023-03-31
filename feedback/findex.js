


const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selctedRating="";

ratingEls.forEach((ratingEls) => {
    ratingEls.addEventListener("click", (event)=> {        
        //console.log(event.target.innerText || event.target.parentNode.innerText);
        removeActive();
        selctedRating = event.target.innerText || event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});
btnEl.addEventListener("click",()=>{
    if(selctedRating !=="")
    {
        containerEl.innerHTML = `
        <strong> Thank you </strong>
        <br> <br>
        <strong>Feedback: ${selctedRating}</strong>
        <p> We'll use your feedback to improve our customer support.</p> `;
    }
})

function removeActive()
{
    ratingEls.forEach((ratingEls)=> {
        ratingEls.classList.remove("active");
    });
}