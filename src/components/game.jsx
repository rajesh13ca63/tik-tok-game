import React from "react";
import Board from "./boarder";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board"> 
                    <Board />
                </div>
                <div className="game-info"> 
                
                </div>
            </div>
        )
    }
}

export default Game;