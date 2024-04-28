const Blog = require("../model/blogmodel");

exports.createBlog = async (req, res) => {
  const { title, content, imgurl } = req.body;
  try {
    if (!title || !content || !imgurl) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    await Blog.create({
      title,
      content,
      imgurl,
    });
    return res.status(201).json({
      message: "Blog created successfully",
      success: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

exports.getAllBlog = async (req, res)=>{
    try {
        const blogs = await Blog.find()
        return res.status(200).json({
            data:blogs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
exports.getBlogBYId = async (req, res)=>{
    const id = req.params.id
    try {
        const blogs = await Blog.find({_id:id})
        return res.status(200).json({
            data:blogs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
