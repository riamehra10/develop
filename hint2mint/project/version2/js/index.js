
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
    Username : "preetimehra018@gmail.com",
    Password : "",
    To : email,
    From : "preetimehra018@gmail.com",
    Subject : subject,
    Body : body,
    }).then(
        message => alert(message)
      );
    }


    /* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

