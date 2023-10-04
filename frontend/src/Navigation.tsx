import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedDocs,
  setSourceDocs,
  selectSourceDocs,
} from './preferences/preferenceSlice';
import { getDocs, Doc } from './preferences/preferenceApi';

const Navigation = () => {
  const dispatch = useDispatch();
  useSelector(selectSourceDocs);
  useEffect(() => {
    async function requestDocs() {
      const data = await getDocs();
      console.log(data);
      dispatch(setSourceDocs(data));

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

  return null; // No visual representation
};

export default Navigation;
