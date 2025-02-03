var tvyalner = [
    { name: "Սվետա", country: "Հայաստան" },
    { name: "Սվետլանա", country: "Ամերիկա" },
    { name: "Մերի", country: "Հայաստան" },
    { name: "Մելինե", country: "Գերմանիա" }
];
function hayastan(tvyalner) {
    var hayer = [];
    for (var i = 0; i < tvyalner.length; i++) {
        if (tvyalner[i].country === "Հայաստան") {
            hayer[hayer.length] = tvyalner[i]
        }
    }
    console.log(hayer);
}
var hayer = hayastan(tvyalner);
console.log(hayer);
    


var obj1 = {
    name: "Սվետա",
    surname: "Մելոյան",
    age: "18",
    city: "Երևան",
    job: "Ծրագրավորող",
    language: "Հայերեն"
}
var obj2 = {
    name: "Սվետլանա",
    surname: "Հովհաննիսյան",
    age: "17",
    city: "Երևան",
    job: "Ծրագրավորող",
    language: "Գերմաներեն"
}
var obj3 = {
    name: "Մելինե",
    surname: "Մելիքյան",
    age: "50",
    city: "Երևան",
    job: "Ծրագրավորող",
    language: "Իտալերեն"
}
var obj4 ={
    name: "Մերի",
    surname: "Գասպարյան",
    age: "17",
    city: "Երևան",
    job: "Ծրագրավորող",
    language: "Ֆրանսերեն"
}
var arr = [obj1, obj2, obj3, obj4];
for (var a = 0; a < arr.length; a++) {
    document.write("<ul>");
    document.write("<li> name: ", arr[a]["name"], "</li>");
    document.write("<li> surname: ", arr[a]["surname"], "</li>");
    document.write("<li> age: ", arr[a]["age"], "</li>");
    document.write("<li> city: ", arr[a]["city"], "</li>");
    document.write("<li> job: ", arr[a]["job"], "</li>");
    document.write("<li> language: ", arr[a]["language"], "</li>");
    document.write("</ul>");
}



var t1 = 3;
var t2 = 33;
var ardyunq = 1;
for (var i = 0; i < t2; i++) {
    ardyunq *= t1;
}
console.log(ardyunq); 