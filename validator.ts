const validator = require('validator');
if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
