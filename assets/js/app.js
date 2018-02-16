// //Recorremos la data, y pediremos imprimir el pokemón ingresado, y algunos de sus datos relacionados

$(document).ready(function(){
    let imprimirPokemon = function(data) {
        let order = "";
        let name = "";
        let num = "";
        let abi = [];
        data.forEach(function(element) {
            order = data.order;
            name = data.name;
            num = data.num;
            abi = data.abilities;

            $("#poke-info").append(armarTemplate(order, name, num, abi));
        });
    }

    // Acá armaremos la estructura que se mostrará en el html, con los datos que se solicitaron con anterioridad
    var armarTemplate = function (order, name, num, abi) {
        var t = ('<img src="http://pokeapi.co/media/img/' + num + '.png">' + 'h3>' + name + '</h3><p>' + order + '</p>' +
            '<h4>Habilidades</h4>' + '<ul class="ability"></ul>');
        return t;
    }

    //Haremos el llamado a AJAX, en url irá la dirección de nuestra página en donde buscaremos las imágenes , el type: es GET(obtener datos), datatype: es el tipo de datos que se espera como respuesta, data: es la información que me tiene que enviar.

    var ajaxPoke = function (order) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/',
            type: 'GET',
            datatype: 'json',
            data: {
                q: order,
            }
        })
            .done(function (response) {
                console.log(response);
                dibujarGifs(response.data);
            })
            .fail(function () {
                console.log("error");
            });
    }

    //Para finalizar, al hacer clicl sobre el botón, se mostrará un mensaje en la consola, se limpiará el contenedor donde se pondrán las imágenes (en caso de que esté ocupado), guardrá el valor obtenido en el input en una variable y ese valor será pasado a la función que hará el llamado al Ajax

    $("#buscar-poke").click(function (event) {
        console.log("Entro");
        $("#poke-info").empty();
        var poke = $("#poke-text").val();
        ajaxPoke(poke);
    });
});


