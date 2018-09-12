'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
//# sourceMappingURL=index.js.map