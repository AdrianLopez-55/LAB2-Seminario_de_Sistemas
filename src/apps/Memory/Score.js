
import React from 'react'

export const Score = ({scoreInit, r, s}) => {
    
    scoreInit = 50;
    r = 5;
    s = 12.5;
    const suma = ({id}) => {
        if (scoreInit==r){
            scoreInit=scoreInit+r
        }
    }
    return (
        <div>
           {suma}
        </div>
    )
};
