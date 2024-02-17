import express, { Application } from 'express'
import defineRoutes from './routes'
import { dbConnection } from './dataAccess'
import cors from 'cors'

// Initialize express app
const app: Application = express()
const port = process.env.SERVER_PORT ?? 8000


app.use(cors());

// Parsing JSON
app.use(express.json())


// Add routes to the app
defineRoutes(app)



// Connect to MongoDB and seed data if DB is not seeded already
dbConnection()


app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})




