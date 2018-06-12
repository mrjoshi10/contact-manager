import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import FormRow from "./FormRow";
import { TextField, RadioGroup } from "./FormFields";

const StyledButtonSubmit = styled("button")`
  background-color: #000;
  color: #fff;
  float: right;
  font-weight: bold;
  margin-top: 20px;
  padding: 5px 10px;
`;

const Form = ({ fields, handlers }) => (
  /* FormController.jsx file will wrap this code block inside HTML form tag */
  <Fragment>
    <FormRow>
      <TextField
        label="First Name"
        value={fields.firstName}
        additionals={{
          ...handlers,
          name: "firstName",
          type: "text",
          required: true
        }}
      />
    </FormRow>
    <FormRow>
      <TextField
        label="Last Name"
        value={fields.lastName}
        additionals={{
          ...handlers,
          name: "lastName",
          type: "text",
          required: true
        }}
      />
    </FormRow>
    <FormRow>
      <TextField
        label="Email"
        value={fields.email}
        additionals={{
          ...handlers,
          name: "email",
          type: "email",
          required: true
        }}
      />
    </FormRow>
    <FormRow>
      <TextField
        label="Phone Number"
        value={fields.phoneNumber}
        additionals={{
          ...handlers,
          name: "phoneNumber",
          type: "number",
          required: true
        }}
      />
    </FormRow>
    <FormRow>
      <RadioGroup
        label="Status"
        value={fields.status}
        options={["Active", "Inactive"]}
        additionals={{
          ...handlers,
          name: "status",
          required: true
        }}
      />
    </FormRow>
    <StyledButtonSubmit>Submit</StyledButtonSubmit>
  </Fragment>
);

Form.propTypes = {
  fields: PropTypes.object,
  handlers: PropTypes.object
};

export default Form;
