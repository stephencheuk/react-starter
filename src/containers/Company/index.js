//import React, { Fragment, useState, useEffect } from "react";

import axios from 'axios';
import authHeader from '../../config/auth-header';
import { mysql_api } from '../../config/api';

import MuiTable from '../../components/MuiTable';

import columns from './columns';

import { NotifyToast } from '../../components/Toast';

const DataQuery = (query) =>
  new Promise((resolve, reject) => {
    let url = `${mysql_api.url}/company/all?`;
    url += "per_page=" + query.pageSize;
    url += "&page=" + (query.page + 1);
    url += "&search=" + query.search;
    if (query.orderBy && query.orderBy.field) {
      url += "&orderBy=" + query.orderBy.field;
    }
    url += "&orderDirection=" + query.orderDirection;

    query.filters.forEach(o => {
      url += "&filter=" + o.column.field + '.like.' + o.value;
    });

    axios.get(url, { headers: authHeader() })
      .then((response) => {
        // console.log("response", response.status);
        return response.data;
      })
      .then((result) => {
        // console.log("response then", result);
        resolve({
          data: result.data,
          page: result.page - 1,
          totalCount: result.total,
        });
      }).catch((err, res) => {
        //if(err.status == 401){
        //}
        NotifyToast(err.message);
      }).finally(() => {
        resolve({
          data: [],
          page: 0,
          totalCount: 0,
        });
      });
  });

const DataSave = (data, { tableRef }) => {
  let method = 'POST' // Create
  let url = `${mysql_api.url}/company`;
  if (data?.id) {
    // Update
    method = 'PUT';
    url = `${mysql_api.url}/company/${data.id}`;
  }

  console.log('DataSave', method, url, data);

  axios({ method, url, data, headers: authHeader() })
    .then(function (response) {
      console.log(response.data.status);
      if (response.data.status === "ok") {
        NotifyToast("Data Saved");
        console.log('update table data');
        tableRef.current.onQueryChange();
      }
    })
    .catch(function (err) {
      // console.log(err)
      NotifyToast(err.message);
    })

  console.log(data)
}
const Company = () => {

  return (
    <MuiTable
      title="Customer"
      columns={columns}
      data={DataQuery}
      handler={{
        onPopupSave: DataSave
      }}
    />
  )
  // return <div>
  //   Company Here
  // </div>
}

export default Company;
