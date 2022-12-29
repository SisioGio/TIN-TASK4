$(document).ready(function() {


    var localStorageVale = window.localStorage.getItem("localStorage")
    console.log(localStorageVale)
    document.getElementById("localStorageData").innerText = localStorageVale

    var sessionVariable = window.sessionStorage.getItem("sessionVariable")
    console.log(sessionVariable)
    document.getElementById("sessionVariableData").innerText = sessionVariable


    document.getElementById("sessionCookieData").innerText = getCookie("sessioncookie")
    document.getElementById("longTermCookieData").innerText = getCookie("longTermCookie")
})


function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    })
    return cookie[name];
  }