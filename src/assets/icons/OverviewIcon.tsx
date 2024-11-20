import React from "react";
import "./icon.css";

type OverviewIconProps = {
	width: string;
	height: string;
	styles?: string;
};

const OverviewIcon = ({ width, height, styles }: OverviewIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		width={width}
		height={height}
		className={styles}
	>
		<path
			fill="currentColor"
			d="M17.083 13.958h-1.875v-1.875a.63.63 0 0 0-.625-.625.63.63 0 0 0-.625.625v1.875h-1.875a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h1.875v1.875a.63.63 0 0 0 .625.625.63.63 0 0 0 .625-.625v-1.875h1.875a.63.63 0 0 0 .625-.625.63.63 0 0 0-.625-.625M18.333 7.1V3.317c0-1.175-.533-1.65-1.858-1.65h-3.367c-1.325 0-1.858.475-1.858 1.65v3.775c0 1.183.533 1.65 1.858 1.65h3.367c1.325.008 1.858-.467 1.858-1.642M8.75 7.1V3.317c0-1.175-.533-1.65-1.858-1.65H3.525c-1.325 0-1.858.475-1.858 1.65v3.775c0 1.183.533 1.65 1.858 1.65h3.367C8.217 8.75 8.75 8.275 8.75 7.1M8.75 16.475v-3.367c0-1.325-.533-1.858-1.858-1.858H3.525c-1.325 0-1.858.533-1.858 1.858v3.367c0 1.325.533 1.858 1.858 1.858h3.367c1.325 0 1.858-.533 1.858-1.858"
		></path>
	</svg>
);

export default OverviewIcon;
