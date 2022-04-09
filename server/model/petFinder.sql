


CREATE TABLE posts (
  "_id" serial NOT NULL,
  "zipcode" varchar NOT NULL,
  "title" varchar (100),
  "content" varchar (500),
  "eventType" varchar,
  "date" datetime default CURRENT_TIMESTAMP;

)