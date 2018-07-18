function myFunction() {

    var myNodelist = document.querySelectorAll("p");
    var i;
    for (i = 0; i < myNodelist.length; i++) {

        if (myNodelist[i].style.color == ("black")) {
            myNodelist[i].style.color = "blue";
        } else {
            myNodelist[i].style.color = "black"
        }
    }
}

function changeText(id) {
    if (id.innerHTML.includes("Welcome to my 2nd Project")) {
        id.innerHTML = "Debbie Allen!"
    } else {
        id.innerHTML = "Welcome to my 2nd Project"
    }

}

function myImage() {
    alert("Deborrah Allen");
}