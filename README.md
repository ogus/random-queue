# Random Queue

A Queue data structure with fast element storage and randomized element access.

This can be useful when you need to queue a set of elements, but the retrieval order does not matter.


## Usage

```js
var storage = new RandomQueue();

storage.enqueue(1);
storage.enqueue(2);
storage.enqueue("bob");
storage.enqueue({x: 1, y: 2});

storage.isEmpty(); // false

storage.dequeue(); // could be 1, or "bob" ...

storage.size(); // 3
}
```


## API

### `new RandomQueue(size)`

Create a new queue, with *optionnal* initial size.

The queue will increase its size automatically if it is necessary.


### `RandomQueue.enqueue(element)`

Add a new element to the queue.

The element can be of any type: `Number`, `String`, `Object`, etc.

### `RandomQueue.dequeue()`

Query a random element and remove it from the queue

### `RandomQueue.peek()`

Query a random element from the queue

### `RandomQueue.size()`

Get the current size

### `RandomQueue.isEmpty()`

Check if the queue contains any element


## Installation

The module can be installed from `npm`

```sh
npm install poisson-disk
```

It can also be installed by cloning the repository & including the `random-queue.js` file in your project.


## License

This project is licensed under the WTFPL - see [LICENSE](LICENSE) for more details
