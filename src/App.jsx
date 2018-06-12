import React, { Component, Fragment } from "react";
import styled from "react-emotion";
import ListContacts from "./ListContacts";
import Modal from "./Modal";

const StyledAddButton = styled("button")`
  background-color: red;
  border-radius: 100%;
  bottom: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-size: 2rem;
  height: 50px;
  line-height: 50px;
  position: fixed;
  right: 30px;
  width: 50px;
  z-index: 10;

  :hover {
    color: #ffffff;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      contacts: {}
    };
  }

  // Local variables to support features
  counterKey = 0;
  editKey = "";

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  hideModal = () => {
    this.editKey = "";

    this.setState({
      showModal: false
    });
  };

  saveContact = fields => {
    let { contacts } = this.state;

    if (this.editKey !== "") {
      // Edit existing contact
      contacts[this.editKey] = fields;
      this.editKey = "";
    } else {
      // Add new contact
      contacts[`profile${this.counterKey}`] = fields;
      this.counterKey++;
    }

    this.setState({
      showModal: false,
      contacts
    });
  };

  editContact = (key, e) => {
    e.stopPropagation();

    this.editKey = key;
    this.setState({
      showModal: true
    });
  };

  deleteContact = (key, e) => {
    e.stopPropagation();

    let contacts = this.state.contacts;
    delete contacts[key];
    this.setState({
      contacts
    });
  };

  render() {
    const { showModal, contacts } = this.state;

    return (
      <Fragment>
        <ListContacts
          contacts={contacts}
          onShowModal={this.showModal}
          onEdit={this.editContact}
          onDelete={this.deleteContact}
        />

        <StyledAddButton onClick={this.showModal}>+</StyledAddButton>

        {showModal && (
          <Modal
            fields={
              this.editKey !== ""
                ? contacts[this.editKey]
                : {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    status: ""
                  }
            }
            onHideModal={this.hideModal}
            onSaveContact={this.saveContact}
          />
        )}
      </Fragment>
    );
  }
}
