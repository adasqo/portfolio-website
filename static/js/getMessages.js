const getMessages = () => {
    fetch('https://adamkarwowski-website.herokuapp.com/api/v1/getMessages', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(response => console.log(response));
}