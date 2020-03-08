const task3Element = document.getElementById('task-3');

function one() {
  alert('Text one.');
}

function two(name) {
  alert(name);
}

one();
two('David');

task3Element.addEventListener('click', one);

function brandNew(str1, str2, str3) {
  return `${str1} ${str2} ${str3}.`;
}

alert(brandNew('David', 'is', 'number one'));
