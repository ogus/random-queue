# Random Queue

 A simple Queue data structure with randomly-accessed elements

## Installation

Clone this repository and import `random-queue.js` or `random-queue.min.js` in your own project.

This module has no dependencies.

## Usage

### Create a new queue

```js
var storage = new RandomQueue();
```

### Add elements to the queue

 New element are added to the queue one by one :

```js
storage.enqueue(5);
```

Anything can be stored :

```js
var data = [1, 2, "bob", {a: 0, b: 1}];

for (var i = 0; i < data.length; i++) {
  storage.enqueue(data[i]); // store each element
}
```

### Get elements from the queue

Elements are returned in a random order :

```js
var surprise = storage.dequeue();
```

### Utility methods

You can query additionnal informations on the state of the queue :

```js
var storage = new RandomQueue();
storage.enqueue(0);

storage.isEmpty();  // return false
storage.length(); // return 1
```

## License

There is currently no license on this code
