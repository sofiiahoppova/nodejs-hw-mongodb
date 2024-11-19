import { Router } from 'express';

import {
  getContactsByIdController,
  getContactsController,
  createContactController,
  updateContactContoller,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidID } from '../middlewares/isValidID.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactID', isValidID, ctrlWrapper(getContactsByIdController));

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactID',
  isValidID,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactContoller),
);

router.delete('/:contactID', isValidID, ctrlWrapper(deleteContactController));

export default router;
