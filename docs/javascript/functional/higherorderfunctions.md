# Higher Order Functions

We are going to learn about **Higher Order Functions** through an example:

... read more about these functions.

``` js
function print(message) {
  console.log(message);
}

function show(message) {
  alert(message);
}

function getPhoneAsString(phone) {
  return `${phone.model} ${phone.price}`;
}

function getExpensivePhones(phones) {
  return phones.filter(phone => phone.price > 500);
}

function displayExpensivePhones(phones, func){
  let expensivePhones = getExpensivePhones(phones);
  expensivePhones.forEach(phone => {
    let phoneAsString = getPhoneAsString(phone);
    func(phoneAsString);
  });
}

let phones = [
  { model: 'iPhone SE', price: 450.00, color: 'white' },
  { model: 'Samsung S9', price: 900.00, color: 'black' },
  { model: 'LG G7', price: 740.00, color: 'black' }
];

displayExpensivePhones(phones, print);
```
