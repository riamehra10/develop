
  function sendEmail(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = '<html><body>';
    body += '<p>First Name: '+fname+'</p>';
    body += '<p>Last Name: '+lname+'</p>';
    body += '<p>Email: '+email+'</p>';
    body += '<p>Message: '+message+'</p>';
    body += '</body></html>';

    Email.send({
    Host: "smtp.gmail.com",
    Username : "email",
    Password : "",
    To : email,
    From : "email",
    Subject : subject,
    Body : body,
    }).then(
        message => alert(message)
      );
    }
