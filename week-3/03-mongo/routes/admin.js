const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db');

// Admin Routes
router.post('/signup', async (req, res) => {
    await Admin.create({
        username : req.body.username,
        password: req.body.password
    });
    res.json({
        message: 'Admin account created!'
    });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const newCourse = await Course.create({
        title : req.body.title,
        description : req.body.description,
        imageLink : req.body.imageLink,
        price : req.body.price
    });
    res.json({
        message: 'Course created!', courseId: newCourse._id
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

module.exports = router;