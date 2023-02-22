const pkg = require('lodash');
const { has } = pkg;

const errorHandler = {

  throw404IfEmpty: (data) => {
    if (data.length === 0) {
      throw Error('404');
    }
  },


  throw404IfUndefined: (data) => {
    if (!data) {
      throw Error('404');
    }
  },


  manageError: (err, res)=> {
    if (err.response && err.response.status) {
      if (err.response.status === 403 || err.response.status === 401) {
        res.status(500);
      } else {
        res.status(parseInt(err.response.status, 10));
      }
    } else if (err.message === '404') {
      res.status(404);
    } else {
      res.status(500);
    }
    if (has(err, 'response.data.errors[0]')) {
      res.json(err.response.data.errors[0]);
    } else {
      res.end();
    }
  },


  handleAxiosError: (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        throw Error('403');
      } else if (err.response.status === 404) {
        throw Error('404');
      }
    } else {
      throw Error(err.request.status.toString());
    }
  },
};

module.exports = errorHandler;
