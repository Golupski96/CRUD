import express, { NextFunction, Request, Response } from 'express'
import { User } from '../models/model'



export default function defineRoutes(app: express.Application) {
  const router = express.Router()

 
  router.get(
    '/datas',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const users = await User.find()
        return res.json(users)
      } catch (error) {
        next(error)
      }
    }
  )
    
    router.post(
        '/datas',
        async (req: Request, res: Response, next: NextFunction) => {
          try {
            const newUser = new User({
              name: req.body.name,
              surname: req.body.surname,
            })
            const savedUser = await newUser.save()
            res.status(201).json(savedUser)
          } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' }); 
    }
          }
        
      )
    
     
      router.delete(
        '/datas/:id',
        async (req: Request, res: Response, next: NextFunction) => {
          try {
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            if (!deletedUser) {
              return res.status(404).json({ message: 'User not found' })
            }
            res
              .status(200)
              .json({ success: true, message: 'User deleted successfully' })
          } catch (error) {
            next(error)
          }
        }
      )
    
      
      router.put('/datas/:id', async (req: Request, res: Response) => {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
          )
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
          }
          res.json(updatedUser)
        } catch (error) {
          console.error('Error updating user:', error)
          res.status(500).json({ message: 'Internal Server Error' })
        }
      })
      app.use(router)
    }
    