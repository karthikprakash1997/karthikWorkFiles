import mongoose from 'mongoose';
import { UserSchema } from '../models/Model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
process.env.SECRET_KEY = 'secret'

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req, res) => {
   let newUser = new User(req.body);
   let today = new Date();
   const userData= {
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       email:req.body.email,
       password:req.body.password,
   }
   User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password,8, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

/*export const getUser = (req, res) => {  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

User.findOne({
  _id: decoded._id
})
  .then(user => {
    if (user) {
      res.json(user)
    } else {
      res.send('User does not exist')
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

};*/

export const getUserWithID = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.UserId}, req.body, { new: true }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}

export const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted User'});
    })
}

export const getUserWithemail = (req, res) => {
    User.findOne({
        email: req.body.email
      })
        .then(user => {
          if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
              // Passwords match
              const payload = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }
              let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 1440
              })
              res.send(token)
            } else {
              // Passwords don't match
              res.json({ error: 'Wrong password' })
            }
          } else {
            res.json({ error: 'User does not exist' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    
}

export const getUser = (req, res) => {
  User.find({}, (err, user) => {
      if (err) {
          res.send(err);
      }
      res.json(user);
  });
};