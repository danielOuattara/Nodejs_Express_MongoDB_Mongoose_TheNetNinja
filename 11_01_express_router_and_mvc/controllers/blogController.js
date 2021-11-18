const Blog = require("./../models/blogs");

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => res.render("index", { title: "All Blogs", blogs: result }))
        .catch(err => console.log(err.message));
}

const blog_details = (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.render("details", { blog, title: "Blog Details" }))
        .catch(err => console.log(err.message));
}



const blog_create_get = (req, res) => {
    res.render("create", { title: "Create New Blog" });
}


const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then(() => res.redirect("/blogs"))
    .catch(err => console.log(err.message))
}

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ redirect: "/blogs" }))
        .catch(err => console.log(err.message))
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}