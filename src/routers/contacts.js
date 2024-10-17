import { Router } from 'express';

import {
  getContactsByIdController,
  getContactsController,
  createContactController,
  updateContactContoller,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactID', ctrlWrapper(getContactsByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts/:contactID', ctrlWrapper(updateContactContoller));

router.delete('/contacts/:contactID', ctrlWrapper(deleteContactController));

export default router;
