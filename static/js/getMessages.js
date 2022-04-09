const getMessages = () => {
    fetch('/api/v1/getMessages', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => console.log(response));
}