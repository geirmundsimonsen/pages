export function fillTableWithEncryptedData(data, tbody) {
    console.log(data, tbody);
    tbody.innerHTML = '';
    data.forEach(row => {
        console.log(row);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.created_at}</td>
            <td>${row.name}</td>
            <td>${row.data}</td>
        `;
        tbody.appendChild(tr);
    });
}