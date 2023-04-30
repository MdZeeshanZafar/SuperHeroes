
const genButton = document.getElementById('genButton');
const searchButton = document.getElementById('searchButton');
const superHero = document.getElementById('superHero');
const searchInput = document.getElementById('searchInput');

const getRandomSuperHero = (heroId) => {
    fetch(`https://superheroapi.com/api.php/2636635096475643/${heroId}`)
    .then(response => response.json())
    .then(json => {
        const name = `<h2>${json.name}</h2>`
        const intelligence = `<p> Intelligence 🧠: ${json.powerstats.intelligence}</p>`
        const strength = `<p>Strength 💪: ${json.powerstats.strength}</p>`
        superHero.innerHTML = `${name}<img src="${json.image.url}" height = 200 width = 200/>${intelligence} ${strength}`
    
    })
}
const getSearchSuperHero = (name) => {
    
    fetch(`https://superheroapi.com/api.php/2636635096475643/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        const name = `<h2>${hero.name}</h2>`
        const intelligence = `<p> Intelligence 🧠: ${hero.powerstats.intelligence}</p>`
        const strength = `<p>Strength 💪: ${hero.powerstats.strength}</p>`
        superHero.innerHTML = `${name}<img src="${hero.image.url}" height = 200 width = 200/>${intelligence} ${strength}`
    })
}
const getRandNum = () =>{
    let randNum = Math.floor(Math.random()*731) + 1;
    return randNum;
}


genButton.onclick = ()=> getRandomSuperHero(getRandNum());
searchButton.onclick = ()=> getSearchSuperHero(searchInput.value);