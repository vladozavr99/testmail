function send_email(){
    

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vladozavr99@gmail.com",
        Password : "6863bbaf-1d9a-43c6-9825-a9cac6cb5b03",
        To : 'vlp@25k.ru',
        From : "test@gmail.com",
        Subject : "She answered!",
        Body : "test"
    }).then(
        message => alert(message)
    );
}


   

$("#send_message").click(function () { send_email() })
    


