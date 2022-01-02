import React from 'react';
import GridSquare from './GirdSquare';

export default function GridBoard(props) {
    /* generate grid */
    const gridWidth = 10;
    const gridHeight = 18;
    const grid = [];

    for (let row = 0; row < gridHeight; row++) {
        grid.push([]);
        for (let col = 0; col < gridWidth; col++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color = "1" />)
        }
    }

    return (
        <div className='grid-board'>
            {grid}
        </div>
    );
}