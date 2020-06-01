const currencyElOne = document.getElementById('currency-one');
const amountElOne = document.getElementById('amount-one');

const currencyElTWo = document.getElementById('currency-two');
const amountElTWo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('button');

// fetch exchange rate and update dom 
function calculate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTWo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rate = data.rates[currencyTwo];

            rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

            amountElTWo.value = (amountElOne.value * rate).toFixed(2);
        });
}

// event listners 
currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTWo.addEventListener('change', calculate);
amountElTWo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTWo.value;
    currencyElTWo.value = temp;
    calculate();
})

calculate();