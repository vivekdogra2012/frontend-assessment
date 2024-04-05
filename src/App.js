import React, {useState, useEffect} from 'react';
import { useInView } from "react-intersection-observer";
import Navigation from './components/Navigation';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import TopBanner from './components/TopBanner';
import MeetOurCommunity from './components/MeetOurCommunity';
import Location from './components/Location';
import './App.css';

function App() {

  // state to mentain current element visibility
  const [currentElem, setCurrentElem] = useState(1);
  
  // Refs for each section
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  // Set the current element based on visibility
  useEffect(() => {
    if (inView1) setCurrentElem(1);
    else if (inView2) setCurrentElem(2);
    else if (inView3) setCurrentElem(3);
  }, [inView1, inView2, inView3]);

  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <LeftSidebar visibleComponent={currentElem} />
        <RightSidebar />
        <div className="content">
          <div ref={ref1}>
            <TopBanner />
          </div>
          <div ref={ref2}>
            <MeetOurCommunity visibility={currentElem === 2 ? true : false} />
          </div>
          <div ref={ref3}>
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;