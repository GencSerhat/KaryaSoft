import styles from "./BodyBackground.module.css";

function BodyBackground() {
  return (
    <>
      {/* -- Epic Neural Background  */}
      <div className={styles.neuralBackground}></div>

      {/* Floating Geometric Shapes  */}
      <div className={styles.geometricShapes}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>

      {/* Neural Network Lines */}
      <div className={styles.neuralLines}>
        <div className={styles.neuralLines}></div>
        <div className={styles.neuralLines}></div>
        <div className={styles.neuralLines}></div>
      </div>
    </>
  );
};
export default BodyBackground;
