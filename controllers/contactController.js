const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
const addContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required !");
  }
  res.status(200).json({ message: "Get all contacts" });
};
const getContact = (req, res) => {
  res.status(200).json({ message: `Get individual contact ${req.params.id}` });
};
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id} ` });
};
const deleteContact = (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id} ` });
};

module.exports = {
  getContacts,
  addContact,
  getContact,
  updateContact,
  deleteContact,
};
