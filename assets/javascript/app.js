var topics = ["guitar", "cello"];


    // function buttons() {
    //     $("#buttons").empty();

    //     // Looping through the array of movies
    //     for (var i = 0 ; i < topics.length; i++ ) {
    //         var newButton = $("<button>");
    //         newButton.addClass("topic-choice");
    //         newButton.attr("data-topic", topics[i]);
    //         newButton.text(topics[i]);
    //         newButton.append("#buttons");
    //     }
    // }
    //topics.forEach(buttons);
    $("button").on("click", function() {
     // Example queryURL for Giphy API
        var topic = $(this).attr("data-topic");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=RhoHUzXl6SP5fFtT3qBCsi2mOMC53BaJ&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var topicImage = $("<img>");

                    topicImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.append(p);
                    gifDiv.append(topicImage);

                    $("#gif-images").prepend(gifDiv);
                }
            }
        });
    });