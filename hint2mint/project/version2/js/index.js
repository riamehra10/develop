  function sendEmail(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = '<!DOCTYPE html><html><head></head><body>';
    body += '<p>Hello Dixita</p>';
    body += '<p>'+fname+' has tried to contact you via form. Details of the concerned person are as follows:-</p>';
    body += '<p>1.Full Name: '+lname+' '+lname+'</p>';
    body += '<p>2.Email ID: '+email+'</p>';
    body += '<p>3.Subject: '+subject+'</p>';
    body += '<p>4.Message: '+message+'</p>';
    body += '<p>kindly look into the same.</p>';
    body += '</body></html>';


    Email.send({
    SecureToken : "76f8b1ca-bf64-4382-81e4-4b26b87f8f92",
    To : 'preetimehra018@gmail.com',
    From : "preetimehra018@gmail.com",
    Subject : subject,
    Body : body,
    }).then(
        message => alert(message)
      );
    }


    /* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

