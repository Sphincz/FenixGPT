import { Routes, Route } from 'react-router-dom';
import Conversation from './conversation/Conversation';
import About from './About';
//import Navigation from './Navigation';
import { useEffect, useState } from 'react';
import { ActiveState } from './models/misc';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSourceDocs,
  setSelectedDocs,
} from './preferences/preferenceSlice';
import { Doc, getDocs } from './preferences/preferenceApi';

export default function App() {
  //TODO : below media query is disjoint from tailwind. Please wire it together.
  const [navState, setNavState] = useState<ActiveState>(
    window.matchMedia('(min-width: 768px)').matches ? 'ACTIVE' : 'INACTIVE',
  );

  const dispatch = useDispatch();
  useSelector(selectSourceDocs);
  useEffect(() => {
    async function requestDocs() {
      const data = await getDocs();
      //console.log(data);
      //dispatch(setSourceDocs(data));

      // Auto-select 'merged.pdf' if available
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const mergedDoc = data.find((doc: Doc) => doc.name === 'merged.pdf');
      if (mergedDoc) {
        dispatch(setSelectedDocs(mergedDoc));
      }
    }

    requestDocs();
  }, [dispatch]);

  return (
    <div className="min-h-full min-w-full">
      {/*HIDE NAVIGATION*/}
      {/*<Navigation navState={navState} setNavState={setNavState} />*/}
      <div
        // className={`transition-all duration-200 ${
        //   navState === 'ACTIVE' ? 'ml-0 md:ml-72 lg:ml-60' : 'ml-0 md:ml-16'
        // }`}

        // FIX CENTER CONVERSATION AFTER SIDE PANEL HIDING
        className={`transition-all duration-200 ${
          navState === 'ACTIVE' ? 'ml-0' : 'ml-0'
        }`}
      >
        <Routes>
          <Route path="/" element={<Conversation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
