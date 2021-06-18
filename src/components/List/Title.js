import { InputBase, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import storeAPI from '../../utils/storeAPI';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    input: {
        margin:theme.spacing(1),
        '&:focus':{
            background:"#ddd",
            fontWeight: "bold"
        }
        
    }
}));

export default function Title({title,listId}) {
    const [open, setOpen] = useState(false);
    const [newTitle,setNewTitle] = useState(title);
    const {updateListTitle} = useContext(storeAPI)
    const classes = useStyle();
    const handleOnChange = (e) =>{
        setNewTitle(e.target.value);
    }
    const handleOnBlur = () => {
        setOpen(false);
        updateListTitle(newTitle,listId);
    }
    return (
        <div>
            {open ?
                (<div >
                    <InputBase onChange={handleOnChange} autoFocus value={newTitle}  inputProps={{
                        className: classes.input,
                    }} fullWidth onBlur={handleOnBlur}/>
                </div>
                ) : (
                    < div className={classes.editableTitleContainer}>
                        <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>
                            {title}
            </Typography>
                        <MoreHorizIcon />
                    </div>
                )}
        </div >
    )
}
