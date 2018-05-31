/*
 * Imagine a (literal) stack of plates. If the stack gets too
 * high, it might topple. Therefore, in real life, we would
 * likely start a new stack when the previous stack exceeds
 * some threshold. Implement a data structure SetOfStacks that
 * mimics this. SetOfStacks should be composed of several stacks
 * and should create a new stack once the previous one exceeds
 * capacity. SetOfStacks.push() and SetOfStacks.pop() should
 * behave identfically to a single stack (that is, pop should
 * return the same value as it would if there were just a single
 * stack).
 *
 * FOLLOW UP
 * Implement a function popAt (int index) which performs a pop
 * operation on a specific substack.
*/

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [];
    this.curStack = 0;
  }

  pop() {
    const workingStack = this.stacks[this.curStack];
    const poppedVal = workingStack.pop();
    if (workingStack.length === 0) {
      this.curStack -= 1;
    }
    return poppedVal;
  }

  push(value) {
    this.stacks[this.curStack] = this.stacks[this.curStack] || [];
    let workingStack = this.stacks[this.curStack];
    if (workingStack.length === this.capacity) {
      this.curStack += 1;
      this.stacks[this.curStack] = [];
      workingStack = this.stacks[this.curStack];
    }
    workingStack.push(value);
  }

  popAt(index) {
    const workingStack = this.stacks[index];
    if (workingStack.length === 0) {
      return null;
    }
    if (index === this.curStack && workingStack.length === 1) {
      this.curStack -= 1;
    }
    return workingStack.pop();
  }
}


/*
 * Notes from solution:
 *
 * With the popAt, it's possible that you'll need to "roll-over"
 * the bottom item from the next stack to the top of the one you
 * just removed from, and so on down the stack chain. It depends
 * on if there's a need to know that all stacks at at capacity.
 * This is a good idea to discuss with your interviewer.
*/

