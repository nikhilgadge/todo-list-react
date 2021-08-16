import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const initialError = { isEditing: false, id: "" };
  const key = "list";

  const [list, setList] = useState(() => {
    const l = JSON.parse(localStorage.getItem(key));
    if (l?.length > 0) {
      return l;
    }
    return [];
  });

  const [title, setTitle] = useState("");
  const [editMode, setEditMode] = useState(initialError);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  const addToList = (title) => {
    if (title) {
      const id = new Date().getTime();
      const newList = [...list, { title, id }];
      setList(newList);
      setTitle("");
    }
  };
  const removeItem = (id) => {
    if (id) {
      const newList = list.filter((item) => id !== item.id);
      setList(newList);
    }
  };
  const activateEditMode = (editMode) => {
    setEditMode(editMode);
    setTitle(editMode.title);
  };

  const editItem = (item) => {
    let newList = [...list];
    newList = newList.map((i) => {
      if (item.id === i.id) {
        return item;
      }
      return i;
    });

    setList(newList);
    setTitle("");
    setEditMode(initialError);
  };
  return (
    <Wrapper>
      <h2 className="heading">TODO LIST APP</h2>
      <Form
        addToList={addToList}
        title={title}
        setTitle={setTitle}
        editMode={editMode}
        editItem={editItem}
      />
      {list.length > 0 ? (
        <List
          list={list}
          removeItem={removeItem}
          setEditMode={setEditMode}
          activateEditMode={activateEditMode}
        />
      ) : (
        <p className="empty-list-text">You don't have any todo</p>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 10px;
  .heading {
    text-align: center;
  }
  .empty-list-text {
    text-align: center;
  }
`;

export default App;
