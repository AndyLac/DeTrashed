
//Create a basic request object
function request(url, requestBody){

    if(!requestBody) {
        requestBody = {}
    }

    fetch(url, setUpHeaders(requestBody))
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}

//Helper method to set up the headers prior to request call
function setUpHeaders(requestBody){

    const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json'
    }

    return {
        headers,
        ...requestBody,
    }
}

function getRequest(url, requestBody){

    if(requestBody == null) {
        requestBody = {}
    }

    if(!requestBody.hasOwnProperty('method')) {
        requestBody.method = "GET"
    }

    request(url, requestBody)
}

// const POST = (url, requestBody) => {
//     if(!requestBody.hasOwnProperty('method')) {
//         requestBody.method = 'POST'
//     }
//
//     return request(url, requestBody)
// }

// const PUT = (url, requestBody) => {
//     if(!requestBody.hasOwnProperty('method')) {
//         requestBody.method = 'PUT'
//     }
//
//     return request(url, requestBody)
// }

// const DELETE = (requestBody) => {
//     if(!requestBody.hasOwnProperty('method')) {
//         requestBody.method = 'DELETE'
//     }
//
//     return request(url, requestBody)
// }

export  { getRequest }