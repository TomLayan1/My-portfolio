import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log('pathname', pathname)

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return null;
};

export default ScrollToTop;

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Ensure the scroll position resets to the top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
