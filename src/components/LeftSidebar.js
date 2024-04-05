import React from 'react';

const LeftSidebar = ({visibleComponent}) => {
    
  return (
    <div className="left-sidebar sidebar">
        <ul>
            <li className={visibleComponent === 1 ? 'strike':'line'}>{visibleComponent === 1 ? '01':''}</li>
            <li className={visibleComponent === 2 ? 'strike':'line'}>{visibleComponent === 2 ? '02':''}</li>
            <li className={visibleComponent === 3 ? 'strike':'line'}>{visibleComponent === 3 ? '03':''}</li>
        </ul>
    </div>
  );
}

export default LeftSidebar;
