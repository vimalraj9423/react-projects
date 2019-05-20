import mongoose from "./mongoose";

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let userSchema= new mongoose.Schema({
    userName:{type:'string'},
    phoneNo:{type:mongoose.SchemaTypes.Number},
    email:{type:mongoose.SchemaTypes.String, 
        // validate: [ validateEmail, 'invalid email' ]
    },
    gender:{
        type:mongoose.SchemaTypes.String,
        enum:['MALE','FEMALE']
    },
    password:{type:mongoose.SchemaTypes.String}

});
export  default  mongoose.model('chat_user', userSchema);