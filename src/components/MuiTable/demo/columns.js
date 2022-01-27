const columns = [
    { 
      title: 'Avatar', 
      field: 'imageUrl', 
      /** Custom column rendering **/
      render: rowData => {
        const stylesDiv = { height: 25 };
        const stylesImg = { width: 25, borderRadius: '50%' };
        return <div style={stylesDiv}><img src={rowData.imageUrl} style={stylesImg} alt=""/></div>
      },
      filtering: false,
      sorting: false,
      // cellStyle: {
      //   backgroundColor: "#039be5",
      //   color: "#FFF",
      // },
      // headerStyle: {
      //   backgroundColor: "#039be5",
      //   color: "#FFF",
      // },
    },
    {
      title: "Name",
      field: "name",
      // change data before export csv, but not work yet
      //exportTransformer: (rowData) => rowData.name.toLowerCase(),
      // filter data with customize component, but not work yet
      //filterComponent: (props) => <INPUT placeholder="Name" {...props} />,
    },
    { title: "Surname", field: "surname" },
    { title: "Birth Year",
      field: "birthYear",
      type: "numeric",
      lookup: {
        1995: "Y 1995",
        1994: "Y 1994",
      },
    },
  ];
export default columns;