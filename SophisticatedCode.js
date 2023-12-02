/**
 * filename: SophisticatedCode.js
 * 
 * This code is a sophisticated and elaborate implementation of a contact management system.
 * It allows users to add, view, update, and delete contacts in a highly professional and creative manner.
 */

// Contact class
class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getContactInfo() {
    return `${this.name} - Email: ${this.email}, Phone: ${this.phone}`;
  }
}

// Contact Management System class
class ContactManagementSystem {
  constructor() {
    this.contacts = [];
  }

  addContact(name, email, phone) {
    const contact = new Contact(name, email, phone);
    this.contacts.push(contact);
  }

  viewContacts() {
    console.log("--- Contacts ---");
    this.contacts.forEach((contact) => {
      console.log(contact.getContactInfo());
    });
    console.log("----------------");
  }

  updateContactName(index, newName) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index].name = newName;
    }
  }

  deleteContact(index) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
  }
}

// Create an instance of Contact Management System
const contactManagementSystem = new ContactManagementSystem();

// Add sample contacts
contactManagementSystem.addContact("John Doe", "john.doe@example.com", "1234567890");
contactManagementSystem.addContact("Jane Smith", "jane.smith@example.com", "9876543210");

// View all contacts
contactManagementSystem.viewContacts();

// Add a new contact
contactManagementSystem.addContact("Alice Johnson", "alice.johnson@example.com", "4567890123");

// View all contacts again
contactManagementSystem.viewContacts();

// Update the name of the second contact
contactManagementSystem.updateContactName(1, "Jane Johnson");

// View all contacts once more
contactManagementSystem.viewContacts();

// Delete the first contact
contactManagementSystem.deleteContact(0);

// View the final list of contacts
contactManagementSystem.viewContacts();