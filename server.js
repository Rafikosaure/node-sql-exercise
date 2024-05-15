import express from 'express'
import env from './configuration/env.js';
import cors from 'cors'

// Connexion MySQL
import './models/index.js'

// ROUTES
import routerContact from './routes/contact.route.js'

const app = express()

// PORT
const PORT = env.port || 8080

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/contact", routerContact)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})