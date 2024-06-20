//Cookie = a small text file stored on your computer used
//         remeber information about the user
//         saved in name= value pairs

//console.log(navigator.cookieEnabled);

//document.cookie =
//"firstName = Batman; expires= Sun, 1 Januvary 2030 12:00:00 UTC; path=/";
//console.log(document.cookie);

//setCookie("email", "Usergmail.com", 365);

//deleteCookie("firstname");
//deleteCookie("lastname")

setCookie("firstName", "Batman", 365);
setCookie("lastName", "Spongbob", 365);

getCookie("firstName");

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000); //millesecond
  let expires = "expires=" + date.toUTCString(); //Utc time to set and store variable
  document.cookie = `${name}=${value}; ${expires};path=/`;
}

//deleting a cookie

function deleteCookie(name) {
  setCookie(name, null, null);
}

//get cookie value
function getCookie() {
  const cDecode = decodeURIComponent(document.cookie); //decode
  const cArray = cDecode.split(";"); //array represent
  console.log(cArray);
}
