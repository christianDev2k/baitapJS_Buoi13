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

// TOPIC 2
const showOutput = document.querySelector('#topic-2__result');
const topic2Btn = document.querySelector('#topic-2__btn');
const numList = document.querySelectorAll('.topic-2 .form-control')
const resetForm2 = document.querySelector('#topic-2__resetBtn');

function Average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i].value);
    }
    return (sum / 5).toFixed(4);
}

resetForm2.addEventListener('click', function (e) {
    e.preventDefault();
    for (i = 0; i < numList.length; i++) {
        numList[i].value = '';
        showOutput.innerHTML = '';
    }
});

topic2Btn.addEventListener('click', function (e) {
    e.preventDefault();
    showOutput.innerHTML = Average(numList);
    var issNaN = false;
    for (var i = 0; i < numList.length; i++) {
        if (isNaN(numList[i].value)) {
            issNaN = true;
            console.log(issNaN);
        }
    }
})



