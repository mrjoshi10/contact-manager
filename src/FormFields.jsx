import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const StyledInput = styled("input")`
  border: 1px solid #cccccc;
  height: 36px;
  padding: 0 8px;
  width: 100%;
`;

const TextField = ({ label, value, additionals }) => (
  <React.Fragment>
    <label>{label}</label>
    <StyledInput value={value} {...additionals} />
  </React.Fragment>
);

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  additionals: PropTypes.object
};

const RadioGroup = ({ label, value, options, additionals }) => (
  <React.Fragment>
    <label>{label}</label>
    <div>
      {options.map(option => (
        <Fragment key={option}>
          <input
            type="radio"
            value={option}
            checked={option === value}
            {...additionals}
          />
          {option}
        </Fragment>
      ))}
    </div>
  </React.Fragment>
);

RadioGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  additionals: PropTypes.object
};

export { TextField, RadioGroup };
