import { useState, useEffect } from "react";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      let viewportWidth = window.visualViewport?.width;

      viewportWidth && setIsMobile(viewportWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useDevice;
