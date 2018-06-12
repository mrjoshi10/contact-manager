import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import ModalTitleBar from "./ModalTitleBar";
import FormController from "./FormController";
import Form from "./Form";

const StyledDivOverlay = styled("div")`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 15;
`;

const StyledDivModal = styled("div")`
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  height: 460px;
  left: 50%;
  max-height: 80vh;
  max-width: 400px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80vw;
  z-index: 15;
`;

const StyledDivBody = styled("div")`
  height: calc(100% - 40px);
  overflow: auto;
  padding: 16px;
  width: 100%;
`;

const Modal = ({ fields, onHideModal, onSaveContact }) => (
  <Fragment>
    <StyledDivOverlay />

    <StyledDivModal>
      <ModalTitleBar title="Add / Edit Contact" onClose={onHideModal} />

      <StyledDivBody>
        <FormController
          fields={fields}
          render={props => <Form {...props} />}
          onSubmit={fields => onSaveContact(fields)}
        />
      </StyledDivBody>
    </StyledDivModal>
  </Fragment>
);

Modal.propTypes = {
  fields: PropTypes.object,
  onHideModal: PropTypes.func,
  onSaveContact: PropTypes.func
};

export default Modal;
