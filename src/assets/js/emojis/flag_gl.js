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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H0v9z", {["fill"]: "#D00C33",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H0v9z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EEE",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["circle"](13.5, 18, 16, {["cy"]: "18",["r"]: "8",["fill"]: "#EEE",["cx"]: "13.5",}));el.appendChild(svg["path"]("M13.5 10c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z", {["fill"]: "#D00C33",["d"]: "M13.5 10c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};