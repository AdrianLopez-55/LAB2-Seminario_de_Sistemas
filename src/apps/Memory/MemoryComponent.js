import React, { useEffect, useState } from 'react';
import { CardComponentOne } from './CardComponentOne';
import { createBoard } from './createBoard';
import { Score } from './Score';

import "./styles.css";
let list = [];
let twice = [];
let scoreInit = 50;
let r = 5;
let s = 12.5;
export const MemoryComponent = () => {
    useEffect(() => {
       list = createBoard(12);
       setStateBoard(list);
    }, []);
    const [stateBoard, setStateBoard] = useState(list);
    const handlerClick = ({id}) => {
        if(twice.length == 2) {
            twice = [];
        }
        const item = stateBoard.find((item) => item.id === id);
        if(twice.length == 0) {
            twice = [...twice, item];
        } else if(twice.length == 1) {
            
            twice = [...twice, item];
            const [item1] = twice;
            if(item1.key !== item.key) {
               scoreInit = scoreInit - r;
                if(scoreInit == 0){
                    alert("GAME OVER");
                }
                console.log("are different");
                setTimeout(() => {
                    const newStateBoard = stateBoard.map((item) => {
                        if(item.done === false) {
                            item.state = false;
                            item.styles = "item";
                        }
                        return item;
                        
                    });
                   
                    setStateBoard(newStateBoard);
                }, 850);
            } else {
                const [item1, item2] = twice;
                const newStateBoard = stateBoard.map((item) => {
                    if(item.id === item1.id || item.id === item2.id) {
                        item.done = true;
                        scoreInit = scoreInit + s;
                    }
                    return item;
                });
                setStateBoard(newStateBoard);
            }
        }
        const newStateBoard = stateBoard.map((item) => {
            if(item.id === id){
                item.state = true;
                item.styles = "itemColor";
            }
            return item;
        });
        setStateBoard(newStateBoard);
    };
    return (
        <div>
            <h1>Memory App</h1>
            <hr />
            <div className="container">
              <Score />
            </div>
           
            <div className="container">
              score: {scoreInit}
            </div>
            
          

            <div className="container">
              {stateBoard.map((item) => (
              <CardComponentOne 
                key={item.id} 
                item={item} 
                handlerClick={handlerClick}/>
              ))}
            </div>
        </div>
    );
};


