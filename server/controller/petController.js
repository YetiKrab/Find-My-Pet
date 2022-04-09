const db = require('../model/petModel');

const petController = {};

// query the SQL database for the unique _id, zipcode, title, content, eventtype, contactinfo, and date for all posts with the zipcode the matches the zipcode passed in req.params
petController.getPosts = async (req, res, next) => {
  // NOTE THIS IS USING REQ.PARAMS -- FIGURE OUT WHAT ENDPOINT IS GOING TO BE USED
  const zipcode = [req.params.zipcode];
  const query = 'SELECT _id, zipcode, title, content, "eventtype", "contactinfo", date FROM posts WHERE posts.zipcode=$1';

  try {
    const result = await db.query(query, zipcode);
    //not sure what the result is going to look like yet? 
    //console.log('the result that is returned after query: ', result)
    res.locals.posts = result.rows; //rows should be an array of objects --> [{zipcode: zipcode1, title: title1, content: content1, eventType: eventtype1}, {zipcode: zipcode2, title: title2, content: content2, eventType: eventtype2}, ...etc]
    return next();
  } catch(err){
      console.log("error at petController.getPosts: ", err);
      return next({
        log: 'Error obtaining posts at petController.getPosts',
        message: {err: 'An error occurred'}
      });
  }
};

//query the SQL database and add a post with zipcode, title, content, eventtype, contact info, date with the passed in values from req.body
petController.addPost = async (req, res, next) => {
  //generates a new date at the time of the request query
  const now = new Date();
  // NOTE THIS IS USING REQ.BODY -- FIGURE OUT WHAT ENDPOINT IS GOING TO BE USED
  const {zipcode, title, content, eventType, contactInfo} = req.body;
  const toAdd = [zipcode, title, content, eventType, contactInfo, now];
  //to note: $1 will match with zipcode, $2 will match with title, etc.
  //this is done to scrub and sanitize our inputs and prevent injections into our SQL database --> called parameterized queries

  const query = 'INSERT INTO posts ("zipcode", title", "content", "eventtype", "contactinfo", "date") VALUES ($1 $2 $3 $4 $5 $6)';
  try{
    const result = await db.query(query, toAdd); //don't need to add anything in res.locals since simply adding a post to the database, no need to return anything to client
    //console.log('the result that is returned after query: ', result)
    return next();
  } catch(err){
      console.log('error at petController.addPost');
      return next({
        log: 'Error adding a post at petController.addPost',
        message: {err: 'An error occurred'}
      });
  };
};

petController.deletePost = async(req, res, next) => {
  //will delete a post by using the post's unique _id
  const { _id } = req.body;
  const query = 'DELETE FROM posts WHERE posts._id=$1';

  try{
    const result = db.query(query, [_id]);
    //console.log('the result that is returned after query: ', result)
    return next();
  } catch(err){
      console.log('error at petController.deletePost');
      return next({
        log: 'Error deleting a post at petController.deletePost',
        message: {err: 'An error occurred'}
      })
  }
  
}

module.exports = petController;