import mongoose from  'mongoose';
mongoose.connect('mongodb://chatadmin:raju@18.223.186.79/chat', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connectedxx")
});
export default mongoose;