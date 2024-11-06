import styles from "./Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={`${styles.Skeleton}`}>
      <div className={`${styles.Skeleton__shimmer}`}></div>
    </div>
  );
};

export default Skeleton;
