import React from "react";
import Clock from "../timecomponents/clock";
import Board from "./boarder";

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="game">
                            <div className="game-board"> 
                                <Board />
                            </div>
                            <div className="game-info"> 
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Clock />
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;