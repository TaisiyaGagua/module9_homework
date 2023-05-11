const button = document.querySelector('.buttonSubmit');
const showResultDiv = document.querySelector(".result");

function resultView() {

    const width = document.getElementById('input1').value;
    const height = document.getElementById('input2').value;

    if (width < 100 || width > 300 || height < 100 || height > 300) {
        document.getElementById("error").hidden = false;
        document.getElementById("result").style.visibility = "hidden";
    }
    else if (isNaN(width) || isNaN(height)) {
        document.getElementById("error").hidden = true;
        document.getElementById("result").style.visibility = "hidden";
        alert("одно из значений не число");
        return;
    }
    else {
        document.getElementById("error").hidden = true;
        document.getElementById("result").style.visibility = "visible";
        fetch(`https://picsum.photos/${width}/${height}`)
            .then(response => showResultDiv.innerHTML = `<div class="result"><img src="${response.url}"/></div>`)
            .catch(() => console.log('error'));
    }

    let getInput1 = document.getElementById('input1');
    getInput1.value = "";
    let getInput2 = document.getElementById('input2');
    getInput2.value = "";
}

button.addEventListener('click', resultView);

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key === 13) {
        resultView();
    }
}