import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const StyledTitleBar = styled("div")`
  align-items: center;
  background-color: #000000;
  border-bottom: 1px solid #ccc;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  line-height: 40px;
  padding: 0 8px 0 16px;
`;

const ModalTitleBar = ({ title, onClose }) => (
  <StyledTitleBar>
    <span>{title}</span>
    <button onClick={onClose}>✖</button>
  </StyledTitleBar>
);

ModalTitleBar.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func
};

export default ModalTitleBar;
