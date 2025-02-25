var dd = document.getElementById("block")
dd.addEventListener("scroll", function (tuk) {
    var tk = (tuk.target.scrollTop)
    if (Math.floor(tk / 50) % 2 == 0) {
        tuk.target.style = `
            background: red ;
            color: black;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `
    } else  {
        tuk.target.style = `
            background: blue;
            color: black;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `}
})



var dd = document.getElementById("block");
var plusButton = document.querySelector(".arajin");
var minusButton = document.querySelector(".erkrord");

plusButton.addEventListener("click", function () {
    dd.scrollTop -= 20;
});
minusButton.addEventListener("click", function () {
    dd.scrollTop += 20;
});

dd.addEventListener("scroll", function (tuk) {
    var tk = tuk.target.scrollTop;
    if (Math.floor(tk / 50) % 2 == 0) {
        tuk.target.style = `
            background: blue;
            color: black;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    } else {
        tuk.target.style = `
            background: pink;
            color: black;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    }
});