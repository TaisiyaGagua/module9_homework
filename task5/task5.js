const button = document.querySelector('.buttonSubmit');
const resultDiv = document.getElementById('result');

function resultView() {

    const pageNumb = document.getElementById('pageNumber').value;
    const limitNumb = document.getElementById('limit').value;

    if ((pageNumb < 1 || pageNumb > 10 || isNaN(pageNumb)) && (limitNumb < 1 || limitNumb > 10 || isNaN(limitNumb))) {
        document.getElementById("error").hidden = false;
        document.getElementById("errorNumber").hidden = true;
        document.getElementById("errorLimit").hidden = true;
        document.getElementById("result").style.visibility = "hidden";
    }
    else if (pageNumb < 1 || pageNumb > 10 || isNaN(pageNumb)) {
        document.getElementById("error").hidden = true;
        document.getElementById("errorNumber").hidden = false;
        document.getElementById("errorLimit").hidden = true;
        document.getElementById("result").style.visibility = "hidden";
    }
    else if (limitNumb < 1 || limitNumb > 10 || isNaN(limitNumb)) {
        document.getElementById("error").hidden = true;
        document.getElementById("errorNumber").hidden = true;
        document.getElementById("errorLimit").hidden = false;
        document.getElementById("result").style.visibility = "hidden";
    }
    else {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("error").hidden = true;
        document.getElementById("errorLimit").hidden = true;
        document.getElementById("errorNumber").hidden = true;

        const params = new URLSearchParams({
            page: pageNumb,
            limit: limitNumb
        })

        fetch(`https://picsum.photos/v2/list?${params}`)
            .then(response => {
                return response.json();
            })
            .then(images => {
                resultDiv.innerHTML = images
                    .map(image => `<img src="${image.download_url}">`)
                    .join('');
                LocalStorageImage();
            })
            .catch(() => console.log('error'));

        let getInput1 = document.getElementById('pageNumber');
        getInput1.value = "";
        let getInput2 = document.getElementById('limit');
        getInput2.value = "";
    }

    function LocalStorageImage() {
        localStorage.setItem("lastImage", resultDiv.innerHTML);
    }
}

function LocalStorageShow() {
    resultDiv.innerHTML = localStorage.getItem("lastImage");
    return;
}
LocalStorageShow();

button.addEventListener('click', resultView);

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
        resultView();
    }
}



