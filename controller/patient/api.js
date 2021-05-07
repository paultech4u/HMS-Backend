import express from 'express';
import createPatient from './createPatient';
import deletePatient from './deletePatient';
import editPatient from './editPatient';
import isAuthenticated from '../../auth/authMiddleware';

// Initialized the requests methods and routes.
const router = express.Router();

/**
 * @method POST
 * @access Private
 * @endpoints /api/register?user=patient
 */
router.post('/create-patient', isAuthenticated, createPatient);

/**
 * @method DELETE
 * @access Private
 * @endpoints /api/delete-patient
 */
router.post('/delete-patient', isAuthenticated, deletePatient);

/**
 * @method POST
 * @access Private
 * @endpoints /api/edit-patient
 */
router.post('/edit-patient', isAuthenticated, editPatient);

export default router;