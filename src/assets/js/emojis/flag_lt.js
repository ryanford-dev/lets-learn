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
				el.appendChild(svg["path"]("M0 14h36v8H0z", {["fill"]: "#006A44",["d"]: "M0 14h36v8H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#FDB913",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M4 31h28c2.209 0 4-1.791 4-4v-5H0v5c0 2.209 1.791 4 4 4z", {["fill"]: "#C1272D",["d"]: "M4 31h28c2.209 0 4-1.791 4-4v-5H0v5c0 2.209 1.791 4 4 4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};