const DB = JSON.parse(localStorage.getItem('request')) || [];

function addingRequestToDB(data){
    DB.push(data);
    updateLocalStorage();
}

function updateLocalStorage(){
    localStorage.setItem('request', JSON.stringify(DB));
}

export default {DB, addingRequestToDB};