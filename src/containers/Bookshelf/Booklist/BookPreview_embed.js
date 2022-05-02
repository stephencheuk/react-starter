import React, { useState, useEffect } from "react";

import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import axios from "axios";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import "./BookPreview_embed.css";

import CloseIcon from "@material-ui/icons/Close";

const BookPreview = ({ file, setClose, props }) => {

    const [open, setOpen] = useState(false);

    // const [numPages, setNumPages] = useState(null);

    const thumbnailPluginInstance = thumbnailPlugin();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // const { Thumbnails } = thumbnailPluginInstance;

    console.log('BookPreview', file);

    useEffect(() => {
        file && setOpen(true);
    }, [file]);

    return (
        <div>
            <div className={open ? 'BookPreview Open' : 'BookPreview'} >
                {open && file &&
                    (
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
                            <div
                                style={{
                                    border: "1px solid rgba(0, 0, 0, 0.3)",
                                    height: "100%",
                                    boxSizing: "border-box",
                                }}
                            >
                                <div className="BookPreview__CloseIcon" onClick={e => { setOpen(!open); setClose() }}><CloseIcon /></div>
                                <Viewer fileUrl={`${file}`} plugins={[defaultLayoutPluginInstance, thumbnailPluginInstance]} />
                            </div>
                        </Worker>
                    )

                }
            </div>
        </div>
    )
}

export default BookPreview;
