var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error Occured "+error);
    alert("Something went wrong!!");
}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedContent = json.contents.translated;
        txtOutput.innerText = translatedContent;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);