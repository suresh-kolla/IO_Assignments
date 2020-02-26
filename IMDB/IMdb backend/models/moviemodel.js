const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/IMDBCLONE', {useNewUrlParser: true});

var movieSchema=new mongoose.Schema({
    moviename:String,
      yor:Number,
      plot:String,
      actorname:String,
      adob:String,
      agender:String,
      abio:String,
      producername:String,
      pdob:String,
      pgender:String,
      pbio:String,
})
var movie=mongoose.model('adddata',movieSchema)

module.exports=movie