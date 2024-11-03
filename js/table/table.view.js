const elements = {
    table: document.getElementById('tbody'),
	select: document.querySelector('#productSelect'),
	topStatusBar: document.querySelector('#topStatusBar'),
	leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
	leftPanelNav: document.querySelector('.left-panel__navigation'),
	badgeNew: document.querySelector('#badge-new'),
}

function renderRequest(data){

	elements.table.innerHTML = '';

	data.forEach(item => {
		elements.table.innerHTML += fillHTML(item);
	});
}

function fillHTML(item){

	const badges = {
		new: 'badge-danger',
		inwork: 'badge-warning',
		complete: 'badge-success'
	}

    return  `
        <tr>
			<th scope="row">${item.id}</th>
			<td>${item.time}</td>
			<td>${item.courseName}</td>
			<td>${item.name}</td>
			<td>${item.email}</td>
			<td>${item.phone}</td>
			<td>
				<div class="badge badge-pill ${badges[item.status]}">${item.statusName}</div>
			</td>
			<td>
				<a href="edit.html?id=${item.id}">Редактировать</a>
			</td>
		</tr>
    `
}

function updateTopStatusBar(value){
	//Top Status Bar
	elements.topStatusBar.querySelectorAll('a').forEach((link) => {link.classList.remove('active')});
	elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');

	//Left Status Bar
	elements.leftStatusLinks.forEach((link) => {link.classList.remove('active')});
	elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');

}

function updateCountRequest(num){
	elements.badgeNew.innerText = num;
}

export default {elements, renderRequest, updateTopStatusBar, updateCountRequest};