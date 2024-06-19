export function fillTableWithEncryptedData(data, tbody) {
    tbody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.created_at}</td>
            <td>${row.name}</td>
            <td>${row.data}</td>
            <td>${row.iv}</td>
        `;
        tbody.appendChild(tr);
    });
}