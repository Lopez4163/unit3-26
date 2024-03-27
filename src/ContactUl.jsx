import React, { useState } from "react"
import "./contactUi.css"

const ContactUl = ({ contactsList }) => {
  const [showContact, setShowContact] = useState([])
  return (
    <div className="contact-container">
      <div className="column">
        <h2 className="">Name</h2>
        {contactsList.map((contact, index) => (
          <p
            className="name"
            key={index}
            onClick={() => {
              setShowContact(contact)
            }}
          >
            {contact.name}
          </p>
        ))}
      </div>
      <div>
        <h2>Info</h2>
        {showContact ? (
          <div>
            <p>{showContact.email}</p>
            <p>{showContact.phone}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ContactUl
