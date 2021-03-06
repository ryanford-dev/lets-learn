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
				el.appendChild(svg["path"]("M0 13h36v10H0z", {["fill"]: "#EEE",["d"]: "M0 13h36v10H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#E05206",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["circle"](18, 18, 8, {["cy"]: "18",["r"]: "4",["fill"]: "#E05206",["cx"]: "18",}));el.appendChild(svg["path"]("M32 31H4c-2.209 0-4-1.791-4-4v-4h36v4c0 2.209-1.791 4-4 4z", {["fill"]: "#0DB02B",["d"]: "M32 31H4c-2.209 0-4-1.791-4-4v-4h36v4c0 2.209-1.791 4-4 4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};