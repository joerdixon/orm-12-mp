// Require express
const express = require('express');
// Import our sequelize instance.
const sequelize = require('./config/connection');

// Instantiate server.
const app = express();
// Declare port
const PORT = process.env.PORT || 3001;

// Middleware for data interchange
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request routing goes through controllers
// TODO: FIX ROUTING
const masRoutes = require('./controllers');
app.use("/api", masRoutes);

// Sync sequelize with our express instance.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
