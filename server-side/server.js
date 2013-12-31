// un sever minimal avec express

var express      = require('express')
  , app          = express();

app.configure(function () {
  app.use(express.static('client-side'));
  app.use(app.router);
});

app.get('/', function (req, res, next) {
  res.sendfile('/index.html');
});

app.listen(3000, console.log("Application running:" + 3000));
