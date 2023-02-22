const booksInfoHelper = {

    getBooksInfo: (data) => {
      const items = data.items;
        try {
          const booksInfo = items?.map(function(item) {
          return {
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                publisher: item.volumeInfo.publisher,
                publishedDate: item.volumeInfo.publishedDate
              };

          });

          return booksInfo;

        } catch (error) {
          console.error(error);
        }
          
    }
};

module.exports = booksInfoHelper;
