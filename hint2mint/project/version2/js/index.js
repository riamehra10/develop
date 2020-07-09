  function sendEmail(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let subject = 'Contact Us';
    let message = document.getElementById('message').value;

    let body = '<!DOCTYPE html><html><head></head><body>';
    body += '<p><b>Subject: Query from Contact us form</b></p>';
    body += '<p>Hello Dixita</p>';
    body += '<p>'+fname+' has tried to contact you via form. Details of the concerned person are as follows:-</p>';
    body += '<p>1.Full Name: '+fname+' '+lname+'</p>';
    body += '<p>2.Email ID: '+email+'</p>';
    body += '<p>3.Subject: '+subject+'</p>';
    body += '<p>4.Message: '+message+'</p>';
    body += 'Warm Regards,'+'<br>'+'Dixita Jain'+'<br>'+'Director,'+'<br>'+'Contact No: +9971915524';
    body += '</body></html>';


    Email.send({
    SecureToken : "",
    To : '',
    From : "",
    Subject : subject,
    Body : body,
    }).then(
        message => alert("We will contact you soon.")
      );
    }


    /* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };




function sendNewsletterMail(){
    let newsLetterEmail = document.getElementById('newsLetterEmail').value;
    let Subject  = 'Newsletter';

    let body = '<!DOCTYPE html><html><head></head><body>';
    body += '<p><b>Subject: New addition to the Newsletter</b></p>';
    body +='<p>Congratulations !!</p>';
    body +='<p>You have received a new subscription to the Newsletter. The E-mail ID for the same is </p>';
    body +='<p>'+newsLetterEmail+'</p>';
    body += '</body></html>';

    alert(newsLetterEmail);
    Email.send({
    SecureToken : "",
    To : "",
    From : "",
    Subject : Subject,
    Body : body,
    }).then(
        message => alert("You have been subscribed.")
      );
  }
  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
