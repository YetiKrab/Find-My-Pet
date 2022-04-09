


CREATE TABLE posts (
  "_id" SERIAL PRIMARY KEY NOT NULL,
  "zipcode" varchar NOT NULL,
  "title" varchar (100),
  "content" varchar (500),
  "eventType" varchar,
  "contactInfo" varChar,
  "date" DATE;

)