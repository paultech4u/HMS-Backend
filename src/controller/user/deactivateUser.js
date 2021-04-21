import { User } from '../../model/user';
import { Response, Request } from 'express';
import { errorHandler } from '../../util/errorHandler';

/**
 * @typedef {{}} Request
 * @typedef {{}} Response
 * @typedef {{}} NextFunction
 *
 */

/**
 
 * @param  {Request} req object
 * @param  {Response} res object
 * @param  {NextFunction} next function
 */
async function deactivateUser(req, res, next) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      errorHandler(404, 'User not found');
    }

    // unverify the user
    user.isVerified = false;

    user.save();

    res.status(200).json({
      message: 'User disabled',
    });
  } catch (error) {
    if (!error.status) {
      error.status = 500;
    }
    next(error);
  }
}

export default deactivateUser;
