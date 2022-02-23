import { useEffect, useState } from "react";
import { useScrollPosition } from "./useScrollPosition";

/**
 * `useLocalScrollFraction` takes a (`ref object`) as the passed argument.
 * And returns a fragment value telling how far you've scrolled The ref object.
 *
 * 0 meaning you havent reached the elemnts vertical spand and 1 meaning the entire element has passed the screen.
 *
 * @see https://github.com/Vitaliy-Steffensen
 */
export const useLocalScrollFraction = (componentRef) => {
  const [localScrollFraction, setLocalScrollFraction] = useState(0);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    const { offsetTop, offsetHeight } = componentRef.current;

    const fraction = () => {
      const maxView = scrollPosition + window.innerHeight;
      const elementStartAt = offsetTop;

      if (maxView < elementStartAt) return 0;

      const minView = scrollPosition;
      const elementEndsAt = offsetTop + offsetHeight;

      if (minView > elementEndsAt) return 1;

      const elementVisibilityReachBeginsAt =
        elementStartAt - window.innerHeight;

      return (
        (scrollPosition - elementVisibilityReachBeginsAt) /
        (elementEndsAt - elementVisibilityReachBeginsAt)
      );
    };

    setLocalScrollFraction(fraction);
  }, [scrollPosition]);

  return localScrollFraction;
};
