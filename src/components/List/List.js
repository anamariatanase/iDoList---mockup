import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer';
import { Draggable, Droppable } from 'react-beautiful-dnd';
const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1),

    },
    cardContainer: {
        marginTop: theme.spacing(4)
    }
}));
export default function List({ list,index }) {
    const classes = useStyle();
    /* return (
        <Draggable draggableId={list._id} index={index}>{(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps}>
                <Paper className={classes.root} {...provided.dragHandleProps}>
                    <CssBaseline />
                    <Typography>
                        <Title title={list.title} listId={list._id} />
                        <Droppable droppableId={list._id}>
                            {(provided) => (<div ref={provided.innerRef}{...provided.droppableProps} className={classes.cardContainer}>
                                {list.cards.map((card, index) => (
                                    <Card key={card._id} card={card} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>)}
                        </Droppable>
                        <InputContainer listId={list._id} type="card" />
                    </Typography>
                </Paper>
            </div>
        )}

        </Draggable>

    ) */
    return (
        <Draggable draggableId={list.id} index={index}>{(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps}>
                <Paper className={classes.root} {...provided.dragHandleProps}>
                    <CssBaseline />
                    <Typography>
                        <Title title={list.title} listId={list.id} />
                        <Droppable droppableId={list.id}>
                            {(provided) => (<div ref={provided.innerRef}{...provided.droppableProps} className={classes.cardContainer}>
                                {list.cards.map((card, index) => (
                                    <Card key={card.id} card={card} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>)}
                        </Droppable>
                        <InputContainer listId={list.id} type="card" />
                    </Typography>
                </Paper>
            </div>
        )}

        </Draggable>

    )
}