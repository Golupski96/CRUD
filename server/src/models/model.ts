import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
})

userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id.toHexString()
    delete ret._id
    return ret
  },
})
const User = mongoose.model('datas', userSchema, 'datas')

export { User }
