// TOPIC 1
const daysNumber = document.querySelector('#daysNumber');
const topic1Result = document.querySelector('#topic-1__result');
const resultBtn = document.querySelector('#topic-1__btn');
const resetBtn = document.querySelector('#topic-1__resetBtn');
const salary = document.querySelector('#salary');

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
        const output = getResults(parseInt(daysNumber.value), parseInt(salary.value)).toLocaleString("vi-VN");
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
    let sum = 0;
    arr.forEach(function (item) {
        sum += parseFloat(item.value);
    });
    return (sum / 5).toFixed(2);
}

resetForm2.addEventListener('click', function (e) {
    e.preventDefault();
    numList.forEach(function (item) {
        item.value = '';
    })
    showOutput.innerHTML = '';
});

topic2Btn.addEventListener('click', function (e) {
    e.preventDefault();
    let isValid = true;
    numList.forEach(function (item) {
        if (item.value == '' || isNaN(item.value)) {
            isValid = false;
            showOutput.innerHTML = 'Nhập sai hoặc thiếu ô nào rồi đó bạn ơi! Vui lòng nhập lại đi nha :D';
        }
        if (isValid) {
            showOutput.innerHTML = Average(numList);
        }
    })
})

// TOPIC 3 
