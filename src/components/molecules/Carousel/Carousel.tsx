import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { Product } from "../../../typings/products";
import ProductCard from "../../atoms/ProductCard";

interface CarouselProps {
  products: Product[];
}

const Carousel = ({ products }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 4);
    };
    window.addEventListener("resize", updateItemsPerSlide);
    updateItemsPerSlide();
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - itemsPerSlide
        : prevIndex - itemsPerSlide
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= products.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );

  return (
    <div className={styles.Carousel}>
      <div className={styles.Carousel__container}>
        {visibleProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
      <button className={styles.Carousel__prevBtn} onClick={handlePrev}>
        {`<`}
      </button>
      <button className={styles.Carousel__nextBtn} onClick={handleNext}>
        {`>`}
      </button>
    </div>
  );
};

export default Carousel;
