const tableElement = document.querySelector('.table');
fetch(
    "https://pokeapi.co/api/v2/ability/?limit=20&offset=20", 
    // {
    //     method: 'POST',
    //     body: JSON.stringify(
    //         {
    //             todo: 'have a glass of water',
    //             time: '25th May, 2022, 11pm',
    //             id: 45
    //         }
    //     ),
    //     headers: new Headers({
    //         'Content-Type': 'application/json; charset=UTF-8'
    //     })
    // }
)
.then(response => {
    return response.json()
})
.then((data) => {
    const pokeData = data.results;
    let allTableData = '';
    pokeData.forEach((element, id) => {
        /* Create HTML element with response */
        // structure for each row
        const htmlStructure = `
        <div class="poke-data">
            <div class="id">${id}</div>
            <div class="name">${element.name}</div>
            <div class="url">
                <a href="${element.url}" target="_blank">URL</a>
            </div>
        </div>
        `;
        // Html data for all combined row
        allTableData = allTableData + htmlStructure
    });
    tableElement.innerHTML = allTableData;
})