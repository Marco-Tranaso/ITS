/**
 * @author Marco Tranaso
 * @description Simulates a dishwasher process where dirty dishes are washed and placed in clean dishes stack.
 */
class Dishwasher {
    /**
     * Initializes the dishwasher with dirty dishes and an empty clean dishes stack.
     * Randomly generates the number of dirty dishes between 10 and 50.
     */
    constructor() {
      this.dirtyStack = [];
      this.cleanStack = [];
  
      const numDirtyDishes = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      for (let i = 0; i < numDirtyDishes; i++) {
        this.dirtyStack.push(`Dirty Plate ${i + 1}`);
      }
    }
  
    /**
     * Washes a single dish by removing it from the dirty stack and adding it to the clean stack.
     * The dish name is updated to reflect its clean status.
     * Logs the washing action.
     * @function washDish
     * @returns {void}
     */
    washDish() {
      if (this.dirtyStack.length > 0) {
        let dish = this.dirtyStack.pop();
        this.cleanStack.push(dish.replace('Dirty', 'Clean'));
        console.log(`Washing: ${dish}`);
      }
    }
  
    /**
     * Displays the current state of the dirty and clean dish stacks.
     * Logs both stacks to the console.
     * @function displayStacks
     * @returns {void}
     */
    displayStacks() {
      console.log("Dirty Dishes Stack:", this.dirtyStack);
      console.log("Clean Dishes Stack:", this.cleanStack);
    }
  
    /**
     * Runs the dishwasher simulation by repeatedly washing dishes with an interval.
     * The interval time is randomized between 500ms and 1500ms.
     * Stops when all dishes are clean.
     * @function runSimulation
     * @returns {void}
     */
    runSimulation() {
      const intervalId = setInterval(() => {
        if (this.dirtyStack.length > 0) {
          this.washDish();
          this.displayStacks();
        } else {
          console.log("All dishes are clean!");
          clearInterval(intervalId);
        }
      }, Math.floor(Math.random() * 1000) + 500);
    }
  }
  
  // Create a new Dishwasher instance and start the simulation
  const myDishwasher = new Dishwasher();
  myDishwasher.displayStacks();
  myDishwasher.runSimulation();
  