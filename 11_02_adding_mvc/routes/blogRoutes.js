
const express = require("express");
const router = express.Router();
const Blog = require("./../models/blogs");


router.get("/", (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => res.render("index", { title: "All Blogs", blogs: result }))
        .catch(err => console.log(err.message))
})

router.post("/", (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then(() => {
            res.redirect("/blogs");
        })
        .catch(err => console.log(err.message))

});

router.get("/create", (req, res) => {
    res.render("create", { title: "Create New Blog" });
});

router.get("/:id", (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.render("details", { blog, title: "Blog Details" }))
        .catch(err => console.log(err.message));
});


router.delete("/:id", (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ redirect: "/blogs" }))
        .catch(err => console.log(err.message))
})


module.exports = router;