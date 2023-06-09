// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*let col1row1 = document.querySelector(".column1");
let col2row1 = document.querySelector(".baris2");
let col3row1 = document.querySelector(".baris3");

*//*document.getElementById("button1").addEventListener("click", myFunction1);*//*
document.getElementById("button1").addEventListener("click", function () {
    col1row1.style.backgroundColor = "lightblue";
    col1row1.style.color = "steelblue";
    col2row1.style.backgroundColor = "darkseagreen";
    col2row1.style.color = "green";
    col3row1.style.backgroundColor = "beige";
    col3row1.style.color = "yellowgreen";
})

col2row1.addEventListener("mouseover", function () {
    col1row1.style.backgroundColor = "darkseagreen";
    col1row1.style.color = "green";
    col2row1.style.backgroundColor = "beige";
    col2row1.style.color = "yellowgreen";
    col3row1.style.backgroundColor = "lightblue";
    col3row1.style.color = "steelblue";
})

col2row1.addEventListener("click", function () {
})

const animals = [
    { name: "nemo", species: "fish", class: { name: "invertebrata" } },
    { name: "gary", species: "mouse", class: { name: "mamalia" } },
    { name: "dory", species: "fish", class: { name: "invertebrata" } },
    { name: "tom", species: "mouse", class: { name: "mamalia" } },
    { name: "aji", species: "wibu", class: { name: "mamalia" } }
]*/

/*const onlyMouse = animals.map(animal => {
    if (animal.species == "mouse") {
        return animal;
    }
});*/
/*const onlyMouse = [];
animals.forEach(animal => {
    if (animal.species != "mouse") {
        animal.class.name = "non mamalia";
    }
    else {
        onlyMouse.push(animal);
    }
})*/

/*for(let i = 0; i < animals.length; i++){
    *//*console.log(animals[i].name);*//*
    if (animals[i].species != "mouse") {
        animals[i].class.name = "non mamalia";
    } else {
        onlyMouse.push(animals[i]);
    }
    
};*/

/*console.log(animals);
console.log(onlyMouse);
*/
/*
$.ajax({
    url: "https://swapi.dev/api/people/ ",
}).done((result) => {
    if (result == null) {
        let temp = "<div class='alert alert-danger'>Data tidak ditemukan</div>";
    }
    let temp = "";
    let number = 0;
    $.each(result.results, (key, val) => {
        number++
        temp += "<tr>" + 
            "<td>" + number + "</td>" +
            "<td>" + val.name + "</td>" +
            "<td>" + val.height + "</td>" +
            "<td>" + val.mass + "</td>" +
            "<td>" + val.hair_color + "</td>" +
            "<td>" + val.gender + "</td>" +
            "</tr>";        
    })
$("tbody").append(temp);
})*/

/*escape character string pake backslash (\)*/
/*literal template (``)*/
/*radar chart*/
/*
$.ajax({
    url: "https://swapi.dev/api/people/ ",
    type: 'GET',
    beforeSend: function () {
        $("#loader").show();
    },
    success: function (result) {
        $("#loader").hide();
        let temp = "";
        let number = 0;
        $.each(result.results, (key, val) => {
            number++
            temp += "<tr>" +
                "<td>" + number + "</td>" +
                "<td>" + val.name + "</td>" +
                "<td>" + val.height + "</td>" +
                "<td>" + val.mass + "</td>" +
                "<td>" + val.hair_color + "</td>" +
                "<td>" + val.gender + "</td>" +
                "</tr>";
        })
        $("tbody").append(temp);
    },
    error: function (error) {
        console.log(error)
    }
})*/

/*
function myFunction1() {
    col1row1.style.backgroundColor = "lightblue";
    col1row1.style.color = "steelblue";
    col2row1.style.backgroundColor = "darkseagreen";
    col2row1.style.color = "green";
    col3row1.style.backgroundColor = "beige";
    col3row1.style.color = "yellowgreen";
}*/

         