import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
            {<FaUser />} {contact.name} - {contact.email}
          <button onClick={() => deleteContact(index)}><RiDeleteBinLine />Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
