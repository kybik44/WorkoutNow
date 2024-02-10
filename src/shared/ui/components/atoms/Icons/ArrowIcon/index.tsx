import React, { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const ArrowIcon = ({ ...props }: Props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M14.283 3.501L6.50998 11.475C6.37346 11.6151 6.29706 11.8029 6.29706 11.9985C6.29706 12.1941 6.37346 12.3819 6.50998 12.522L14.283 20.499C14.3466 20.5643 14.4226 20.6162 14.5066 20.6517C14.5906 20.6871 14.6808 20.7054 14.772 20.7054C14.8631 20.7054 14.9534 20.6871 15.0374 20.6517C15.1214 20.6162 15.1974 20.5643 15.261 20.499C15.3918 20.365 15.4651 20.1852 15.4651 19.998C15.4651 19.8107 15.3918 19.6309 15.261 19.497L7.95148 11.9985L15.261 4.5015C15.3914 4.36762 15.4643 4.18813 15.4643 4.00125C15.4643 3.81437 15.3914 3.63488 15.261 3.501C15.1974 3.43569 15.1214 3.38377 15.0374 3.34833C14.9534 3.31288 14.8631 3.29462 14.772 3.29462C14.6808 3.29462 14.5906 3.31288 14.5066 3.34833C14.4226 3.38377 14.3466 3.43569 14.283 3.501V3.501Z"
				fill="#ED36C4"
			/>
		</svg>
	);
};

export default ArrowIcon;
