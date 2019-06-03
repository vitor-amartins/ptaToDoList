const httpGet = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            callback(request.responseText);
        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = () => {
        // There was a connection error of some sort
    };

    request.send();
}

const updateList = () => {
    httpGet('/items', (res) => {       
        const divTodoList = document.querySelector('#todo-list');
        divTodoList.innerHTML = '';
        const list = JSON.parse(res);
        
        Object.keys(list).reverse().forEach((key) => {
            const checkbox = list[key].checked ? '<img src="./../images/checked.svg" class="icon"/>' : '<img src="./../images/circle.svg" class="icon"/>';
            divTodoList.innerHTML += `
                <div class="item">
                    <div class="item-check-text">
                        <a href="/update/${key}">${checkbox}</a>
                        <strong>${list[key].item}</strong>
                    </div>
                    <a href="/delete/${key}"><img src="./../images/x-button.svg" class="delete icon"/></a>
                </div>
                <hr>
            `;
        });
    });
}

updateList();

setInterval(updateList, 500);