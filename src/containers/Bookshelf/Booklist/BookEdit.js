import React, { useState, useEffect } from "react";
import clsx from 'clsx';

const BookEdit = ({ OnUpdate, open, onClose, data, ...props }) => {

    const [newData, setNewData] = useState({});

    useEffect(() => {
        setNewData(data);
    }, [data])

    console.log('BookEdit', open, data, newData);

    return (
        <div className={clsx("absolute m-auto overflow-hidden animate-modal", open ? 'top-0 left-0 w-full h-full flex' : 'opacity-0')}>
            <div className="cursor-cross w-full h-full absolute top-0 left-0 backdrop-blur-sm" onClick={onClose}></div>
            <div className="absolute items-center w-3/6 h-3/6 p-2.5 bg-white border border-[#e9e9e9] rounded mt-12 mx-auto left-0 right-0 mr-12">
                <div className="flex p-1">
                    <div className="w-1/5"> Title : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Title' value={(newData && newData['Title']) || ''} onChange={e => setNewData({ ...newData, 'Title': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">ISBN : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='ISBN' value={(newData && newData['ISBN']) || ''} onChange={e => setNewData({ ...newData, 'ISBN': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Auther : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Auther' value={(newData && newData['Auther']) || ''} onChange={e => setNewData({ ...newData, 'Auther': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Issue Year : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Year' value={(newData && newData['Year']) || ''} onChange={e => setNewData({ ...newData, 'Year': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Image : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Image' value={(newData && newData['Image']) || ''} onChange={e => setNewData({ ...newData, 'Image': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Description : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Description' value={(newData && newData['Description']) || ''} onChange={e => setNewData({ ...newData, 'Description': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Category : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Category' value={(newData && newData['Category']) || ''} onChange={e => setNewData({ ...newData, 'Category': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Language : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Language' value={(newData && newData['Language']) || ''} onChange={e => setNewData({ ...newData, 'Language': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">Tags : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Tags' value={(newData && newData['Tags']) || ''} onChange={e => setNewData({ ...newData, 'Tags': e.target.value })} />
                    </div>
                </div>
                <div className="flex p-1">
                    <div className="w-1/5">File Link : </div>
                    <div className="flex-1">
                        <input type='text' className="w-full border-b-[1px] border-black" name='Link' value={(newData && newData['Link']) || ''} onChange={e => setNewData({ ...newData, 'Link': e.target.value })} />
                    </div>
                </div>
                <div className="flex py-2">
                    <button className="border rounded border-yellow-500 bg-yellow-500 hover:bg-yellow-300 py-2 px-4" onClick={() => OnUpdate(newData)}>Add Data</button>
                </div>
            </div>
        </div>
    )
}

export default BookEdit