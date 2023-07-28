import React, { ReactNode, useEffect, useRef, useState } from "react";

interface TextfitProps {
	mode?: "single" | "multi";
	forceSingleModeWidth?: boolean;
	min?: number;
	max?: number;
	throttle?: number;
	onReady?: () => void;
	children: ReactNode;
}

const Textfit: React.FC<TextfitProps> = ({
	mode = "multi",
	forceSingleModeWidth = true,
	min = 1,
	max = 100,
	throttle = 50,
	onReady,
	children,
}) => {
	const [fontSize, setFontSize] = useState(max);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fitText = () => {
			if (ref.current) {
				const parentWidth = ref.current.offsetWidth;
				const parentHeight = ref.current.offsetHeight;
				const textWidth = ref.current.scrollWidth;
				const textHeight = ref.current.scrollHeight;

				if (mode === "single" && forceSingleModeWidth) {
					const scaleFactor = parentWidth / textWidth;
					const newFontSize = Math.min(
						max,
						Math.max(min, fontSize * scaleFactor),
					);
					setFontSize(newFontSize);
				} else {
					const scaleFactorWidth = parentWidth / textWidth;
					const scaleFactorHeight = parentHeight / textHeight;
					const scaleFactor = Math.min(
						scaleFactorWidth,
						scaleFactorHeight,
					);
					const newFontSize = Math.min(
						max,
						Math.max(min, fontSize * scaleFactor),
					);
					setFontSize(newFontSize);
				}
			}
		};

		const handleResize = () => {
			if (throttle > 0) {
				clearTimeout((fitText as any).timeout);
				(fitText as any).timeout = setTimeout(fitText, throttle);
			} else {
				fitText();
			}
		};

		window.addEventListener("resize", handleResize);

		fitText();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [mode, forceSingleModeWidth, min, max, fontSize, throttle]);

	useEffect(() => {
		if (onReady) {
			onReady();
		}
	}, [onReady]);

	const style: React.CSSProperties = {
		fontSize: `${fontSize}px`,
	};

	return (
		<div ref={ref} style={style}>
			{children}
		</div>
	);
};

export default Textfit;
