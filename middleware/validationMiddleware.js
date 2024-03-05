import { body, validationResult } from 'express-validator';
import User from '../models/UserModel.js';

const validatorWithErrors = (validationValues) => {
  return [
    validationValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMsgs = errors.array().map((err) => err.msg);
        console.log(errorMsgs);

        throw new Error(errorMsgs);
      }

      next();
    },
  ];
};

// USER VALIDATION

// Register

export const validationUserRegister = validatorWithErrors([
  body('firstName', 'First Name is required').trim().notEmpty(),
  body('lastName', 'Last Name is required').trim().notEmpty(),
  body('username', 'Username is required').trim().notEmpty(),
  body('email', 'Please enter a valid email like: test@test.com')
    .trim()
    .isEmail()
    .custom(async (value) => {
      const userDoc = await User.findOne({ email: value });
      if (userDoc) {
        throw new Error('Email already exist');
      }
    }),
  body('password', 'Password is required')
    .trim()
    .notEmpty()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must have min 6 and max 30 character.'),
]);

// Login
export const validationUserLogin = validatorWithErrors([
  body('email', 'Please enter a valid email like: test@test.com')
    .trim()
    .isEmail(),
  body('password', 'Password is required')
    .trim()
    .notEmpty()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must have min 6 and max 30 character.'),
]);
