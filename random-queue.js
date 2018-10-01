(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof module === 'object' && module.exports) {
      module.exports = factory();
  } else {
      root.RandomQueue = factory();
  }
}(this, function () {
  "use strict";

  var size = 0;
  var container = null;
  var lastIdx = 0;

  /**
   * Data structure is used for queued element storage and random element access
   * @constructor
   * @param {int} [size] The initial size of the queue
   */
  function RandomQueue(size) {
    if (!isNaN(parseInt(size))) {
      container = new Array(parseInt(size));
    }
    else {
      container = new Array();
    }
    lastIdx = 0;
  }

  RandomQueue.prototype = {
    /**
     * Get the current length of the queue
     * @return {int}
     */
    length: function () {
      return lastIdx
    },

    /**
     * Check if the queue contains any element
     * @return {boolean} True if the queue is empty, false otherwise
     */
    isEmpty: function () {
      return lastIdx == 0;
    },

    /**
     * Add a new element to the queue
     * @param {Object} e
     */
    enqueue: function (e) {
      container[lastIdx++] = e;
    },

    /**
     * Query a random element and delete it from the queue
     * @return {Object}
     */
    dequeue: function () {
      if(lastIdx == 0) {
        return null;
      }

      let idx = Math.floor(Math.random() * lastIdx);
      let t = container[idx];
      container[idx] = container[--lastIdx];

      return t;
    },

    /**
     * Look at a random element from the queue
     * @return {Object}
     */
    peek: function () {
      if(lastIdx == 0) {
        return null;
      }

      let idx = Math.floor(Math.random() * lastIdx);
      return container[idx];
    }
  };

  return RandomQueue;
}));
