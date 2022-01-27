import { useState } from 'react'

const INPUT = (props) => {
  const [data, setData] = useState('');

  console.log(props);

  return <input
    placeholder={props.placeholder}
    value={data}
    onChange={(e) => {
      setData(e.target.value);
      props.onFilterChanged(props.columnDef.tableData.id, e.target.value);
    }}
  />
};

export default INPUT;