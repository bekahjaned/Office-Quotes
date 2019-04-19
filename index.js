var baseURL = "https://the-office-api.herokuapp.com";

$("document").ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $(".search-episode").val();
    $(".search-episode")[0].value="" //this will empty the input field
    $('.results').html(' ') //this clears the results div after every submition

    $.get(`${baseURL}/season/1/episode/${userInput}/`, function(data){
    // console.log(data);
    // console.log(data.data.quotes)

      var lengthOfQuotes = data.data.quotes.length;
      // var currentRandomNumber = 0;
      var randomNumber = Math.floor(Math.random()*lengthOfQuotes);

      // const generateRandomNumber = () => {
      //
      //   var randomNumber = Math.floor(Math.random()*lengthOfQuotes)+1);
      //   if (currentRandomNumber !== randomNumber) {
      //     return randomNumber;//new
      //   }
      //   return generateRandomNumber();
      // }
      //console.log(data.data.quotes[randomNumber])

      var lengthOfQuotesQuotes = data.data.quotes[randomNumber].length;//all of the quotes in one quote... yikes!
      var quotesInArray = data.data.quotes[randomNumber];
      var text = "<div>"

      for (i = 0; i < lengthOfQuotesQuotes; i++) {
        text += "<p>" + quotesInArray[i] + "</p>";
      }
      text += "</div>"

      $(".results").append(text);
    })
  })
});

//want to learn how the user puts in data for episode AND season
//would you use two input fields?

//how do I make it so it doesn't pick the same quote over again

//should make an error message appear if a wrong number has been submitted
