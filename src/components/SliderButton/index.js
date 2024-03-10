import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './SliderButton.module.css';

const SliderButton = ({ onComplete, isCompleted }) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth - 100;
        setSliderWidth(containerWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDragEnd = async (event, info) => {
    if (info.point.x >= sliderWidth) {
      onComplete();
    } else {
      await controls.start({
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }
  };

  return (
    <div className={styles.sliderContainer} ref={containerRef}>
      {isCompleted ? (
        // Отображение затенённого слайдера с надписью при завершении
        <motion.div className={styles.completionOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
        >
          Отправлено!
        </motion.div>
      ) : (
        <motion.div className={styles.sliderBackground}>
          <motion.div className={styles.sliderButton}
                      drag="x"
                      dragConstraints={{ left: 0, right: sliderWidth }}
                      onDragEnd={handleDragEnd}
                      dragElastic={0.2}
                      animate={controls}
                      whileDrag={{ scale: 1.1 }}
          >
            Подтвердить
        </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SliderButton;



