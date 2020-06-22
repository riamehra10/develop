function sendNewsletterMail(){
    let email = document.getElementById('newsLetterEmail').value;
    let Subject  = "Newsletter";
    let body =  email;
    alert(email);
    Email.send({
    Host: "smtp.gmail.com",
    Username : "preetimehra018@gmail.com",
    Password : "",
    To : "preetimehra018@gmail.com",
    From : "preetimehra018@gmail.com",
    Subject : subject,
    Body : body,
    }).then(
        message => alert(message)
      );
  }