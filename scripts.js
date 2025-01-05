const resultText = document.getElementById("result");
const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

const formationText = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
};

function isPalindrome(str) {
    const formattedStr = formationText(str);
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
}

function checkResult() {
    const textValue = inputText.value.trim();
    if (textValue === "") {
        alert("Please input a value");
        return;
    }
    const res = isPalindrome(textValue);
    if (res) {
        resultText.innerText = `${textValue} is a palindrome.`;
    } else {
        resultText.innerText = `${textValue} is not a palindrome.`;
    }
}

inputText.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkResult();
        inputText.value = ""
    }
});

checkButton.addEventListener("click", checkResult);
