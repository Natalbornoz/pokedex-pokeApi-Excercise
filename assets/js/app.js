// //Recorremos la data, y pediremos imprimir el pokemón ingresado, y algunos de sus datos relacionados
let poke = "";
$(document).ready(function(){
    //Para finalizar, al hacer click sobre el botón, se mostrará un mensaje en la consola, se limpiará el contenedor donde se pondrán las imágenes (en caso de que esté ocupado), guardrá el valor obtenido en el input en una variable y ese valor será pasado a la función que hará el llamado al Ajax

    $("#buscar-poke").click(function (event) {
        event.preventDefault();
        console.log("Entro");
        $("#poke-info").empty();
        poke = $("#poke-text").val();
        console.log(poke);
        ajaxPoke(poke);
    });

    //Haremos el llamado a AJAX, en url irá la dirección de nuestra página en donde buscaremos las imágenes , el type: es GET(obtener datos), datatype: es el tipo de datos que se espera como respuesta, data: es la información que me tiene que enviar.

    let ajaxPoke = function () {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${poke}`

        }).done(imprimirPokemon)
            // .done(function (response) {
            //     console.log(response);
            // imprimirPokemon(response.data);
            // )
            .fail(function () {
                console.log("error");
            });
    }

    let imprimirPokemon = function(data) {
        let name = data.name;
        console.log(data.name);
        let num = data.id;
        console.log(data.id);
        let abi = data.abilities[0].ability.name;
        console.log(abi);
        console.log(data);
        // data.forEach(function(element) {
        //     order = element.order;
        //     name = element.name;
        //     num = element.num;
        //     abi = element.abilities;

        // Para mostrar en el html
        $("#poke-info").append(`<img src="https://pokeapi.co/media/img/${num}.png">`);
        
    }

    // Acá armaremos la estructura que se mostrará en el html, con los datos que se solicitaron con anterioridad
    let armarTemplate = function (order, name, num, abi) {
        let t = ('<img src="http://pokeapi.co/media/img/' + num + '.png">' + '<h3>' + name + '</h3><p>' + order + '</p>' +
            '<h4>Habilidades</h4>' + '<ul class="ability"></ul>');
        return t;
    };
});


