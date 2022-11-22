var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " shouted 'You want to play? Lets play' ")
}

var Val = mongoose.model('Val', schema)

var jdm = new Val({ name: 'Chamber' })
jdm.save(function (err) {
    jdm.meow()
})
