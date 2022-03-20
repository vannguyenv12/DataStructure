class hashTable {
  constructor(size = 20) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIMARY = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIMARY + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyList = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyList.includes(this.keyMap[i][j][0])) {
            keyList.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keyList;
  }

  values() {
    const valueList = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueList.includes(this.keyMap[i][j][1])) {
            valueList.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valueList;
  }
}

const ht = new hashTable();
ht.set('color-white', '#fff');
ht.set('color-black', '#000');
ht.set('color-pink', 'pink');
ht.set('color-orange', 'orange');
ht.set('size', '41');
