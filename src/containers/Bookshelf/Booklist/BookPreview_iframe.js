import React, { useState, useEffect } from "react";

const BookPreview = ({ file, setClose, props }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        file && setOpen(true);
    }, [file]);

    return (
        <div>
            <div className={open ? 'BookPreview Open' : 'BookPreview'} onClick={e => setOpen(!open) && setClose()}>
                {open && <div>Close</div>}
                {
                    file && open && <iframe src={`${file}`} style={{ width: '100%', height: '100%' }} />
                }
            </div>
        </div>
    )
}

export default BookPreview;
