
const getMessages = () => {
  fetch('http://localhost:8000/api/v1/getMessages', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => console.log(response));
}
