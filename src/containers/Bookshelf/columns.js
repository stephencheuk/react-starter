const columns = [
  {
    title: "#",
    field: "id",
    // change data before export csv, but not work yet
    //exportTransformer: (rowData) => rowData.name.toLowerCase(),
    // filter data with customize component, but not work yet
    //filterComponent: (props) => <INPUT placeholder="Name" {...props} />,
    width: "10px",
  },
  { 
      title: '商標', 
      field: 'logo', 
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
      width: "180px",
    },
    {
      title: "名稱",
      field: "name",
      // change data before export csv, but not work yet
      //exportTransformer: (rowData) => rowData.name.toLowerCase(),
      // filter data with customize component, but not work yet
      //filterComponent: (props) => <INPUT placeholder="Name" {...props} />,
      width: "40%",
    },
    {
      title: "公司名稱", 
      field: "CompanyName",
      width: "60%",
    },
    // { title: "Birth Year",
    //   field: "birthYear",
    //   type: "numeric",
    //   lookup: {
    //     1995: "Y 1995",
    //     1994: "Y 1994",
    //   },
    //   width: "20%",
    // },
  ];
export default columns;