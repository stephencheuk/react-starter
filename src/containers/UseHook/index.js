import { useState, useMemo } from "react";

import List from "./List";

const UseHook = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    // const getItems = useMemo(() => {
    //     console.log('calculating items');
    //     return [number, number + 1, number + 2]
    // }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    };

    const useMmemoList = useMemo(() => {
        return <List />;
    }, []);

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={(e => setNumber(parseInt(e.target.value)))}
            />
            <button onClick={e => setDark(v => !v)}>
                Toggle Theme
            </button>
            {useMmemoList}
        </div>
    )
}

export default UseHook;