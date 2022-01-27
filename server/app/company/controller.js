const db = require("../../ORM");
const { getDatabase } = require("../../database/db.js")

const Op = db.Sequelize.Op;

exports.all = async (req, res) => {

  const Company = db.company;

  const query = res.req.query;
  console.log('query', query);

  const page = ((query && query.page) || 1) * 1;
  const per_page = ((query && query.per_page) || 5) * 1;
  const offset = ((page - 1) * per_page) * 1;
  const sql_limit = `limit ${offset}, ${per_page}`;
  const orderBy = query && query.orderBy;
  const orderDirection = query && query.orderDirection;
  // http://192.168.2.83:8080/api/company/all?per_page=5&page=1&search=&orderDirection=
  let order = [];
  let sql_order = [];
  if(orderBy && orderDirection){
     order = [[orderBy, orderDirection]]
     sql_order.push(`${orderBy} ${orderDirection}`);
  }
  let where = {};
  let sql_where = [];
  let sql_param = [];
  let filter = res.req.query && res.req.query.filter;
  if(filter){

    if(!Array.isArray(filter)){
      filter = [filter];
    }

    filter.map((fs)=>{
      const f = fs.split('.', 3);
      if(f[1] === 'eq'){
        where[f[0]] = {
          [Op.eq]: f[2]
        };
        sql_where.push(`\`${f[0]}\`=?`);
        sql_param.push(decodeURIComponent(f[2]));
      }else if(f[1] === 'like'){
        where[f[0]] = {
          [Op.like]: f[2]
        };
        sql_where.push(`\`${f[0]}\` like ?`);
        sql_param.push("%"+decodeURIComponent(f[2])+"%");
      }
    });
  }

  const pool = await getDatabase();

  console.log(offset, per_page, order, filter);

  pool.getConnection(function(err, connection){

    //查詢目前所有
    const SQL = `select * from companies`;
    const SQLw = ` ${sql_where.length ? 'where ' + sql_where.join(' and ') : ''}`
               + ` ${sql_order.length ? 'order by ' + sql_order.join(',') : ''}`
    const SQLm = ` ${sql_limit}`;
    console.log('Company Controller SQL', SQL);
    connection.query(`${SQL} ${SQLw} ${SQLm}`, sql_param, function(err, rows, field){
      if (err) throw err;

      const rows_json = JSON.parse(JSON.stringify(rows));

      //查詢目前所有
      connection.query(`select count(*) as count from companies ${SQLw}`, sql_param, function(err, count, field){
        connection.release();

        if (err) throw err;

        // const count_json = JSON.parse(JSON.stringify(count));
        let cnt = 0;
        if(count && count[0]){
          cnt = count[0].count;
        }

        //將資料傳送到首頁的列表
        res.status(200).send({
          'status': 'ok',
          'total': cnt,
          page,
          per_page: 5,
          'total_pages': 1,
          'data': rows_json,
        });
      });
    });
  });

  // // mysqldb.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  // //   if (error) throw error;
  // //   console.log('The solution is: ', results[0].solution);
  // // });

  // Company.findAndCountAll({
  //   where,
  //   limit: per_page,
  //   offset,
  //   order,
  // })
  // .then(result => {
  //   const companies = result.rows;
  //   if (result.count === 0) {
  //     return res.status(200).send({
  //       'status': 'ok',
  //       'total': 0,
  //       page,
  //       per_page,
  //       'total_pages': 0,
  //       'data': [],
  //    });
  //   }else{
  //     console.log("length", companies[0].CompanyName, result.count);
  //     res.status(200).send({
  //       'status': 'ok',
  //       'total': result.count,
  //       page,
  //       per_page,
  //       'total_pages': 1,
  //       'data': companies,
  //     });
  //   }
  // })
  // .catch(err => {
  //   res.status(500).send({ message: err.message });
  // });
};
