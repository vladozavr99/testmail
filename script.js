function send_email(choise_key, choise_val){
    const result = "Selected button: " + choise_key + " (" + choise_val + ")"

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vladozavr99@gmail.com",
        Password : "6863bbaf-1d9a-43c6-9825-a9cac6cb5b03",
        To : 'vladozavr99@gmail.com',
        From : "loh@gmail.com",
        Subject : "She answered!",
        Body : "test"
    }).then(
        message => console.log(message),
        $("#result").removeClass("disabled"),
        $("#action").addClass("disabled")
    );
}


   

$("#send_message").click(function () { send_email("1", "что-то посмотреть") })
    


