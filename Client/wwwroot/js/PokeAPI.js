$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon",
    type: 'GET',
}).done((result) => {
    let temp = "";
    $.each(result.results, (key, val) => {
        temp += `<tr>
            <td>${key + 1}</td>
            <td>${val.name}</td>
            <td><button type="button" onclick="getDetail('${val.url}')" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button></td>
            </tr>`
    })
    /*$(".modal-title").html(val.name);*/
    $("tbody").append(temp);
    console.log(result)
})

function getDetail(Url) {
    $.ajax({
        url: Url,
        type: 'GET',
    }).done((result) => {
        console.log(result);
        $("#imgPoke").attr("src", result.sprites.other['official-artwork'].front_default);
        $("#imgPoke").attr("width", 400);
        let temp = "";
        $.each(result.types, (key, val) => {
            const badgeColor = {
                grass: "success",
                fire: "danger",
                poison: "warning",
                normal: "secondary",
                flying: "dark",
                water: "primary",
                bug: "info",
            }[val.type.name] || "light text-dark";
            temp += `<span class="badge bg-${badgeColor} badge-width">${val.type.name}</span>`
        })
        $("#rowBadge").html(temp);
        $(".name-pokemon").html(result.name)

        $("#hp").attr({
            value: result.stats[0].base_stat,
            style: `--value: ${result.stats[0].base_stat}; --max: 200;`
        })
        $("#attack").attr({
            value: result.stats[1].base_stat,
            style: `--value: ${result.stats[1].base_stat}; --max: 200;`
        })
        $("#defense").attr({
            value: result.stats[2].base_stat,
            style: `--value: ${result.stats[2].base_stat}; --max: 200;`
        })
        $("#specialAttack").attr({
            value: result.stats[3].base_stat,
            style: `--value: ${result.stats[3].base_stat}; --max: 200;`
        })
        $("#specialDefense").attr({
            value: result.stats[4].base_stat,
            style: `--value: ${result.stats[4].base_stat}; --max: 200;`
        })
        $("#speed").attr({
            value: result.stats[5].base_stat,
            style: `--value: ${result.stats[5].base_stat}; --max: 200;`
        })
        let abilities = ""
        let arrayUrl = [{}]

        $.each(result.abilities, (key,val) => {
            abilities += `<h5 class="name-abilities mt-2" id="name${key}">${val.ability.name}</h5>`
            arrayUrl.push({
                "key": key,
                "url": val.ability.url,
                "name": val.ability.name
            })

        })
        arrayUrl.shift()
        $(".abilities-0").html(abilities);
        getAbilitiesDetail(arrayUrl)
        getDescription(result.species.url)
        $(".base-experience").html(`Base Experience : ${result.base_experience}`)
        $(".height").html(`Height : ${ result.height }`)
        $(".weight").html(`Weight :${result.weight}`)
    })
}

function getAbilitiesDetail(arrayUrl) {
    $.each(arrayUrl, (key, val) => {

        $.ajax({
            url: val.url,
            type: 'GET',
        }).done((result) => {
            $.each(result.effect_entries, (key1, val) => {
            if (val.language.name == 'en') {
                $(`<p class="desc-abilities" id="desc${key}">${val.effect}</p>`).insertAfter(`#name${key}`)
            }
        })
        })
    })
}

function getDescription(url) {
    /*console.log(url)*/
    $.ajax({
        url: url,
        type: 'GET',
    }).done((result) => {
        console.log(result)
        $.each(result.flavor_text_entries, (key, val) => {
            if (val.language.name == 'en') {
                console.log(val.flavor_text)
            $(".description").html(val.flavor_text)
            }
        })
    })
}

$(document).ready(function () {
    $("#table1").DataTable();
})