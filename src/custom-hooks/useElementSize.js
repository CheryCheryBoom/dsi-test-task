import { useEffect, useState } from "react";

export default (elementsInRow, elementsInColumn) => {
  // Initial margin is 5 so that's how we calculate all margins between all videos
  const calculateMargin = (numberOfElements, margin = 5) => margin * 2 * numberOfElements;
  const calculateSize = (sizeItem, numberOfElements) => Math.floor((sizeItem - calculateMargin(numberOfElements)) / numberOfElements);

  //Set initial size for every video
  const [elementWidth, setWidth] = useState(calculateSize(window.innerWidth, elementsInRow));
  const [elementHeight, setHeight] = useState(calculateSize(window.innerHeight, elementsInColumn));

  useEffect(() => {
    //Change size of video on resize
    function handleResize() {
      setWidth(calculateSize(window.innerWidth, elementsInRow));
      setHeight(calculateSize(window.innerHeight, elementsInColumn));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)

  }, []);

  return { width: elementWidth, height: elementHeight };
}