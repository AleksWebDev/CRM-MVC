const DB = JSON.parse(localStorage.getItem('request')) || [];

function addingRequestToDB(data){
    DB.push(data);
    updateLocalStorage();
}

function updateLocalStorage(){
    localStorage.setItem('request', JSON.stringify(DB));
}

function getRequestByID(id){

    const request = DB.find((item) => {return item.id == id })
    const date = new Date();

    const time = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    request.dateDate = new Date(request.time).toLocaleDateString();
    request.dateTime = `${time} : ${minutes} : ${seconds}`;

    return request;
}

function updateRequest(formData){

    const request = getRequestByID(formData.id);
    request.name = formData.name;
    request.email = formData.email;
    request.phone = formData.phone;
    request.course = formData.course;
    request.status = formData.status;
    updateLocalStorage();
    
}


const filter = {
    products: 'all',
    status: 'all',
}


function changeFilter(prop, value){
    filter[prop] = value;
    return filter;
}

function filterRequests(filter){
    let filteredRequests;

    // By product on requests
    if(filter.products == 'all'){
        filteredRequests = [...DB];
    }else{
        filteredRequests = DB.filter((el) => el.course === filter.products);
    }
    
    if(filter.status == 'all'){
        filteredRequests = [...DB];
    }else{
        filteredRequests = DB.filter((el) => el.status === filter.status);
    }

    return prepareRequests(filteredRequests);
}

function getRequest(){
    return prepareRequests(DB);
}


const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JS',
    'course-vue': 'Курс по Vue.js',
    'course-php': 'Курс по PhP',
    'course-wordpress': 'Курс по WordPress',
}

const statuses = {
    'new': 'новая',
    'inwork': 'в работе',
    'complete': 'завершенная',
}


function prepareRequests(DB){
    return DB.map((item) => {
        return {
            ...item, 
            time: new Date(item.time).toLocaleDateString(),
            courseName: products[item.course],
            statusName: statuses[item.status],
        }
    })
}


export default {DB, addingRequestToDB, getRequestByID, updateRequest, changeFilter, filterRequests, getRequest};