# Custom Filters

Let's create a custom filter in Vue.js

There are `6` steps in total.

1. add some properties to the `data` object: one to store the phones and another for the input search value:

``` js
var app = new Vue({
  el: '#app',
  data: {
    phones: [],
    search: ''
  }
})
```

Notice that the `search` property is initialized with empty `''` (this is because any string contains an empty character). :bowtie:

2. add an `input` box bound to the `search` property with the `v-model` directive:

``` html
<input type="text" v-model="search" placeholder="search phone">
```

3. in the `created` hook, initialize the `phones` arrays with some values:

``` js
 created() {
  this.phones = [
    { model: 'iPhone SE', price: 450.00, color: 'white' },
    { model: 'Samsung S9', price: 900.00, color: 'black' },
    { model: 'LG G7', price: 740.00, color: 'black' }
  ]
},
```

4. we can't just use a **Vue filter** for this, we must use a **computed property**:

``` js
computed: {
  filteredPhones() {
    return this.phones
      .filter(phone => phone.model.match(this.search));
  }
}
```

Let's see what happens here: 
- this `filteredPhones` property changes as the `phones` array changes;
- when the user inserts something in the `input` box, then this property returns a new list of phones with only those whose `model` attribute contains that value;
- the `match` function will check to see if the `model` attribute of the phone contains the search value.

5. create an unordered list `ul` to display the phones:

``` html
<ul>
  <li v-for="phone in filteredPhones">
    {{ phone.model }} costs ${{ phone.price}}
  </li>
</ul>
```

Notice that we bind to the `filteredPhones` computer property and not to the `phones` array.

Now, you can try it out.

6. you can see that this search box is not case insensitive. If you want it to be, then we need to add a **Regex expression**:

``` js {3, 5}
computed: {
  filteredPhones() {
    var search = new RegExp(this.search, 'i');
    return this.phones
      .filter(phone => phone.model.match(search));
  }
}
```

And now we have a custom filter in Vue.js :yum:

You can find the source code on [CodePen](https://codepen.io/danielsimi/pen/YLdPrd).
