import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new Error('Please login in order to view crypto data details');
  }

  try {
    const { userId, username } = verifyJWT(token);

    req.user = { userId, username };
    next();
  } catch (err) {
    throw new Error(err);
  }
};
