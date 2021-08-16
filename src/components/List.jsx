import React from "react";
import ListItem from "./ListItem";

function List({ list, removeItem, activateEditMode }) {
  return (
    <ol>
      {list &&
        list.map((item) => (
          <ListItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            activateEditMode={activateEditMode}
          />
        ))}
    </ol>
  );
}

export default List;
