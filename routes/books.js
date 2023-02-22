const express = require('express');

const restApiHelper = require('../services/api-helper.js');
const booksInfoHelper = require('../services/books-info-helper.js');
const errorHandler = require('../services/error-handler.js');

const router = express.Router();

router.get('/v1', async (req, res) => {
        const volumes = req.query.volumes;
        if(!volumes){
            res.status(400).json('Missing query parameter');
        }
        else{
            try{
            const data = await restApiHelper.getBooks(volumes);

            const booksInfo = booksInfoHelper.getBooksInfo(data);
            res.json(booksInfo);
         }
         catch(err){
            console.log(err);
            errorHandler.manageError(err, res);
         }
            
        }
    },
  );

module.exports = router;