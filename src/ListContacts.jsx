import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import ListItem from "./ListItem";

const StyledDivInfo = styled("div")`
  color: #777;
  font-size: 1.5rem;
  line-height: 35px;
  text-align: center;
  left: 0;
  padding: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  button {
    color: #fff;
    font-size: inherit;
    margin: 0;
    padding: 0;

    :hover {
      color: red;
    }
  }
`;

const ListContacts = ({ contacts, onShowModal, ...rest }) => {
  const keys = Object.keys(contacts);

  return (
    <Fragment>
      {keys.length > 0 ? (
        keys.map(key => (
          <ListItem key={key} itemKey={key} contact={contacts[key]} {...rest} />
        ))
      ) : (
        <StyledDivInfo>
          <span>
            No contacts added yet<br />
            <button onClick={onShowModal}>Click here</button> to add one
          </span>
        </StyledDivInfo>
      )}
    </Fragment>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  onShowModal: PropTypes.func
};

export default ListContacts;
