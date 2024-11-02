const elements = {
    form: document.getElementById('form'),
    number: document.getElementById('number'),
    id: document.getElementById('id'),
    date: document.querySelector('#date'),
    product: document.querySelector('#product'),
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    status: document.getElementById('status'),
}



function insetEditData(data){
    console.log(data);
    elements.number.innerText = data.id;
    elements.id.value = data.id;
    elements.date.innerText = `${data.dateDate} ${data.dateTime}`;
    elements.product.value = data.course;
    elements.name.value = data.name;
    elements.email.value = data.email;
    elements.phone.value = data.phone;
    elements.status.value = data.status;
}

function getFormData(){
    const data = {
        id: parseInt(elements.id.value),
        date: elements.date.innerText,
        course: elements.product.value,
        name: elements.name.value,
        email: elements.email.value,
        phone: elements.phone.value,
        status: elements.status.value,
    }

    return data;
}






export default {elements, insetEditData, getFormData};