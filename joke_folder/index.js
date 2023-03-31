const btnEl = document.getElementById("btn");
const jokeE1 =  document.getElementById("joke");

const apikey = "";

const options ={
    method: "GET",
    headers: {
        "x-Api-Key": apikey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke()
{
    try {
        jokeE1.innerText = "updateing..";
    btnEl.disabled = true;
    btnEl.innerText ="Loading..";
    const response = await fetch(apiURL,options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText ="Tell me a Joke";

    jokeE1.innerText = data[0].joke;
        
    } catch (error) {
        
        jokeE1.innerText = "An error happened, try again";
        console.log(error);

    }  
}
btnEl.addEventListener("click",getjoke)