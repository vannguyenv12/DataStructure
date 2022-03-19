class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      // [41, 39, 33, 18, 27, 12, 55]
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap.values);
