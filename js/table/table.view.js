const elements = {
    table: document.getElementById('tbody'),
	select: document.querySelector('#productSelect'),
	topStatusBar: document.querySelector('#topStatusBar'),
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

    /* elements.table.insertAdjacentHTML("beforeend", temp); */
}

export default {elements, renderRequest};