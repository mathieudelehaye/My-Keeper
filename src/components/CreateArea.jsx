import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [expanded, setExpended] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setNote((prevValue) => ({ ...prevValue, [name]: value }));
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        });
        setExpended(false); 
        event.preventDefault();        
    }

    function handleClick() {
        setExpended(true);
    }

    return (
        <div>
            <form className="create-note">
                { expanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />}
                <textarea onClick={handleClick} name="content" onChange={handleChange} placeholder="Take a note..." rows={ expanded ? 3 : 1 } value={note.content} />
                <Zoom in={ expanded ? true : false }>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
