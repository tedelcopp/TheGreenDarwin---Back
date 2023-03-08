const { Router } = require("express");
const { getAllBlogs } = require("../controllers/Blogs/getAllBlogs");
const { postBlog } = require("../controllers/Blogs/postBlog");
const { getBlogById } = require("../controllers/Blogs/getBlogById");
const {deleteBlog} = require("../controllers/Blogs/deleteBlog")
const blogRouter = Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/", postBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", deleteBlog);
module.exports = blogRouter;
