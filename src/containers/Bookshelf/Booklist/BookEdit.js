import React, { useState, useEffect } from "react";
import clsx from 'clsx';

const BookEdit = ({ UpdateData, open, onClose, data, ...props }) => {

    const [newData, setNewData] = useState({});

    useEffect(() => {
        setNewData(data);
    }, [data])

    console.log('BookEdit', open, data, newData);

    return (
        <div className={clsx("booklist__edit", open && 'Open')}>
            <div className="mask" onClick={onClose}></div>
            <div className="booklist__edit__row">
                <div>Title : <input type='text' name='Title' value={(newData && newData['Title']) || ''} onChange={e => setNewData({ ...newData, 'Title': e.target.value })} /></div>
                <div>ISBN : <input type='text' name='ISBN' value={(newData && newData['ISBN']) || ''} onChange={e => setNewData({ ...newData, 'ISBN': e.target.value })} /></div>
                <div>Auther : <input type='text' name='Auther' value={(newData && newData['Auther']) || ''} onChange={e => setNewData({ ...newData, 'Auther': e.target.value })} /></div>
                <div>Issue Year : <input type='text' name='Year' value={(newData && newData['Year']) || ''} onChange={e => setNewData({ ...newData, 'Year': e.target.value })} /></div>
                <div>Image : <input type='text' name='Image' value={(newData && newData['Image']) || ''} onChange={e => setNewData({ ...newData, 'Image': e.target.value })} /></div>
                <div>Description : <input type='text' name='Description' value={(newData && newData['Description']) || ''} onChange={e => setNewData({ ...newData, 'Description': e.target.value })} /></div>
                <div>Category : <input type='text' name='Category' value={(newData && newData['Category']) || ''} onChange={e => setNewData({ ...newData, 'Category': e.target.value })} /></div>
                <div>Language : <input type='text' name='Language' value={(newData && newData['Language']) || ''} onChange={e => setNewData({ ...newData, 'Language': e.target.value })} /></div>
                <div>Tags : <input type='text' name='Tags' value={(newData && newData['Tags']) || ''} onChange={e => setNewData({ ...newData, 'Tags': e.target.value })} /></div>
                <div>File Link : <input type='text' name='Link' value={(newData && newData['Link']) || ''} onChange={e => setNewData({ ...newData, 'Link': e.target.value })} /></div>
                <button onClick={() => UpdateData(newData)}>Add Data</button>
            </div>
        </div>
    )
}

export default BookEdit