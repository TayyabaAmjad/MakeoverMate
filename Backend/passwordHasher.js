const bcrypt = require('bcrypt');

// Password to be hashed
const password = 'Admin@123';

// Generate a salt
const saltRounds = 10;
bcrypt.genSalt(saltRounds, function(err, salt) {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }

  // Hash the password with the generated salt
  bcrypt.hash(password, salt, function(err, hashedPassword) {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }

    // Use the hashed password
    console.log('Hashed password:', hashedPassword);
  });
});

