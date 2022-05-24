import { useEffect, useState } from "react";

const useTitle = (titleText) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = titleText + " Tools House Manufacturer ";
    setTitle(titleText);
  }, [titleText]);
  return [title];
};

export default useTitle;
