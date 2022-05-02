import React, { Fragment, useState, useRef } from 'react'

//import MaterialTable, { MTableToolbar } from "@material-table/core";
import MaterialTable from "@material-table/core";
//https://material-table-core.com/demos/remote-data/basic

import { ExportCsv, ExportPdf } from '@material-table/exporters';

import tableIcons from './icons';
import tablelocalization from './localization';
import MyDialog from './dialog';

import {
  Paper,
  TextField,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
//import SaveIcon from "@material-ui/icons/Save";

import columns from "./demo/columns.js";
import demo_data from "./demo/data.js";
//import INPUT from "./demo/input.js";

const MuiTable = ({ ...props }) => {

  //  const [dataZ, setData] = useState(demo_data);
  const dataZ = demo_data;

  const [selData, setSelData] = useState({});

  //  const [dialogWord, setDialogWord] = useState('');
  // const [dialogWord] = useState('');
  //  const [dialogId, setDialogId] = useState('');
  // const [dialogId] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const actions = [
    {
      icon: () => <AddIcon />,
      tooltip: 'Add User',
      isFreeAction: true,
      onClick: (event, rowData) => {
        setIsDialogOpen(true);
      },
    },
  ];

  // Helper function
  //  const getNewDataBulkEdit = (changes, copyData) => {
  //    // key matches the column data id
  //    const keys = Object.keys(changes);
  //    for (let i = 0; i < keys.length; i++) {
  //      if (changes[keys[i]] && changes[keys[i]].newData) {
  //        // Find the data item with the same key in copyData[]
  //        let targetData = copyData.find((el) => el.id === keys[i]);
  //        if (targetData) {
  //          let newTargetDataIndex = copyData.indexOf(targetData);
  //          copyData[newTargetDataIndex] = changes[keys[i]].newData;
  //        }
  //      }
  //    }
  //    return copyData;
  //  }

  const handleDialogClose = event => {
    setIsDialogOpen(false);
  }

  //  const handleId = event => {
  //    setDialogId(event.target.value);
  //  }
  //
  //  const handleWord = event => {
  //    setDialogWord(event.target.value);
  //  }

  // const handleAddNewRow = event => {
  //   if (!dialogId || !dialogWord) return;
  //   // setData(
  //   //   // Here you can add the new row to whatever index you want
  //   //   [{ id: dialogId, word: dialogWord }, ...data]
  //   // );
  // }

  // useEffect(() => {
  //   // Closes dialog after saving
  //   if (isDialogOpen) {
  //     setIsDialogOpen(false);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   // Clears the inputs if `isDialogOpen` equals `false`
  //   if (!isDialogOpen) {
  //     setDialogId('');
  //     setDialogWord('');
  //   }
  // }, [isDialogOpen]);

  props.columns ||= columns;
  props.title ||= "No Table Name";
  props.icons ||= tableIcons;
  props.data ||= dataZ;
  props.localization ||= tablelocalization;
  props.actions ||= actions;
  props.columns ||= columns;
  props.columns ||= columns;

  let tableRef = useRef();

  return (
    <Fragment>
      <MaterialTable
        tableRef={tableRef}
        {...props}
        // actions={ actions }
        //  actions={[
        //    {
        //      icon: () => <SaveIcon />,
        //      tooltip: 'Save User',
        //      onClick: (event, rowData) => {
        //        const rowJson = JSON.stringify(rowData, null, 2);
        //        alert(`Do save operation : ${rowJson}`);
        //      }
        //    }
        //  ]}

        // components={{
        //   Toolbar: props => (
        //       <div style={{ backgroundColor: '#e8eaf5' }}>
        //           <MTableToolbar {...props} />
        //       </div>
        //   ),
        //   // Row: rowProps => <MTableBodyRow {...rowProps} onMouseEnter={eventHandler} />
        // }}

        options={{
          // Allow user to hide/show 
          // columns from Columns Button
          columnsButton: true,
          filtering: true,
          // have console error
          grouping: true,
          selection: true,
          thirdSortClick: false, // Allow unsorted state on third header click
          padding: "dense",
          exportMenu: [{
            label: 'Export PDF',
            exportFunc: (cols, datas) => ExportPdf(cols, datas, 'myPdfFileName')
          }, {
            label: 'Export CSV',
            exportFunc: (cols, datas) => ExportCsv(cols, datas, 'myCsvFileName')
          }],
          // headerStyle: {
          //   backgroundColor: "#01579b",
          //   color: "#FFF",
          // },
          // rowStyle: {
          //  backgroundColor: "#6ABAC9",
          // },
          // it also overwrote the .MuiTableRow-root.MuiTableRow-hover:hover background-color 
          // rowStyle: (rowData, idx) => ({
          //  backgroundColor: idx % 2 === 0 ? "#EEE" : "#FFF",
          // }),
        }}

      // onRowClick={(event, rowData) => {
      //   setSelData(rowData);
      //   setIsDialogOpen(true);
      // }}
      //        detailPanel={({rowData}) => {
      //          return (
      //            <div
      //              style={{
      //                fontSize: 20,
      //                textAlign: 'center',
      //                height: 100
      //              }}
      //            >
      //              This is a detailed panel for {rowData.name}
      //            </div>
      //          )
      //        }}

      // detailPanel={[
      //   {
      //     tooltip: 'Show Name',
      //     render: ({rowData}) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#43A047',
      //           }}
      //         >
      //           {rowData.name}
      //         </div>
      //       )
      //     },
      //   },
      //   {
      //     icon: 'account_circle',
      //     tooltip: 'Show Surname',
      //     render: ({rowData}) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#E53935',
      //           }}
      //         >
      //           {rowData.surname}
      //         </div>
      //       )
      //     },
      //   },
      //   {
      //     icon: 'favorite_border',
      //     openIcon: 'favorite',
      //     tooltip: 'Show Both',
      //     render: ({rowData}) => {
      //       return (
      //         <div
      //           style={{
      //             fontSize: 100,
      //             textAlign: 'center',
      //             color: 'white',
      //             backgroundColor: '#FDD835',
      //           }}
      //         >
      //           {rowData.name} {rowData.surname}
      //         </div>
      //       )
      //     },
      //   },
      // ]}

      // editable={{
      //   onBulkUpdate: (changes) => {
      //     return new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         let copyData = [...data];
      //         setData(getNewDataBulkEdit(changes, copyData));
      //         resolve();
      //       }, 1000);
      //     })
      //   },
      //   onRowAddCancelled: (rowData) => console.log("Row adding cancelled"),
      //   onRowUpdateCancelled: (rowData) => console.log("Row editing   cancelled"),
      //   onRowAdd: (newData) => {
      //     return new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         newData.id = "uuid-" + Math.random() * 10000000;
      //         setData([...data, newData]);
      //         resolve();
      //       }, 1000);
      //     });
      //   },
      //   onRowUpdate: (newData, oldData) => {
      //     return new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         const dataUpdate = [...data];
      //         // In dataUpdate, find target
      //         const target = dataUpdate.find((el) => el.id ===     oldData.tableData.id);
      //         const index = dataUpdate.indexOf(target);
      //         dataUpdate[index] = newData;
      //         setData([...dataUpdate]);
      //         resolve();
      //       }, 1000);
      //     });
      //   },
      //   onRowDelete: (oldData) => {
      //     return new Promise((resolve, reject) => {
      //       setTimeout(() => {
      //         const dataDelete = [...data];
      //         const target = dataDelete.find((el) => el.id ===     oldData.tableData.id);
      //         const index = dataDelete.indexOf(target);
      //         dataDelete.splice(index, 1);
      //         setData([...dataDelete]);
      //         resolve();
      //       }, 1000);
      //     });
      //   },
      // }}
      />
      <div>{JSON.stringify(props.columns)}</div>
      <MyDialog className="abc" title={`Add ${props.title}`} isOpen={isDialogOpen} onClose={handleDialogClose}>
        <Paper style={{ padding: '2em', width: '600px', boxSizing: 'border-box' }}>
          {
            props.columns.map((column, i) => {
              return (
                <div key={i}>
                  <TextField
                    style={{ width: '100%' }}
                    value={(selData && selData[column.field]) || ''}
                    onChange={e => setSelData({ ...selData, [column.field]: e.target.value })}
                    label={column.title}
                  />
                </div>
              )
            })
          }
          {JSON.stringify(selData)}
          <div style={{ marginTop: '3em' }}>
            <Button onClick={(e) => {
              console.log(selData);
              if (props.handler?.onPopupSave) {
                console.log('onPopupSave find, pass data', selData);
                props.handler?.onPopupSave(selData, { tableRef });
              }
              setSelData({});
              handleDialogClose();
            }
            }>Save</Button>
            <Button onClick={handleDialogClose}>Cancel</Button>
          </div>
        </Paper>
      </MyDialog>
    </Fragment >
  )
}

export default MuiTable
