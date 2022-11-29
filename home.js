const logout = document.getElementById(`logOut`);
let results = document.getElementById(`results`); 

//`GET` is the default, no need to write `GET`
axios.request({
    url : `https://reqres.in/api/unknown`
}).then(colorsSuccess).catch(colorsFail);

//!this function should do the following :
//Name of the color
//The year the color was created
//A box that shows the actual color
function colorsSuccess (response) {
    let data = response.data.data; //the objects are in an [array] called data
    for (let colors of data){
        // let color = results.value;               
        // results.style.backgroundColor = ${colors.color};  //?just trials
        results.insertAdjacentHTML(`beforeend`,`<h2>NAME :- ${colors.name}</h2>`);
        results.insertAdjacentHTML(`beforeend`,`<h4><i>Was created in :- ${colors.year}</i></h4>`);
        // results.insertAdjacentHTML(`beforeend`, `results style = "backgroundColor : ${colors.color}"`);
        //? not able to get the color to display on the page... tried the code above, but it prints
        //? the text on the page instead of displaying the color :(
    }
}

//if the code fails, this alert will be activated!
function colorsFail (error) {
    alert (`Page failed to load the content`);
}


//!the BONUS on the homepage
//user will click on the log out button, and this function will log them out
//taking them back to index.html page
//Need to remove the cookie!!!
function logOut () {
    Cookies.remove(`loginInToken`);
    location.href = "index.html";
}

//activating the logOut function
logout.addEventListener(`click`, logOut);


