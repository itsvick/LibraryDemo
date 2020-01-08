
export module Hierarchy {

  export class Node {
    children;
    identifier;
    constructor(identifier) {
      this.identifier = identifier;
      this.children = [];
    }

    add(identifier) {
      this.children.push(new Node(identifier));
    }

    remove(identifier) {
      this.children = this.children.filter(node => node.identifier !== identifier);
    }
  }

  export class Tree {
    root;
    constructor() {
      this.root = null;
    }

    traverseDF(fn) {
      let arr = [this.root];
      while (arr.length) {
        const node = arr.shift();
        arr.unshift(...node.children);
        fn(node);
      }
    }
  }
}