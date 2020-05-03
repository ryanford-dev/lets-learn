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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3zM32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#CE1126",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3zM32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 24h36V12H0v12zm18-11c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z", {["fill"]: "#002868",["d"]: "M0 24h36V12H0v12zm18-11c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z",}));el.appendChild(svg["circle"](18, 18, 10, {["cy"]: "18",["r"]: "5",["fill"]: "#FFF",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};