import React from "react";
import PropTypes from "prop-types";

const ListItemActions = ({ itemKey, onEdit, onDelete }) => (
  <div>
    <button onClick={e => onEdit(itemKey, e)}>✎</button>
    <button onClick={e => onDelete(itemKey, e)}>✖</button>
  </div>
);

ListItemActions.propTypes = {
  itemKey: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default ListItemActions;
