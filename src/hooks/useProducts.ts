import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../typings/products";

export type ProductsResponseProps = {
  products: Product[] | undefined;
  error: any;
  loading: boolean;
};

export const useProducts = (): ProductsResponseProps => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const getProductsData = async () => {
    setLoading(true);
    try {
      axios
        .get(`https://corebiz-test-server.onrender.com/api/v1/products`)
        .then((response) => {
          const products = response.data as Product[] | undefined;
          if (!products) return;
          setProducts(products);
        });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return {
    products,
    error,
    loading,
  };
};
