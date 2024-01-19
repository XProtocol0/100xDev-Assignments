const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    await User.create({
        username : req.body.username,
        password : req.body.password
    });
    res.json({
        message : 'User created!'
    });
});

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});
    res.json({
        courses: allCourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username : username
        }, {
           "$push" : {
            purchasedCourses : courseId
           }
        });
    } catch(e) {
        console.log(e);
    }
    res.json({
        message : 'Course added to your account!'
    })
});

router.get('/purchasedCourses', userMiddleware,  async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    });
});

module.exports = router