/**
 * @param  index - the codes
 * @returns the error messages
 */

const { Student } = require("../database");
const { ResponseTemplate, Code } = require('./common');



/**
 * Get a user by username
 * @param  req - The HTTP request object
 * @param  res - The HTTP request object
 * @return  return user match the username
 */

async function GetStudentById(req, res) {
    const routeResponse = ResponseTemplate();
    const userId = req.query.id;
    try {
        routeResponse.response = await Student.findOne({ _id: userId });
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }

    return res.status(routeResponse.code).send(routeResponse);
}

async function GetStudents(req, res) {
    const routeResponse = ResponseTemplate();
    try {
        const { cursor } = req.query;

        const query = cursor
            ? { createdAt: { $lt: new Date(cursor) } }
            : {};

        routeResponse.response = await Student.find(query)

    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = Code(500);
    }

    return res.status(routeResponse.code).send(routeResponse);
}


async function AddStudent(req, res) {
    const routeResponse = ResponseTemplate();

    try {
        const student = new Student(req.body);
        routeResponse.response = await student.save()
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}

async function UpdateStudent(req, res) {
    const routeResponse = ResponseTemplate();
    try {
        const updates = req.body;
        const id = req.body.id;

        routeResponse.response = await Student.findByIdAndUpdate(id, updates, { new: true });
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}

async function DeleteStudent(req, res) {
    const routeResponse = ResponseTemplate();
    try {
        const userId = req.body.id;
        routeResponse.response = await Student.findByIdAndDelete(userId);
    } catch (error) {
        routeResponse.code = 500;
        routeResponse.message = error;
    }

    return res.status(routeResponse.code).send(routeResponse);
}


module.exports = {
    AddStudent,
    GetStudents,
    GetStudentById,
    UpdateStudent,
    DeleteStudent
};