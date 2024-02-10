import React, { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const SelectArrowIcon = ({ ...props }: Props) => {
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
				d="M20.8694 7.6201C20.7354 7.48926 20.5556 7.41602 20.3684 7.41602C20.1812 7.41602 20.0013 7.48926 19.8674 7.6201L12.3689 14.9296L4.8719 7.6201C4.73796 7.48926 4.55815 7.41602 4.37091 7.41602C4.18366 7.41602 4.00385 7.48926 3.86991 7.6201C3.80459 7.68369 3.75268 7.75972 3.71723 7.84371C3.68178 7.9277 3.66352 8.01793 3.66352 8.10909C3.66352 8.20026 3.68178 8.29049 3.71723 8.37448C3.75268 8.45847 3.80459 8.5345 3.86991 8.5981L11.8454 16.3711C11.9855 16.5076 12.1733 16.584 12.3689 16.584C12.5645 16.584 12.7523 16.5076 12.8924 16.3711L20.8679 8.5981C20.9332 8.5345 20.9851 8.45847 21.0206 8.37448C21.056 8.29049 21.0743 8.20026 21.0743 8.10909C21.0743 8.01793 21.056 7.9277 21.0206 7.84371C20.9851 7.75972 20.9332 7.68369 20.8679 7.6201H20.8694Z"
				fill="#DCDCDC"
			/>
		</svg>
	);
};

export default SelectArrowIcon;
