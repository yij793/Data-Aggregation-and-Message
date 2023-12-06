function Code(index) {
    if (index === 400) {
        return 'Problem with request';
    } else if (index === 403) {
        return 'Not allowed access';
    } else if (index === 500) {
        return 'Internal Server Error';
    } else {
        return 'There was an error';
    }
}

function ResponseTemplate() {
    return {
        code: 200,
        message: '',
        response: null,
        errors: [],
    };
}

module.exports = {
    Code,
    ResponseTemplate
};