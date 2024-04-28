const express = require('express')
const { createBlog, getAllBlog, getBlogBYId } = require('../controllers/blogController')

const router = express.Router()

router.route('/create/blog').post(createBlog)
router.route('/get/blog').get(getAllBlog)
router.route('/get/blog/by/:id').get(getBlogBYId)

module.exports = router