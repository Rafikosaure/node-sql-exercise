import express from 'express'
import { env } from './config.js'
import cors from 'cors'

// Connexion MySQL
import './models/index.js'

// ROUTES
import routerContact from './routes/contact.js'

const app = express()

// PORT
const PORT = env.port || 8080

// MIDDLEWARE
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// MIDDLEWARE TO ROUTE
app.use("/contact", routerContact)

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})