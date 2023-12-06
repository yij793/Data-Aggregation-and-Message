# Data-Aggregation-and-Message
## Install
run `npm install`
you will also have to setup the mongoDB database, go to file `server.js` , change the url in mongoose.connect('mongodb://localhost:27017/local'. make sure the database is connected
## start
node version should greater than 15
run `npm start`
### Aggregation endpoint
get total number of student
```curl --location 'http://localhost:3000/get/aggregate/student'```

get total number of class
```curl --location 'http://localhost:3000/get/aggregate/class'```

get average age of student:
```curl --location 'http://localhost:3000/get/aggregate/ave_age'```

### GET,ADD,UPDATE,DELETE student
get all student
```curl --location 'http://localhost:3000/get/students'```

add a student
```
curl --location 'http://localhost:3000/post/student' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"abc7",
    "email": "abcs7@mail.com",
    "age": 30,
    "grade": 1,
    "classId": 2
}'
```

get user by id --- replace "6570a5f1803918828de311a8" by the existing id
``` curl --location --request GET 'http://localhost:3000/get/student?id=6570a5f1803918828de311a8' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"abcde",
    "age":200,
    "email": "abcdef@mail.com"
}'```

update a student --- replace "657005f54c81fc6d55418b9c" by the existing id
```curl --location --request PATCH 'http://localhost:3000/put/student' \
--header 'Content-Type: application/json' \
--data-raw '        {
            "id": "657005f54c81fc6d55418b9c",
            "email": "abcde@gmail.com",
            "name": "new"
        }'```

Delete a student --- replace "657005f54c81fc6d55418b9c" by the existing id
```curl --location --request DELETE 'http://localhost:3000/delete/student' \
--header 'Content-Type: application/json' \
--data '{
    "id": "657005f54c81fc6d55418b9c"
}'```

## Message service
for testing, run the socket.io client as testing purpose:
run 'node socket.io_client.js'
you should able to see the message in console

