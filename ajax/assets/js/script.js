$(document).ready(function(){

    // Ciblage des noeuds HTML
    $btnLoad    = $("button#load");
    $btnClear   = $("button#clear");
    $content    = $("#content");

    $postsUrl   = "https://jsonplaceholder.typicode.com/posts";


    // Déclaration de la fonction qui me permet de récupérer la liste des Posts
    function showPosts()
    {
        
        console.log( "Start" );

        $.ajax({
            // URL de requete
            url: $postsUrl,

            // Methode "GET" ou "POST"
            type: "GET",

            // Type de données attenduent
            dataType: "json",

            // // Si la requete se passe correctement
            // success: function(){
            //     console.log( "Success (success)" );
            // },

            // // Si la requete est en echec
            // error: function(){
            //     console.log( "Error (error)" );
            // }
        })

        // Si la requete se passe correctement
        .done(function(response){
            
            console.log(response);

            // Boucle sur la réponse
            $(response).each(function(index, post){

                // Creation de la balise de titre
                $title = $('<h3>').html(post.title);

                // Creation du paragraphe
                $p = $('<p>').html(post.body);

                // Creation de <article>
                $article = $('<article>').append($title).append($p);

                $content.append($article);

            })

        })

        // Si la requete est en echec
        .fail(function(){
            let errMsg = "la requête n'a pas fonctionnée... "
            $content.html(errMsg);
        })

        // Reponse dans tous les cas !
        .always(function(){
            console.log( "dans tous les cas" );
        })

    }

    // Execution de "showPosts" au chargement du document
    showPosts();

    // Execution de "showPosts" lorsque je clique sur le bouton "Afficher les articles"
    $btnLoad.on('click', showPosts);


    // Effacer les articles
    $btnClear.on('click', function(){
        $content.html('');
    })

});