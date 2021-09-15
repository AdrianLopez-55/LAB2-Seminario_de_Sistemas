import React from 'react'

export const CardComponentOne = ({item, handlerClick}) => {
    return (
        <div 
        className={item.styles}
        key={item.id}
        onClick={() => {
            handlerClick(item);
        }}
        >
         {item.state === true ? (
             <div className="content">{item.frontend}</div>
         ) : (
             <div className="content">{item.backend}</div>
         )}
        </div>
    );
};
