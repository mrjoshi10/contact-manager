import React, { Fragment } from "react";
import styled from "react-emotion";
import PropTypes from "prop-types";
import ListItemActions from "./ListItemActions";

const StyledDivWrapper = styled("div")`
  align-items: center;
  background-color: ${props =>
    props.visibility ? "rgba(255, 0, 0, 0.5)" : "#ffffff"};
  color: ${props => (props.visibility ? "#ffffff" : "inherit")};
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  padding: 16px;
  position: relative;
  width: 100%;
  z-index: 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledDivDetails = styled("div")`
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  height: auto;
  left: 0;
  margin: -8px auto 8px auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  transition: transform 0.3s ease-out;
  transform: ${props => (props.visibility ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  width: 90%;
  z-index: 2;

  span {
    display: block;
    margin: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledOverlay = styled("div")`
  bottom: 0;
  display: ${props => (props.visibility ? "block" : "none")};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

class ListItem extends React.Component {
  state = {
    detailsVisible: false
  };

  toggleDetails = () => {
    this.setState({
      detailsVisible: !this.state.detailsVisible
    });
  };

  render() {
    const { contact, itemKey, ...rest } = this.props;
    const { firstName, lastName, email, phoneNumber, status } = contact;
    const { detailsVisible } = this.state;

    return (
      <Fragment>
        <StyledDivWrapper
          onClick={this.toggleDetails}
          visibility={detailsVisible}
        >
          <span>{`${firstName} ${lastName}`}</span>
          <ListItemActions itemKey={itemKey} {...rest} />
        </StyledDivWrapper>

        <StyledOverlay
          onClick={this.toggleDetails}
          visibility={detailsVisible}
        />

        <StyledDivDetails visibility={detailsVisible}>
          <span>
            Email: <b>{email}</b>
          </span>
          <span>
            Phone Number: <b>{phoneNumber}</b>
          </span>
          <span>
            Status: <b>{status}</b>
          </span>
        </StyledDivDetails>
      </Fragment>
    );
  }
}

ListItem.propTypes = {
  contact: PropTypes.object,
  itemKey: PropTypes.string
};

export default ListItem;
