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
        const output = getResults(daysNumber.value, salary.value).toLocaleString("vi-VN");
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
const inUSD = document.querySelector('#moneyUSD');
const constUSD = document.querySelector('#constUSD');
const topic3OutputBtn = document.querySelector('#topic-3__btn');
const topic3ResetBtn = document.querySelector('#topic-3__resetBtn');
const topic3ShowOutput = document.querySelector('#topic-3__result');

topic3ResetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    topic3ShowOutput.innerHTML = '____ VND';
    inUSD.value = '';
});

topic3OutputBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let currentUSD = constUSD.value;
    let valueUSD = inUSD.value;
    let result = valueUSD * currentUSD;

    if (isNaN(valueUSD)) {
        topic3ShowOutput.innerHTML = 'Nhập sai rồi bạn! Nhập lại nhá Ahihi :)))'
    }
    else {
        topic3ShowOutput.innerHTML = result.toLocaleString('vi-VN') + ' VND';
    }
})

// TOPIC 4 
const rectLength = document.querySelector('#rectLength');
const rectWidth = document.querySelector('#rectWidth');
const topic4ResultBtn = document.querySelector('#topic-4__btn');
const topic4ResetBtn = document.querySelector('#topic-4__resetBtn');
const showPeri = document.querySelector('#topic-4__peri');
const showArea = document.querySelector('#topic-4__area');
const showOutputTop4 = document.querySelector('#top4showOutput');

function resetForm4() {
    rectLength.value = '';
    rectWidth.value = '';
    showOutputTop4.innerHTML = `
    <div class="d-flex justify-content-between w-100 px-5">
        <div>
            <h3 class="fs-4 fw-normal text-center mb-0">Chu vi</h3>
            <div class="text-center fs-2">
                <span id="topic-4__peri">
                    <span>____ cm</span>
                </span>
            </div>
        </div>
        <div>
            <h3 class="fs-4 fw-normal text-center mb-0">Diện tích</h3>
            <div class="text-center fs-2">
                <span id="topic-4__area">
                    <span>____ cm</span>
                </span>
            </div>
        </div>
    </div>
    `;
}
resetForm4();

topic4ResetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    resetForm4();
})

topic4ResultBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let sRectLength = rectLength.value;
    let sRectWidth = rectWidth.value;

    if (isNaN(sRectLength) || isNaN(sRectWidth) || sRectLength === '' || sRectWidth === '') {
        showOutputTop4.innerHTML = `
            <h3>Nhập sai rồi babe ới :D</h3>
        `;
    }
    else {
        showOutputTop4.innerHTML = `
        <div class="d-flex justify-content-between w-100 px-5">
            <div>
                <h3 class="fs-4 fw-normal text-center mb-0">Chu vi</h3>
                <div class="text-center fs-2">
                    <span id="topic-4__peri">
                        <span>${(parseFloat(sRectLength) + parseFloat(sRectWidth))} cm</span>
                    </span>
                </div>
            </div>
            <div>
                <h3 class="fs-4 fw-normal text-center mb-0">Diện tích</h3>
                <div class="text-center fs-2">
                    <span id="topic-4__area">
                        <span>${sRectLength * sRectWidth} cm</span>
                    </span>
                </div>
            </div>
        </div>
        `;
    }
})

// TOPIC 5
const number = document.querySelector('#top5_number');
const top5ResultBtn = document.querySelector('#topic-5__btn');
const top5ResetBtn = document.querySelector('#topic-5__resetBtn');
const outputArea = document.querySelector('#topic-5__result');

function resetForm5() {
    number.value = '';
    outputArea.innerHTML = '____';
}

function checkNumber(num) {
    if (num > 9 && num < 100 && !isNaN(num) && num - Math.floor(num) === 0) {
        return true;
    }
    else {
        return false;
    }
}

top5ResetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    resetForm5();
})

top5ResultBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let num = number.value;
    console.log(num);
    if(checkNumber(num) === true) {
        outputArea.innerHTML = Math.floor(num / 10) + num % 10;     
    }
    else {
        outputArea.innerHTML = 'Nhập sai rồi bạn ơi!';
    }
})

