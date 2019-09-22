var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API = 'https://rickandmortyapi.com/api/character/';
var xhttp = new XMLHttpRequest();

function fetchData(url_api) {
  return new Promise((resolve, reject) => {
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) {
        if (xhttp.status == 200)
          resolve(xhttp.responseText);
        else return reject(url_api);
      }
    };
    xhttp.open('GET', url_api, false);
    xhttp.send();})
};

const onError = (url_api) => console.log(`Sucedió un error en la url ${url_api}`);

fetchData(API)
.then(data1 => {
  let dataParse1 = JSON.parse(data1);
  console.log('Personajes:' + ' ' + dataParse1.info.count)
  return (fetchData(API + dataParse1.results[0].id))
})
.then(data2 => {
  let dataParse2 = JSON.parse(data2);
  console.log('Primer Personaje:' + ' ' + dataParse2.name)
  return (fetchData(API + dataParse2.results[0].id))
})
.then(data3 => {
  let dataParse3 = JSON.parse(data3);
  console.log('Dimensión:' + ' ' + dataParse3.origin.url.dimension)
  return (fetchData)
})
.catch(onError);



/*fetchData(API, function (error1, data1) {
  if (error1) return console.error('Error' + ' ' + error1);
  console.log('Primer Llamado...')
  let dataParse1 = JSON.parse(data1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error1);
    console.log('Segundo Llamado...')
    let dataParse2 = JSON.parse(data2);
    fetchData(data2.origin.url, function (error3, data3) {
      let dataParse3 = JSON.parse(data3);
      if (error3) return console.error(error3);
      console.log('Tercero Llamado...')
      console.log('Personajes:' + ' ' + dataParse1.info.count);
      console.log('Primer Personaje:' + ' ' + dataParse2.name);
      console.log('Dimensión:' + ' ' + dataParse3.dimension);
    });
  });
}); */ 