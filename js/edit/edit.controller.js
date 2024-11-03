import model from './../model.js';
import view from './edit.view.js';

function init(){
    const id = getRequestId();
    const request = model.getRequestByID(id);
    view.insetEditData(request);
}

function getRequestId(){
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

view.elements.form.addEventListener('submit', function(e){
    e.preventDefault();
    const formData = view.getFormData();
    model.updateRequest(formData);
})

init();