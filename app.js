let login = document.getElementById(`login`);
let password = document.getElementById(`password`);
const loginButton = document.getElementById(`loginButton`);

//login in with a username and password from the API (POST - LOGIN - SUCCESSFUL)
function loginIn () {
    axios.request({
        url : "https://reqres.in/api/login",
        method : `POST`,
        data : {
            email : login.value, //eve.holt@reqres.in
            password : password.value, //cityslicka
        }
    }).then(loginSuccess).catch(loginFail);
}

//This function will take the user to the home page using href
//if the axios request goes through
function loginSuccess (response) {
    let token = response.data.token
    Cookies.set(`loginInToken`, token);
    location.href = "home.html";
}

//This alert will pop up if something goes wrong with the user's request
function loginFail (error) {
    alert(`PLEASE TRY AGAIN!`)
}

//Connecting loginIn function with the button for the user to actually LOGIN
//The cookies will also get saved when the user logs in clicking this button
loginButton.addEventListener(`click`, loginIn);



