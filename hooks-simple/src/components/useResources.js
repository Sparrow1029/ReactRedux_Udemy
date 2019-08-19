import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // ***ORIGINAL CODE STRUCTURE

  // const fetchResource = async () => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource}`
  //   );
  //   setResources(response.data);
  // };
  // useEffect(() => {
  //   fetchResource(resource);
  // }, [resource]);


  // ***REFACTORED useEffect to be an immediately-invoked-function
  // to avoid "react-exhaustive-deps" for dependency error within
  // useEffect function
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;

// Notes
// useEffect with no 2nd arg    -> run every update
// useEffect with []            -> eq to componentDidMount
// useEffect with [dif values]  -> componentDidUpdate with check
