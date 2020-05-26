const bet365 = require('./index');

new bet365().on().then((rest) => {
    console.log(rest)
}).catch((err) => {
    console.log('Err: '+err)
})