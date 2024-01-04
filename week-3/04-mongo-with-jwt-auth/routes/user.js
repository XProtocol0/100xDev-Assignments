const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup',  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username: username,
        password: password
    });

    res.json({
        message: 'User account created!'
    });
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    });
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        });
    } else {
        res.status(411).json({
            message: "Incorrect credentials"
        });
    }
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
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