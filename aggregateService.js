const app = require('./app')
const { aggregateStudentData, aggregateStudentAverageAge, aggregateClass } = require('./route/aggregate.route');


app.get('/get/aggregate/student', aggregateStudentData);
app.get('/get/aggregate/ave_age', aggregateStudentAverageAge);
app.get('/get/aggregate/class', aggregateClass)
