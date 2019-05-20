import mongoose from  'mongoose';
mongoose.connect('mongodb://spyrus:spyrus@18.191.41.252/card_db', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connectedxx")
});
export default mongoose;