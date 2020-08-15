const { check, body } = require('express-validator');

const signupValidate = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email', 'Please Enter a valid email').isEmail(),
  check('password', 'Enter a password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

const forgotPasswordValidator = [
  check('email', 'Please Enter a valid email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Must be a valid Email address')
];

const resetPasswordValidator = [
  check('newPassword')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

const signinValidate = [
  check('email', 'Please Enter a valid email').isEmail(),
  check('password', 'Enter a password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

const createPostValidator = [
  body('text', 'Write a body text')
    .not()
    .isEmpty()
    .isLength({
      min: 10,
      max: 300
    })
    .withMessage('text must be between 10 to 300 characters')
    .trim()
    .escape()
];

const createProfileValidator = [
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills is required').not().isEmpty()
];

const addExperienceValidator = [
  check('title', 'Title is required').not().isEmpty(),
  check('company', 'Company is required').not().isEmpty(),
  check('from', 'From date is required and needs to be from the past')
    .not()
    .isEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];

const addEducationValidator = [
  check('school', 'School is required').not().isEmpty(),
  check('degree', 'Degree is required').not().isEmpty(),
  check('fieldofstudy', 'Field of study is required').not().isEmpty(),
  check('from', 'From date is required and needs to be from the past')
    .not()
    .isEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
];

module.exports = {
  signupValidate,
  signinValidate,
  resetPasswordValidator,
  forgotPasswordValidator,
  createPostValidator,
  createProfileValidator,
  addExperienceValidator,
  addEducationValidator
};
