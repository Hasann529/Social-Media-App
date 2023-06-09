const express = require('express')
const { createPost, likeAndUnlikePost, deletePost, getPostOfFollowing, updateCaption, commentOnPost, deleteComment } = require('../Controllers/postController')
const { isAuthenticated } = require('../Middleware/auth')
const router = express.Router()

router.route('/post/upload').post(isAuthenticated,createPost)
router.route('/post/:id').get(isAuthenticated,likeAndUnlikePost).put(isAuthenticated,updateCaption).delete(isAuthenticated,deletePost)
router.route('/posts').get(isAuthenticated,getPostOfFollowing)
router.route('/post/comment/:id').put(isAuthenticated,commentOnPost)
router.route('/post/comment/:id/:commentId').delete(isAuthenticated,deleteComment)

module.exports = router