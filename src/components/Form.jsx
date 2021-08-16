import React from "react";
import styled from "styled-components";

function Form({ addToList, title, setTitle, editMode, editItem }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode.isEditing) {
      //edit item
      editItem({ id: editMode.id, title });
      return;
    }
    addToList(title);
  };
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Wrapper type="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form_input"
        value={title}
        onChange={handleOnChange}
        placeholder="Add todo here..."
      />
      <button className="form_button" onClick={handleSubmit}>
        {editMode.isEditing ? "Done" : "Add"}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 300px;
  display: flex;
  .form_input {
    flex-grow: 1;
    padding: 5px;
  }
  .form_button {
    padding: 5px 12px;
    cursor: pointer;
  }
`;
export default Form;
