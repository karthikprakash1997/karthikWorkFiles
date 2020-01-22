import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
        
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    
    created_date: {
       type: Date,
       default: Date.now 
    }
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}