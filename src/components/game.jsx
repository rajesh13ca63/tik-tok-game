import React from "react";
import Board from "./boarder";
import Header from "./header";

class Game extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div className="game">
                
                    <div className="game-board"> 
                        <Board />
                    </div>
                    <div className="game-info"> 
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;