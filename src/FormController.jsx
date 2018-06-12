import React from "react";
import PropTypes from "prop-types";

class FormController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: props.fields
    };
  }

  onChange = e => {
    let { fields } = this.state;

    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.fields);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.render({
          ...this.state,
          handlers: {
            onChange: this.onChange
          }
        })}
      </form>
    );
  }
}

FormController.proptypes = {
  render: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormController;
