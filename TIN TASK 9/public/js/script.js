$(document).ready(function() {

$("#submit-btn").click(function(){
 var localStorageVale = document.getElementById("localstorage").value
 var sessionVariable = document.getElementById("sessionVariable").value
 window.localStorage.setItem('localStorage',localStorageVale)
 window.sessionStorage.setItem('sessionVariable',sessionVariable)

})
})
