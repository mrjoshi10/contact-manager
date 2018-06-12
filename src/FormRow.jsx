import React from "react";
import PropTypes from "prop-types";

const FormRow = ({ children }) => (
  <div style={{ marginBottom: "24px" }}>{children}</div>
);

FormRow.propTypes = {
  children: PropTypes.any.isRequired
};

export default FormRow;
