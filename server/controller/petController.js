const db = require('../model/petModel');

const petController = {};


petController.getPosts = async (req, res, next) => {

  const zipcode = [req.params.zipcode];
  const postQuery = 'SELECT zipcode, title, content, "eventType", date FROM posts WHERE posts.zipcode=$1';

  try {
    const result = await db.query(postQuery, zipcode);
    //not sure what the result is going to look like yet? 
    res.locals.posts = result.rows; //rows should be an array of arrays --> [[zipcode1, title1, content1, eventtype1], [zipcode2, title2, content2, eventtype2], ...etc]
    return next();
  } catch(err){
    console.log("error at petController.getPosts: ", err);
    return next({
      log: 'Error obtaining posts at petController.getPosts',
      message: {err: 'An error occurred'}
    });
  }
};

petController.addPost = async (req, res, next) => {
  const {zipcode, title, content, eventType} = req.body;
  const toAdd = [zipcode, title, content, eventType];

  const postQuery = 'INSERT INTO posts ("zipcode", title", "content", "eventType") VALUES ($1 $2 $3 $4)';
  try{
    const result = await db.query(postQuery, toAdd);
    console.log(result);
    return next();
  } catch(err){
    console.log('error at petController.addPost');
    return next({
      log: 'Error adding a post at petController.addPost',
      message: {err: 'An error occurred'}
    });
  };
};

module.exports = petController;