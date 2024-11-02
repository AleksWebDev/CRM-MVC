import view from './table.view.js';
import model from './../model.js';

window.addEventListener('DOMContentLoaded', function(){
    const data = model.getRequest();
    view.renderRequest(data);
})

view.elements.topStatusBar.addEventListener('click', function(e){
    const target = e.target.dataset.value;
    const filter = model.changeFilter('status', target);
    const filteredRequest = model.filterRequests(filter);
    console.log(filteredRequest);
    view.renderRequest(filteredRequest);
})


view.elements.select.addEventListener('change', function(){
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequests(filter);
    view.renderRequest(filteredRequests);
})






