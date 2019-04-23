function send_email(choise_key, choise_val){
    const result = "Selected button: " + choise_key + " (" + choise_val + ")"


    Email.send({
        Host : "smtp25.elasticemail.com",
        Username : "vladozavr99@gmail.com",
        Password : "6863bbaf-1d9a-43c6-9825-a9cac6cb5b03",
        To : 'vladozavr99@gmail.com',
        From : "test@gmail.com",
        Subject : "She answered!",
        Body : result
    }).then(
        message => console.log(message),
        $("#result").removeClass("disabled"),
        $("#action").addClass("disabled")
    );
}

$(() => {
   $("#password_button").click( function () {
       if ($("#key").val().toLowerCase() === "сдрбогиня"){
           $("#password").addClass("disabled")
           $("#action").removeClass("disabled")
       }
   })

    $("#walk_button").click(function () { send_email("1", "что-то посмотреть") })
    $("#eat_button").click(function () { send_email("2", "что-то покушать") })
    $("#game_button").click(function () { send_email("3", "чем-то заняться") })


});

    


