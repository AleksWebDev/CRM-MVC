const elements = {
    form: document.getElementById('form'),
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    product: document.getElementById('product')
}

function getData(DB){

    const form = new FormData(elements.form);

    let id = 1;
    
    if(DB.length > 0){
        const lastItem = DB[DB.length - 1];
        id = lastItem.id + 1;
    }else{
        id = 1;
    }

    const date = new Date();

    const name = form.get('name');
    const phone = form.get('phone');
    const email = form.get('email');
    const course = form.get('product');


    const userData = {
        id: parseInt(id),
        name: name,
        phone: parseInt(phone),
        email: email,
        course: course,
        status: 'new',
        time: date.toISOString(),
    }

    return userData;

}


function insertTestData(data){
    elements.name.value = data.name;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.course;
}

export default {elements, getData, insertTestData};
