import mongoose from 'mongoose'
import { generateDatas } from '../seeds'
import { User } from '../models/model'

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/'
    )

    console.log('MongoDB connection established')
    const existingDatas = await User.countDocuments()
    if (existingDatas === 0) {
      const datas = generateDatas(5)
      await User.insertMany(datas)
      console.log(`${datas.length} datas have been inserted into the database.`)
    } else {
      console.log('Database already seeded.')
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}

export { dbConnection }