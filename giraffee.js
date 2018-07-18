console.log('Hello!')


window.onload = function () {
    document.getElementById('bby-gif').addEventListener("click", function () {
        alert("Giraffes numbers have dropped by 40% over the past 30 years")
    })
}

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}