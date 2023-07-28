import React from "react";
import styles from "./Cubic.module.scss";

const Cubic = () => {
	return (
		<div className={styles["cubic"]}>
			<img
				className={styles["cubic-img"]}
				alt="pic"
				src="http://localhost:3001/1b.jpg"
			/>
		</div>
	);
};

export default Cubic;
