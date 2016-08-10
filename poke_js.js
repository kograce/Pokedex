    
    $(document).ready(function(){

        var image;
        var id;
        var pokeType1;
        var pokeType2;
        var url = "http://pokeapi.co/media/img/";

        var searchPokemon = function() {
            var input = $('#pokemon_name').val();
            url += input + '/';
            image = "<img src = 'Images/Pokemon/";
            pokeType1 = "<img src = 'Images/Types/";
            pokeType2 = "<img src = 'Images/Types/";

            $.get(url, function(res) {
                image += res.national_id + ".png'>";

                if (res.types.length > 1) {
                    pokeType1 += res.types[0].name + ".gif'>";
                    pokeType2 += res.types[1].name + ".gif'>";

                    $("#pokedex").html(
                        '<h1>' + '#' + res.national_id + '. ' + res.name + '</h1>'
                        + image + '<br>' 
                        + ' ' + pokeType1 + ' ' + pokeType2 + '<br>' + '<h3>Basic EXP</h3>'
                        + '<li>' + res.exp + '</li>'
                        + '<h3> Speed </h3>'
                        + '<li>' + res.speed + '</li>'
                        + '<h3> Height </h3>' 
                        + '<li>' + (Math.round(res.height*3.937)) + 'in (' 
                        + (res.height/10)+ 'm)' + ' </li>'
                        + '<h3> Weight </h3>' 
                        + '<li>' + (Math.round(res.weight*.22)) + 'lbs (' 
                        + (res.weight/10) + 'kg)' + '</li>');
                    } else {
                        pokeType1 += res.types[0].name + ".gif'>";

                        $("#pokedex").html(
                        '<h1>' + '#' + res.national_id + '. ' + res.name + '</h1>'
                        + image + '<br>' 
                        + ' ' + pokeType1 + '<br>' + '<h3>Basic EXP</h3>'
                        + '<li>' + res.exp + '</li>'
                        + '<h3> Speed </h3>'
                        + '<li>' + res.speed + '</li>'
                        + '<h3> Height </h3>' 
                        + '<li>' + (Math.round(res.height*3.937)) + 'in (' 
                        + (res.height/10) + 'm)' + '</li>'
                        + '<h3> Weight </h3>' 
                        + '<li>' + (Math.round(res.weight*.22)) + 'lbs (' 
                        + (res.weight/10) + 'kg)' + '</li>');
                    }
                }, 'json');
            url = "http://pokeapi.co/api/v1/pokemon/";
            }

                    

        $('#pokebutton').on('click', function() {
            searchPokemon();
        })  

        $(document).bind('keypress', function(e) {
            if(e.keyCode == 13){
                 $('#pokebutton').trigger('click');
                 return false;
             }
        });
            
        $('#pokemon').on("click", "img", function() {
                var id = $(this).attr('id');
                url += id + '/';
                image = "<img src = 'Images/Pokemon/";
                pokeType1 = "<img src = 'Images/Types/";
                pokeType2 = "<img src = 'Images/Types/";

            $.get(url, function(res) {
                image += res.national_id + ".png'>";

                if (res.types.length > 1) {
                    pokeType1 += res.types[0].name + ".gif'>";
                    pokeType2 += res.types[1].name + ".gif'>";

                    $("#pokedex").html(
                        '<h1>' + '#' + res.national_id + '. ' + res.name + '</h1>'
                        + image + '<br>' 
                        + ' ' + pokeType1 + ' ' + pokeType2 + '<br>' + '<h3>Basic EXP</h3>'
                        + '<li>' + res.exp + '</li>'
                        + '<h3> Speed </h3>'
                        + '<li>' + res.speed + '</li>'
                        + '<h3> Height </h3>' 
                        + '<li>' + (Math.round(res.height*3.937)) + 'in (' 
                        + (res.height/10)+ 'm)' + ' </li>'
                        + '<h3> Weight </h3>' 
                        + '<li>' + (Math.round(res.weight*.22)) + 'lbs (' 
                        + (res.weight/10) + 'kg)' + '</li>');
                    } else {
                        pokeType1 += res.types[0].name + ".gif'>";

                        $("#pokedex").html(
                        '<h1>' + '#' + res.national_id + '. ' + res.name + '</h1>'
                        + image + '<br>' 
                        + ' ' + pokeType1 + '<br>' + '<h3>Basic EXP</h3>'
                        + '<li>' + res.exp + '</li>'
                        + '<h3> Speed </h3>'
                        + '<li>' + res.speed+ '</li>'
                        + '<h3> Height </h3>' 
                        + '<li>' + (Math.round(res.height*3.937)) + 'in (' 
                        + (res.height/10) + 'm)' + '</li>'
                        + '<h3> Weight </h3>' 
                        + '<li>' + (Math.round(res.weight*.22)) + 'lbs (' 
                        + (res.weight/10) + 'kg)' + '</li>');
                    }
                }, 'json');
            url = "http://pokeapi.co/api/v1/pokemon/";
        })

})         
