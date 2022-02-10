import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group mb3 mt-3">
          <input
            type="text"
            className="form-control"
            text-capitalize
            placeholder="Add A Task"
            value={item}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-block btn-success "
                  : "btn btn-block btn-primary"
              }
            >
              {editItem ? "Edit" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    );
  }
}
