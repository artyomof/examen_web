document.getElementById('loadButton').addEventListener('click', loadContent);
loadContent(){
const xhr = new XMLHttpRequest();
xhr.open('GET', 'content.html', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    document.getElementById('content-area').innerHTML = xhr.responseText;
  } else {
    console.error('Ошибка загрузки файла:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Ошибка запроса');
};
xhr.send();}
