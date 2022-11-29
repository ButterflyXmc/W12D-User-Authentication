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
            password : password.value, //
        }
    }).then(loginSuccess).catch(loginFail);
}

function loginSuccess (response) {
    let token = response.data.token
    Cookies.set(`loginInToken`, token);
    location.href = "home.html";
}

function loginFail (error) {
    alert(`PLEASE TRY AGAIN!`)
}

loginButton.addEventListener(`click`, loginIn);



