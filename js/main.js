document.querySelector('.icon').addEventListener('click', getDrink)
document.querySelector('button').addEventListener('click', random)



function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').style.display = 'flex'
        document.querySelector('h3').style.display = 'flex'
        document.querySelector('h4').style.display = 'flex'
        document.querySelector('ul').style.display = 'flex'
        document.querySelector('img').style.display = 'flex'
        document.querySelector('#nameBox').innerText = data.drinks[0].strDrink
        document.querySelector('#instructionsBox').innerText = data.drinks[0].strInstructions
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.One').innerText = data.drinks[0].strIngredient1
        document.querySelector('.Two').innerText = data.drinks[0].strIngredient2
        document.querySelector('.Three').innerText = data.drinks[0].strIngredient3
        document.querySelector('.Four').innerText = data.drinks[0].strIngredient4
        document.querySelector('.Five').innerText = data.drinks[0].strIngredient5
        document.querySelector('.Six').innerText = data.drinks[0].strIngredient6
        document.querySelector('.Seven').innerText = data.drinks[0].strIngredient7
        document.querySelector('.Eight').innerText = data.drinks[0].strIngredient8
        document.querySelector('.Nine').innerText = data.drinks[0].strIngredient9
        document.querySelector('.Ten').innerText = data.drinks[0].strIngredient10
        document.querySelector('.eleven').innerText = data.drinks[0].strIngredient11
        document.querySelector('.twelve').innerText = data.drinks[0].strIngredient12
        document.querySelector('.thirteen').innerText = data.drinks[0].strIngredient13
        document.querySelector('.fourteen').innerText = data.drinks[0].strIngredient14
        document.querySelector('.fifteen').innerText = data.drinks[0].strIngredient15

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    
}
function random(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').style.display = 'flex'
        document.querySelector('h3').style.display = 'flex'
        document.querySelector('h4').style.display = 'flex'
        document.querySelector('ul').style.display = 'flex'
        document.querySelector('img').style.display = 'flex'
        document.querySelector('#nameBox').innerText = data.drinks[0].strDrink
        document.querySelector('#instructionsBox').innerText = data.drinks[0].strInstructions
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('.One').innerText = data.drinks[0].strIngredient1
        document.querySelector('.Two').innerText = data.drinks[0].strIngredient2
        document.querySelector('.Three').innerText = data.drinks[0].strIngredient3
        document.querySelector('.Four').innerText = data.drinks[0].strIngredient4
        document.querySelector('.Five').innerText = data.drinks[0].strIngredient5
        document.querySelector('.Six').innerText = data.drinks[0].strIngredient6
        document.querySelector('.Seven').innerText = data.drinks[0].strIngredient7
        document.querySelector('.Eight').innerText = data.drinks[0].strIngredient8
        document.querySelector('.Nine').innerText = data.drinks[0].strIngredient9
        document.querySelector('.Ten').innerText = data.drinks[0].strIngredient10

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    
}



// // getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// // if user press any key and release
// inputBox.onkeyup = (e)=>{
//     let userData = e.target.value; //user enetered data
//     let emptyArray = [];
//     if(userData){
//         emptyArray = suggestions.filter((data)=>{
//             //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
//             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data)=>{
//             // passing return data inside li tag
//             return data = `<li>${data}</li>`;
//         });
//         searchWrapper.classList.add("active"); //show autocomplete box
//         showSuggestions(emptyArray);
//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             //adding onclick attribute in all li tag
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     }else{
//         searchWrapper.classList.remove("active"); //hide autocomplete box
//     }
// }

// function select(element){
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     icon.onclick = ()=>{
//         webLink = `https://www.google.com/search?q=${selectData}`;
//         linkTag.setAttribute("href", webLink);
//         linkTag.click();
//     }
//     searchWrapper.classList.remove("active");
// }

// function showSuggestions(list){
//     let listData;
//     if(!list.length){
//         userValue = inputBox.value;
//         listData = `<li>${userValue}</li>`;
//     }else{
//       listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }