const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required !");
  }
  res.status(200).json({ message: "Get all contacts" });
});
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get individual contact ${req.params.id}` });
});
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id} ` });
});
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id} ` });
});

module.exports = {
  getContacts,
  addContact,
  getContact,
  updateContact,
  deleteContact,
};
