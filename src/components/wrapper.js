import React, {  useState } from 'react';

import { v4 as uuid } from "uuid";
import List from '../components/List/List';
import store from '../utils/store'
import StoreApi from '../utils/storeAPI'
import InputContainer from '../components/Input/InputContainer';
import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: "100vh",
    width: '100%',
    overflowY: 'auto'
  }
}));

function Wrapper() {
  const [apiContent, setApiContent] = useState(store);

  const classes = useStyle();
  const addMoreCard = (content, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      content: content,
    };
    const list = apiContent.lists[listId];
    list.cards = [...list.cards, newCard];
    const newState = {
      ...apiContent,
      lists: {
        ...apiContent.lists,
        [listId]: list,
      }
    };
    setApiContent(newState)
  };
  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: []
    };
    const newState = {
      listIds: [...apiContent.listIds, newListId],
      lists: {
        ...apiContent.lists,
        [newListId]: newList
      }
    }
    setApiContent(newState);
  };
  const updateListTitle = (title, listId) => {
    const list = apiContent.lists[listId];
    list.title = title;

    const newState = {
      ...apiContent,
      lists: {
        ...apiContent.lists,
        [listId]: list
      }
    }
    setApiContent(newState);
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (type === "list") {
      const newListIds = apiContent.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId)
      return;
    }
    const sourceList = apiContent.lists[source.droppableId];
    const destinationList = apiContent.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...apiContent,
        lists: {
          ...apiContent.lists,
          [sourceList.id]: destinationList
        }
      };
      setApiContent(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...apiContent,
        lists: {
          ...apiContent.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList
        }
      }
      setApiContent(newState);
    }
  }

  /* const updateUserListsOnAPI = (body) => {
    const url = 'http://localhost:3001/api/update/' + apiContent._id;
    console.log(body);
    fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body)
    });
  }

  const addMoreCard = (content, listId) => {
    const newCard = createNewCard(content);
    const updatedList = updateListCardAndReturn(listId, newCard);
    const lists = apiContent.lists.map(list => list._id === listId ? updatedList : list);
    updateUserListsOnAPI({
      lists: lists
    });

    const newState = {
      ...apiContent,
      lists: lists
    };

    setApiContent(newState)
  };

  const createNewCard = (content) => {
    const newCardId = uuid();
    return {
      id: newCardId,
      content: content,
    };
  }


  const createNewList = (title) => {
    const newListId = uuid();
    return {
      id: newListId,
      title,
      cards: []
    }
  }

  const updateListCardAndReturn = (listId, newCard) => {
    const updatedListCard = apiContent.lists.find(list => list._id === listId);
    updatedListCard.cards = [...updatedListCard.cards, newCard];
    return updatedListCard;
  }


  const updateListAndReturn = (newList) => {
    let updatedList;
    if(apiContent.lists){
       updatedList = [...apiContent.lists, newList]

    }else{
       updatedList = [newList]
    }    return updatedList;
  }


  const addMoreList = (title) => {
    const newList = createNewList(title);
    const lists = updateListAndReturn(newList);

    updateUserListsOnAPI({
      lists: lists
    });

    const newState = {
      ...apiContent,
      lists: lists
    };
    setApiContent(newState);
  }
  const updateListTitle = (title, listId) => {
    const updatedList = updatedTitleAndReturn(title, listId);
    const lists = apiContent.lists.map(list => list._id === listId ? updatedList : list);
    updateUserListsOnAPI({
      lists: lists
    });
    const newState = {
      ...apiContent,
      lists: lists
    };

    setApiContent(newState)
  }
  const updatedTitleAndReturn = (newTitle, listId) => {
    const updatedList = apiContent.lists.find(list => list._id === listId);

    updatedList.title = newTitle;
    return updatedList;
  }


  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (type === "list") {
      let listIds = []
      apiContent.lists.map((list) => {
        listIds.push(list._id)
      })
      const newListIds = listIds;
      newListIds.splice(source.index, 1);
      console.log(newListIds)
      newListIds.splice(destination.index, 0, draggableId)
      console.log(newListIds)

      return;
    }
    const sourceList = apiContent.lists.find(list => list._id === source.droppableId);
    const destinationList = apiContent.lists.find(list => list._id === destination.droppableId);
    const draggingCard = sourceList.cards.filter((card) => card._id === draggableId)[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
        updateUserListsOnAPI({
         lists:
          [...apiContent.lists],
       }); 
      const newState = {
        ...apiContent,
        lists: {
          ...apiContent.lists,
          [sourceList._id]: destinationList
        }
      };
      console.log("new state1:", newState)
      setApiContent(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      //const lists = apiContent.lists.map(list => list._id === listId ? updatedList : list);

      const newState = {
        ...apiContent,
        lists: {
          ...apiContent.lists
        }
      }
      console.log("new state2:", newState)
      updateUserListsOnAPI({
        lists: 
          [...apiContent.lists]
  
      })
      setApiContent(newState);
    }
  } */

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">{(provided) => (
          <div className={classes.root} ref={provided.innerRef}{...provided.droppableProps}>
            {/* {
              apiContent.lists && apiContent.lists.map((list, index) => {
                return <List list={list} key={list._id} index={index} />
              })
            } */}
             {
               apiContent.listIds.map((listId, index) => {
                 const list = apiContent.lists[listId];
                return <List list={list} key={listId} index={index} />
              })
            } 
            <InputContainer type="list" />
            {provided.placeholder}
          </div>
        )}

        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default Wrapper;
