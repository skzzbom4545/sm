function hastatel() {
    event.preventDefault()
    var person = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        phone: document.getElementById("phone").value
    };
    var resulty = document.getElementById("result");
    resulty.innerHTML = "";
    var sm = document.createElement("h3");
    sm.textContent = "about them";

    var names = document.createElement("s");
    names.textContent = "name: " + person.name;

    var surnames = document.createElement("s");
    surnames.textContent = "surname: " + person.surname;

    var phones = document.createElement("s");
    phones.textContent = "phone: " + person.phone;

    resulty.append(sm, names, surnames, phones);
}


