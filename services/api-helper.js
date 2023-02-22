const axios = require('axios');

const restApiHelper = {

    getBooks: async (volumes) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${volumes}`
        try {
          const response = await axios.get(url);
          console.log(response);
          return response;
        } catch (error) {
          console.error(error);
        }
          
    }
};

module.exports = restApiHelper;
