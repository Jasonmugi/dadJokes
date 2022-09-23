const element = document.querySelector('.target');
const button = document.querySelector(".next");
const autoplayButton = document.querySelector(".autoplay");
const stopAutoplay = document.querySelector(".stop_autoplay");

const getJoke =  async () => {
  try{
    const header_config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', header_config);
    element.innerHTML = `${res.data.joke}`;
  }
  catch (err) {
    console.log("ERROR!", err);
    alert('Error fetching data!');
  }
};

getJoke();
const autoplay = setInterval(getJoke, 12000);
console.log(autoplay)
const stopInterval = () => {
  clearInterval(autoplay); 
}

//autoplayButton.addEventListener("click", autoplay);
//stopAutoplay.addEventListener("click", stopInterval);
button.addEventListener('click', getJoke);

''