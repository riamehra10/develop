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
    SecureToken : "76f8b1ca-bf64-4382-81e4-4b26b87f8f92",
    To : "preetimehra018@gmail.com",
    From : "preetimehra018@gmail.com",
    Subject : subject,
    Body : body,
    }).then(
        message => alert(message)
      );
  }
  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
