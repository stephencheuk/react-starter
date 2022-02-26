import React, { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { dbstore, collection, addDoc, getDocs, doc, onSnapshot } from "../../../services/firebase";

import Bookcard from "./Bookcard";
import BookPreview from "./BookPreview";
import BookEdit from "./BookEdit";

import { IconButton } from '@material-ui/core';

import {
    Add as AddIcon,
} from '@material-ui/icons';

const Booklist = (props) => {

    const [rec, setRec] = useState([]);
    const [newData, setNewData] = useState({});
    const [Preview, setPreview] = useState('');
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    const onCollectionUpdate = (querySnapshot) => {
        const records = [];
        querySnapshot.forEach((doc) => {
            const { first, last, born } = doc.data();
            records.push({
                key: doc.id,
                first, // DocumentSnapshot
                last,
                born,
            });
        });
        setRec(records);
    };

    useEffect(() => {

        getData();

        // const starCountRef = ref(db, 'books');
        // const unsubscribe = onSnapshot(doc(dbstore, 'Books', ''), onCollectionUpdate);

        // console.log(starCountRef);

        // return () => {
        //   unsubscribe()
        // }
    }, []);

    const getData = async () => {
        const querySnapshot = await getDocs(collection(dbstore, "books"));

        const records = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            records.push({
                key: doc.id,
                ...data,
            });
        });
        setRec(records);
    }

    const UpdateData = async (data) => {
        console.log('addData', newData);
        let docRef;
        if (data.id) {
            const docRef = await addDoc(collection(dbstore, "books", data.id), {
                ...data
            });
        } else {
            const docRef = await addDoc(collection(dbstore, "books"), {
                ...data
            });
        }
        if (docRef.id) {
            setNewData({});
            getData();
        }
    }

    return (
        <div className="booklist">
            <div className="booklist__title">
                Booklist
                <IconButton aria-label="Add" onClick={e => { setEdit(true); setEditData({ 'Title': '' }) }}>
                    <AddIcon />
                </IconButton>
            </div>
            <div className="booklist__cards" style={{ display: 'flex' }}>
                {
                    rec.map((bookdata) => {
                        return (
                            <Bookcard
                                key={bookdata.id}
                                data={bookdata}
                                OpenPreview={link => setPreview(link)}
                                OpenEdit={data => { console.log('open edit set data', data); setEditData(data); setEdit(true) }}
                            />
                        );
                    })
                }
            </div>
            <BookPreview file={Preview} setClose={() => setPreview('')} />
            <BookEdit open={edit} data={editData} onChange={data => UpdateData(data)} onClose={() => setEdit(false)} />
            <button onClick={e => { setEdit(true); setEditData({ 'a': 'b' }) }}>set</button>
        </div>
    );
}

export default Booklist;
