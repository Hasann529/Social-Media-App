const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
   name : String,  
   
  caption: String,

    image: {
      public_id: String,
      url: String,
    },
  
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        userName:{
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
})

module.exports = mongoose.model("Post", postSchema)