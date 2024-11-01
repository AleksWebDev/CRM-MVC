import view from './form.view.js';
import model from './../model.js';
import testData  from './form.test-data.js';

window.addEventListener('DOMContentLoaded', function(){
    const randData = testData.getRandomUser();
    view.insertTestData(randData);
})

view.elements.form.addEventListener('submit', function(e){
    e.preventDefault();

    const data = view.getData(model.DB);
    model.addingRequestToDB(data);

    const randData = testData.getRandomUser();
    view.insertTestData(randData);
})