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

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get(
  '/contacts/:contactID',
  isValidID,
  ctrlWrapper(getContactsByIdController),
);

router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/contacts/:contactID',
  isValidID,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactContoller),
);

router.delete(
  '/contacts/:contactID',
  isValidID,
  ctrlWrapper(deleteContactController),
);

export default router;
