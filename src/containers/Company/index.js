//import React, { Fragment, useState, useEffect } from "react";

import axios from 'axios';
import authHeader from '../../config/auth-header';
import { mysql_api } from '../../config/api';

import MuiTable from '../../components/MuiTable';

import columns from './columns';

import { NotifyToast } from '../../components/Toast';

const Company = () => {

  return (
    <MuiTable
      title="Customer"
      columns={columns}
      data={
        (query) =>
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
                console.log("response", response.status);
                return response.data;
              })
              .then((result) => {
                console.log("response then", result);
                resolve({
                  data: result.data,
                  page: result.page - 1,
                  totalCount: result.total,
                });
              }).catch((err, res) => {
                //if(err.status == 401){
                //}
                NotifyToast(err.message);
              }).finally(()=>{
                resolve({
                  data: [],
                  page: 0,
                  totalCount: 0,
                });
              });
          })
      }
    />
  )
  // return <div>
  //   Company Here
  // </div>
}

export default Company;
