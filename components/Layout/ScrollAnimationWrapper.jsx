import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kiểm tra kích thước màn hình để xác định thiết bị là di động hay không
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px là một ngưỡng phổ biến cho thiết kế responsive
    };

    // Gọi hàm khi component mount
    handleResize();

    // Thêm sự kiện resize để cập nhật trạng thái khi kích thước cửa sổ thay đổi
    window.addEventListener("resize", handleResize);

    // Dọn dẹp sự kiện khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render component mà không sử dụng animation nếu trên thiết bị di động
  if (isMobile) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  // Sử dụng motion.div với animation nếu không phải thiết bị di động
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
