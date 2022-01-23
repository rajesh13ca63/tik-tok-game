import React from "react";
import Board from "./boarder";
import Header from "./header";
import Footer from "./footer";

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
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Game;