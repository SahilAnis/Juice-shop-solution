Week 2: Implementing Security Measures
Objective
Fix the vulnerabilities identified in Week 1 and strengthen the application’s defenses.

Steps:
Sanitize and Validate Inputs

Install the validator library:
bash
Copy
Edit
npm install validator
Example implementation:
javascript
Copy
Edit
const validator = require('validator');
if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
Secure Password Storage

Install bcrypt for password hashing:
bash
Copy
Edit
npm install bcrypt
Example usage:
javascript
Copy
Edit
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
Enhance Authentication

Use jsonwebtoken for token-based authentication:
bash
Copy
Edit
npm install jsonwebtoken
Example:
javascript
Copy
Edit
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'your-secret-key');
res.send({ token });
Secure HTTP Headers

Install and configure helmet:
bash
Copy
Edit
npm install helmet
Example:
javascript
Copy
Edit
const helmet = require('helmet');
app.use(helmet());
Deliverables
Updated application code with:
Input validation.
Password hashing.
Token-based authentication.
Secured HTTP headers.
