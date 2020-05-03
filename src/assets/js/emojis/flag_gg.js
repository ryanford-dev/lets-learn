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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EEE",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M21 31h-6V21H0v-6h15V5h6v10h15v6H21z", {["fill"]: "#E8112D",["d"]: "M21 31h-6V21H0v-6h15V5h6v10h15v6H21z",}));el.appendChild(svg["path"]("M27.5 17H19V9.5l1-1h-4l1 1V17H8.5l-1-1v4l1-1H17v7.5l-1 1h4l-1-1V19h8.5l1 1v-4z", {["fill"]: "#F9DD16",["d"]: "M27.5 17H19V9.5l1-1h-4l1 1V17H8.5l-1-1v4l1-1H17v7.5l-1 1h4l-1-1V19h8.5l1 1v-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};