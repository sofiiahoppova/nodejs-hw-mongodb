import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactID, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactID },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  const contact = rawResult.value;

  if (!rawResult || !contact) return null;

  return contact;
};

export const deleteContact = async (contactID) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactID,
  });
  return contact;
};
