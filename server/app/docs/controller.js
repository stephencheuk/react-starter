
exports.all = (req, res) => {

  const routepath = req.app._router.stack.filter(o=>o.name === 'bound dispatch').map(o=>{
    return (new Array(o.route.stack[0].method, o.route.path)).join(":")
  }).join("<br/>");

  res.status(200).send(
    `<font size='20'>${routepath}</font>`
  );

//   req.app._router.stack.forEach(function(r) {
//     if (r.route && r.route.path) {
//        console.log(r.route.path)
//     }
//  })
//       res.status(200).send({
//         'total': 4,
//         'page': 1,
//         'per_page': 5,
//         'total_pages': 1,
//         'data': [
//           {
//             name: "Stephen", surname: "Cheuk", birthYear: 1978, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
//           }, {
//             name: "Tiffany", surname: "Tsang", birthYear: 1979, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
//           }, {
//             name: "Marco", surname: "Cheuk", birthYear: 2013, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
//           }, {
//             name: "Programmer", surname: "Worker", birthYear: 1995, imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
//           },
//         ]
//       });

};
