var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Val = mongoose.model('Val', { name: String })

var chamber = new Val({ name: 'Chamber' })
chamber.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('You want to play? Lets play')
    }
})
