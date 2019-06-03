const app = require('./config/server.js');

require('./app/routes/home-route.js')(app);
require('./app/routes/404-route.js')(app);

const port = 3000;

app.listen(process.event.PORT || port, () => {
// app.listen(port, () => {
    console.log(`Listening on port ${port} (or not)`);
});