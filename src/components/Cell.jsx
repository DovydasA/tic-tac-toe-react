import {useState} from "react";

function Cell({children, ...props}) {
	const [clicked, setClicked] = useState(false);
	return (
		<button
			disabled={clicked}
			onClick={() => {
				setClicked(true);
				if (props.onClick) props.onClick();
			}}>
			{children}
		</button>
	);
}

export default Cell;
