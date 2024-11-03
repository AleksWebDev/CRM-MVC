import view from './table.view.js';
import model from './../model.js';

window.addEventListener('DOMContentLoaded', function(){
    const data = model.getRequest();
    view.renderRequest(data);
    const newRequestNumber = model.countNewRequest()
    view.updateCountRequest(newRequestNumber);

    const filter = model.getFilter();
    view.updateFilter(filter);
})

view.elements.topStatusBar.addEventListener('click', function(e){
    const target = e.target.dataset.value;
    const filter = model.changeFilter('status', target);
    const filteredRequest = model.filterRequest(filter);
    view.renderRequest(filteredRequest);
    view.updateTopStatusBar(target);
})

view.elements.select.addEventListener('change', function(){
    const filter = model.changeFilter('products', this.value);
    const filteredRequests = model.filterRequest(filter);
    console.log(filteredRequests);
    view.renderRequest(filteredRequests);
})

view.elements.leftStatusLinks.forEach(link => {
    link.addEventListener('click', function(e){
        const target = e.target.dataset.value;
        const filter = model.changeFilter('status', target);
        const filteredRequest = model.filterRequest(filter);

        view.renderRequest(filteredRequest);
        view.updateTopStatusBar(target);
    })
})





