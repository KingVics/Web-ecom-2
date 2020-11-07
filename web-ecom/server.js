const express = require('express');
const app = express();

app.use(express.static('./dist/web-ecom'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/web-ecom'}
  );
  });

  app.listen(process.env.PORT || 8080);