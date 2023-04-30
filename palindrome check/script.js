'use strict';

const userInput = document.querySelector('#user-input');
const enterBtn = document.querySelector('#enter-btn');
const resultContainer = document.querySelector('#result-container');
const hyphen = document.querySelector('.hyphen');

//////////////////////////////////////////////////////////////////////////
let currInput, currResult, resultEl;

//comapres front to back and reverse of users input without special characters or spaces
const palindromeCheck = function (input) {
  input = input.toLowerCase();
  input = input.replace(/[^\w]|_/g, '');
  let reverseInput = input.split('').reverse().join('');
  return reverseInput === input;
};

//after user completes input
enterBtn.addEventListener('click', () => {
  currInput = userInput.value;
  userInput.value = '';
  //checks outcome and inserts result into html
  currResult = palindromeCheck(currInput)
    ? 'is a palindrome'
    : 'is not a palindrome';
  resultEl = `<p>"${currInput}"${hyphen.textContent} ${currResult}</p>`;
  resultContainer.insertAdjacentHTML('beforeend', resultEl);
});
