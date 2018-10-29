app.post("/contact", function(req,res){
    var api_key = 'c29a624c00a16343a35f217e27c322a0-4836d8f5-3fc9099a';
var domain = 'sandbox416af0fb659347ef8a3a7e957cc7a67e.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'priyanka bonam Users <postmaster@sandbox416af0fb659347ef8a3a7e957cc7a67e.mailgun.org>',
  to: 'priyanka.kite@gmail.com',
  subject: req.body.firstname,
  text: req.body.subject
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
  if(!error)
  res.send("Mail sent");
  else
  res.send("Mail not sent");
});
}) 