import { useEffect, useState } from "react";
import { useScrollPosition } from "./useScrollPosition";

/**
 * `useLocalScrollPosition` takes a (`ref object`) as the passed argument.
 * And returns a px value telling how far you've scrolled The ref object.
 *
 * 0 means you either have passed the component or it isnt in the view
 * Anything else than 0 is the amount of pixels you've scrolled the components visibility span.
 *
 * @see https://github.com/Vitaliy-Steffensen
 */
export const useLocalScrollPosition = (componentRef) => {
  const [localScrollPosition, setLocalScrollPosition] = useState(0);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const { offsetTop, offsetHeight } = componentRef.current;

    const fraction = () => {
      const maxView = scrollPosition + window.innerHeight;
      const elementStartAt = offsetTop;

      if (maxView < elementStartAt) return 0;

      const minView = scrollPosition;
      const elementEndsAt = offsetTop + offsetHeight;

      if (minView > elementEndsAt) return 0;

      const elementVisibilityReachBeginsAt =
        elementStartAt - window.innerHeight;

      return scrollPosition - elementVisibilityReachBeginsAt;
    };

    componentRef && setLocalScrollPosition(fraction);
    return (componentRef = null);
  }, [scrollPosition]);

  return localScrollPosition;
};
