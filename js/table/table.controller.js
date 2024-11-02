import view from './table.view.js';
import model from './../model.js';

window.addEventListener('DOMContentLoaded', function(){
    const data = model.DB;
    if(data.length > 0){
        data.forEach(item => {
            view.renderRequest(item);
        });
    }
})



view.elements.select.addEventListener('change', function(){
    const filter = model.changeFilter('products', this.value);

    const filteredRequests = model.filterRequests(filter);
})


/* function addEventListener(){
    view.elements.select.addEventListener('change', filterProducts);
} */

/* function filterProducts(){
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequests(filter);
    console.log(filteredRequests);
}

addEventListener(); */



