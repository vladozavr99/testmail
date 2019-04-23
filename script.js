function send_email(choise_val){
    const result = choise_val


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "andrew0999@hotmail.com",
        Password : "5b0d21de-a0e8-4a80-bdaa-660b8c5b075f",
        To : 'vlp@25k.ru',
        From : "test@gmail.com",
        Subject : "She answered!",
        Body : result
    }).then(
       message => console.log(message)
    );
}


   $(() => {
   

    $("#walk_button").click(function () { send_email("что-то посмотреть") })


});


    


