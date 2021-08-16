import React from "react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
function ListItem({ title, id, removeItem, activateEditMode }) {
  const handleEditButton = () => {
    //
    activateEditMode({
      title,
      id,
      isEditing: true,
    });
  };
  return (
    <Wrapper>
      <p className="list-title">{title}</p>
      <GrEdit className="list-icon" onClick={handleEditButton} />
      <AiOutlineDelete className="list-icon" onClick={() => removeItem(id)} />
    </Wrapper>
  );
}
const Wrapper = styled.li`
  display: flex;
  align-items: center;
  max-width: 300px;
  .list-title {
    margin-right: auto;
    margin-left: 5px;
  }
  .list-icon {
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
export default ListItem;
