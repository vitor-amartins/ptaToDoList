const app = require('./config/server.js');

require('./app/routes/home-route.js')(app);
require('./app/routes/404-route.js')(app);

app.listen(process.event.PORT || 3000, () => {
// app.listen(3000, () => {
    console.log(`Listening on port 3000 (or not)`);
});