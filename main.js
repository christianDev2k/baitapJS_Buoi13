// TOPIC 1
const daysNumber = document.querySelector('#daysNumber');
const salary = document.querySelector('#salary');
const topic1Result = document.querySelector('#topic-1__result');
var resultBtn = document.querySelector('#topic-1__btn');
var resetBtn = document.querySelector('#topic-1__resetBtn');

function getResults(day, salary) {
    return salary * day;
}

function setDefault() {
    daysNumber.value = '';
    salary.value = 100000;
    topic1Result.innerHTML = '_____đồng';
}

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setDefault();
})

resultBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!isNaN(daysNumber.value)) {
        var output = getResults(parseInt(daysNumber.value), parseInt(salary.value)).toLocaleString("vi-VN");
        topic1Result.innerHTML = output + ' đồng';
    }
    else {
        topic1Result.innerHTML = 'Nhập sai rồi bấy bề :D';
    }
});


