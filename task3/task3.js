function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

function displayResult(apiData) {
    let images = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
      `;
        images = images + cardBlock;
    });

    resultNode.innerHTML = images;
}

const btnNode = document.querySelector('.buttonSubmit');
const resultNode = document.querySelector('.container');

function resultView() {
    const value = +document.querySelector('input').value;

    if (value >= 1 && value <= 10) {
        let url = `https://picsum.photos/v2/list/?limit=${value}`;
        useRequest(url, displayResult);
        document.getElementById("error").hidden = true;
        document.getElementById("container").style.visibility = "visible";
    } else {
        document.getElementById("error").hidden = false;
        document.getElementById("container").style.visibility = "hidden";
    }

    let getInput = document.querySelector('input');
    getInput.value = "";
}

btnNode.addEventListener('click', resultView);

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
        resultView();
    }
}