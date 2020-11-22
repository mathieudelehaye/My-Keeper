import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    const title = props.title != null ? (props.title.length < 15 ? props.title : props.title.substring(1, 16) + " ...") : "";
    const content = props.content != null ? (props.content.length < 150 ? props.content : props.content.substring(1, 151) + " ...") : "";

    return (
        <div className="note">
            <h1>
                {title}
            </h1>
            <p>
                {content}
            </p>
            <button onClick={() => { props.onDelete(props.id) }}>
                <DeleteIcon />
            </button>
        </div>
    )

}

export default Note