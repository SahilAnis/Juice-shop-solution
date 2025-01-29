const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'your-secret-key');
res.send({ token });
