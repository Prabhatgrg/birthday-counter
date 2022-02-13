const home = document.getElementById("home");

function click()
{
    // home.onclick = alert("Wuuttttt");
    home.addEventListener("Click", alert("wutttt"));
}

document.getElementById("home").addEventListener("click", myFunction);

function myFunction() {
    msg = alert("Hellooo");
    document.getElementById("home") = msg;
}
myFunction();
// click();