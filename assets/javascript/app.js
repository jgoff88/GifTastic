var topics = [ guitar, cello]
$(document).ready(function(){
        // Example queryURL for Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=RhoHUzXl6SP5fFtT3qBCsi2mOMC53BaJ";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
        });

});