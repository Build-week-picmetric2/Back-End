# This branch is not yet deployed: Please see readme for demoBranch for current endpoints.

Todo List:

Add support for deleting AWS S3 Objects from DELETE endpoint. (Currently only deletes record.)

Add tests for all endpoints

Write Axios requests to connect to DS endpoints

Possible Todo:

Add more data tables, fields and the ability to filter data sent to client using querys as DS provides more functionality.

// Optional perfomance optimization based on industry best practices. //

// NOTE: Does not improve functionality and adds more complications, ONLY ATTEMPT IF TIME //

Modify photo upload url to provide signed url for react to upload photo directly to S3.

Have react attach photo information to object metadata and send me only image key.

On image key reciept send request to AWS S3 for object metadata and add that to database.

// SUPER optional stretch goal if time allows. Maybe pipe dream:

Add GraphQL endpoints to optionally connect to.

// EXTRA SUPER optional stretch goal:

Work with react team to only use GraphQL and remove REST endpoints entirely.
