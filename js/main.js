const cep = document.getElementById('cep');
const btn = document.getElementById('btn-search');
const renderInfo = document.getElementById('info');

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const cepValue = cep.value;
  consultaCep(cepValue)
});

function consultaCep(cep) {
  const URL = `https://cep.awesomeapi.com.br/json/${cep}`
  const request = fetch(URL)

  request
    .then(data => data.json())
    .then(data => {
      const { city, address, district, state } = data;
      createSectionInfo(city, address, district, state);
    });
}
const { city, address, district, state } = data;

function createSectionInfo(city, address, district, state) {
  const tableInfo = `
    <table class="table">
      <thead>
        <tr>
          <th>RUA</th>
          <th>BAIRRO</th>
          <th>CIDADE</td>
          <th>ESTADO</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${address.toUpperCase()}</td>
          <td>${district.toUpperCase()}</td>
          <td>${city.toUpperCase()}</td>
          <td>${state.toUpperCase()}</td>
        </tr>
      </tbody>
    </table>`
  renderInfo.innerHTML = tableInfo;
}