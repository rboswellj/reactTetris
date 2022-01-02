export const random = (min, max) => {
    return Math.floor(Math.random() * (max -min + 1 )) + min;
}

// Returns the default grid
export const gridDefault = () => {
    const rows = 18
    const cols = 10
    const array = []
  
    // Fill array with 18 arrays each containing
    // 10 zeros (0)

    for (let row = 0; row < rows; row++) {
        array.push([]);
        for (let col = 0; col < cols; col++) {
            array[row].push(0);
        }
    }

    return array
  }

  // Define block shapes and their rotations as arrays.
export const shapes = [
    // none
    [[[0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]]],
  
    // I
    [[[0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,1,0,0]]],
  
    // T
    [[[0,0,0,0],
      [1,1,1,0],
      [0,1,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [1,1,0,0],
      [0,1,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [1,1,1,0],
      [0,0,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [0,1,1,0],
      [0,1,0,0],
      [0,0,0,0]]],
  
    // L
    [[[0,0,0,0],
      [1,1,1,0],
      [1,0,0,0],
      [0,0,0,0]],
  
     [[1,1,0,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,0,0,0]],
  
     [[0,0,1,0],
      [1,1,1,0],
      [0,0,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [0,1,0,0],
      [0,1,1,0],
      [0,0,0,0]]],
  
    // J
    [[[1,0,0,0],
      [1,1,1,0],
      [0,0,0,0],
      [0,0,0,0]],
  
     [[0,1,1,0],
      [0,1,0,0],
      [0,1,0,0],
      [0,0,0,0]],
  
     [[0,0,0,0],
      [1,1,1,0],
      [0,0,1,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [0,1,0,0],
      [1,1,0,0],
      [0,0,0,0]]],
  
    // Z
    [[[0,0,0,0],
      [1,1,0,0],
      [0,1,1,0],
      [0,0,0,0]],
  
     [[0,0,1,0],
      [0,1,1,0],
      [0,1,0,0],
      [0,0,0,0]]],
  
    // S
    [[[0,0,0,0],
      [0,1,1,0],
      [1,1,0,0],
      [0,0,0,0]],
  
     [[0,1,0,0],
      [0,1,1,0],
      [0,0,1,0],
      [0,0,0,0]]],
  
    // O
    [[[0,1,1,0],
      [0,1,1,0],
      [0,0,0,0],
      [0,0,0,0]]]
  ];

  // Random Shape
export const randomShape = () => {
    return random(1, shapes.length - 1)
  }

export const defaultState = () => {
    return {
        // Create empty grid
        grid: gridDefault(),
        // New random shape
        shape: randomShape(),
        // set rotation to default
        rotation: 0,
        // set the 'x' position of the shape to 5 and y to -4, 
        // which puts the shape in the center of the grid, above the top
        x: 5,
        y: -4,
        // Set next shape to new random shape
        nextShape: randomShape(),
        // Tell game it is currently running
        isRunning: true,
        // Set score to 0
        score: 0,
        // default speed
        speed: 1000,
        // Not game over
        gameOver: false,

    }
}