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
				el.appendChild(svg["path"]("M32 5h-5v26h5c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#009E60",["d"]: "M32 5h-5v26h5c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h5V5H4z", {["fill"]: "#0072C6",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h5V5H4z",}));el.appendChild(svg["path"]("M9 5h18v26H9z", {["fill"]: "#FCD116",["d"]: "M9 5h18v26H9z",}));el.appendChild(svg["path"]("M15.833 23.526L18 27.859l2.167-4.333L18 19.193l-2.167 4.333zm-2.708-5.417l2.167 4.333 2.167-4.333-2.167-4.333-2.167 4.333zm5.417 0l2.167 4.333 2.167-4.333-2.167-4.333-2.167 4.333z", {["d"]: "M15.833 23.526L18 27.859l2.167-4.333L18 19.193l-2.167 4.333zm-2.708-5.417l2.167 4.333 2.167-4.333-2.167-4.333-2.167 4.333zm5.417 0l2.167 4.333 2.167-4.333-2.167-4.333-2.167 4.333z",["fill"]: "#009E60",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};