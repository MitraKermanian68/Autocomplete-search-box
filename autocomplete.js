let availableKeywords = [
  "JavaScript",
  "Web Developement",
  "Python",
  "C++",
  "Java",
  "How to creat a website",
  "How to build a game",
  "How to build an app",
  "How to build a website",
  "Where to learn coding online",
  "What is coding",
];

const inputBox = document.getElementById("input_box");
const resultBox = document.querySelector(".result_box");

inputBox.onkeyup = function () {
  let userData = inputBox.value;
  let emptyArray = [];
  if (userData.length) {
    emptyArray = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(userData.toLowerCase());
    });
  }

  display(emptyArray);

  if (emptyArray.length === 0) {
    resultBox.innerHTML = "";
  }
};

function display(emptyArray) {
  const content = emptyArray.map((list) => {
    return `<li onclick=selectInput(this)>${list}</li>`;
  });
  resultBox.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(e) {
  inputBox.value = e.textContent;
  resultBox.innerHTML = "";
}
