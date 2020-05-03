import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M1.148 6.196C.438 6.918 0 7.908 0 9v18c0 2.209 1.791 4 4 4h20.99L1.149 6.195l-.001.001zM32 5H11.01l23.841 24.805C35.562 29.083 36 28.093 36 27V9c0-2.209-1.791-4-4-4z", {["fill"]: "#CE1126",["d"]: "M1.148 6.196C.438 6.918 0 7.908 0 9v18c0 2.209 1.791 4 4 4h20.99L1.149 6.195l-.001.001zM32 5H11.01l23.841 24.805C35.562 29.083 36 28.093 36 27V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M2.23 5.412c-.404.2-.769.465-1.081.783L24.99 31h1.835L2.23 5.412zM11.01 5H9.175l24.594 25.588c.404-.2.77-.465 1.082-.783L11.01 5z", {["fill"]: "#EEE",["d"]: "M2.23 5.412c-.404.2-.769.465-1.081.783L24.99 31h1.835L2.23 5.412zM11.01 5H9.175l24.594 25.588c.404-.2.77-.465 1.082-.783L11.01 5z",}));el.appendChild(svg["path"]("M4 5c-.635 0-1.236.148-1.769.412L26.825 31H32c.635 0 1.235-.148 1.768-.411l.002-.001L9.175 5H4z", {["fill"]: "#141414",["d"]: "M4 5c-.635 0-1.236.148-1.769.412L26.825 31H32c.635 0 1.235-.148 1.768-.411l.002-.001L9.175 5H4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};