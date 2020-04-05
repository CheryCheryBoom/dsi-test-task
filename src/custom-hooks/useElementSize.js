import { useEffect, useState } from "react";

export default (elementsInRow, elementsInColumn) => {
  const calculateMargin = (numberOfElements, margin = 5) => margin * 2 * numberOfElements;
  const calculateSize = (sizeItem, numberOfElements) => Math.floor((sizeItem - calculateMargin(numberOfElements)) / numberOfElements);

  const [elementWidth, setWidth] = useState(calculateSize(window.innerWidth, elementsInRow));
  const [elementHeight, setHeight] = useState(calculateSize(window.innerHeight, elementsInColumn));

  useEffect(() => {

    function handleResize() {
      setWidth(calculateSize(window.innerWidth, elementsInRow));
      setHeight(calculateSize(window.innerHeight, elementsInColumn));
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)

  }, []);

  return { width: elementWidth, height: elementHeight };
}