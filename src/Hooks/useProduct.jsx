import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://tools-manufactures.onrender.com/products/all`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.result);
        setLoading(true);
      });
  }, []);
  return [products, loading, setProducts];
};

export default useProduct;
