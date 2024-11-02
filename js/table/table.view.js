const elements = {
    table: document.getElementById('tbody'),
	select: document.querySelector('#productSelect'),
}


function renderRequest(item){

    console.log(item);

    const temp = `
        <tr>
			<th scope="row">${item.id}</th>
			<td>${item.time}</td>
			<td>${item.course}</td>
			<td>${item.name}</td>
			<td>${item.email}</td>
			<td>${item.phone}</td>
			<td>
				<div class="badge badge-pill badge-success">${item.status}</div>
			</td>
			<td>
				<a href="edit.html?id=${item.id}">Редактировать</a>
			</td>
		</tr>
    `

    elements.table.insertAdjacentHTML("beforeend", temp);
}

export default {elements, renderRequest};