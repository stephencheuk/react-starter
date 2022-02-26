import React from "react";

import {
    Edit as EditIcon,
} from '@material-ui/icons';

import "./bookcard.css";

const Bookcard = ({ data, OpenPreview, OpenEdit, ...props }) => {

    return (
        <div className="Bookcard">
            <div className="Bookcard__Img" onClick={e => OpenPreview(data.filename)}>
                <img src={data.Image} />
                <div className="edge-blur"></div>
                <div className="Bookcard__Edit">
                    <button onClick={e => { console.log('edit icon clicked', data); OpenEdit(data); e.stopPropagation(); }}><EditIcon /></button>
                </div>
            </div>
            <div className="Bookcard__Title">{data.Title}</div>
            <div className="Bookcard__Tags">{data.Tags}</div>
        </div>
    );
}

export default Bookcard;
