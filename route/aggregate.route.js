const { ResponseTemplate, Code } = require('./common');
const { Student } = require("../database");
const { Class } = require("../database");

// count student
async function aggregateStudentData(req, res) {
    const routeResponse = ResponseTemplate();

    try {
        routeResponse.response = await Student.countDocuments()
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}

// count average age
async function aggregateStudentAverageAge(req, res) {
    const routeResponse = ResponseTemplate();
    try {
        routeResponse.response = await Student.aggregate([
            {
                $group: {
                    _id: null,
                    averageAge: { $avg: "$age" }
                }
            }
        ])
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}

// count class
async function aggregateClass(req, res) {
    const routeResponse = ResponseTemplate();

    try {
        routeResponse.response = await Class.countDocuments()
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}

module.exports = {
    aggregateStudentData,
    aggregateStudentAverageAge,
    aggregateClass
};