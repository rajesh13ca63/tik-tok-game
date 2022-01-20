import React from "react";
import Square from "./square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsnext: true,
       }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsnext ? 'X' : 'O';
        this.setState({
            squares : squares,
            xIsnext: !this.state.xIsnext,
        });
    }

    renderSquare(i) {
        return <Square value = {this.state.squares[i]}
        onClick = {()=> this.handleClick(i)} />;
    }

    clearBoardData() {
        console.log('Clear Board Data method called');
        this.setState({
            squares : [],
            xIsnext: true
        });
    }  

  
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner : '+ (winner);
        } else {
            status = 'Next Player:' + (this.state.xIsnext ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>

                <div className="clearbtn">
                    <button className="btn btn-warning btn-sm"
                    onClick={()=>this.clearBoardData()}
                    >Clear</button>
                </div>
            </div>
        )
    }
}

export default Board;

function calculateWinner(squares) {
    console.log('Inside calculateWinner method', squares);
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0; i<lines.length; i++) {
        const [a,b,c] = lines[i];
        console.log(a,b,c);
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
            console.log('If called');
            return squares[a];
        } 
    }

    return null;
}