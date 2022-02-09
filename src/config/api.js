const { REACT_APP_API_URL } = process.env;

const mysql_api = {
  url: `http://${REACT_APP_API_URL}/api`,
}

export {
  mysql_api
}
