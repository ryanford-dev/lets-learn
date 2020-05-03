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
				el.appendChild(svg["path"]("M11 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H11z", {["fill"]: "#31373D",["d"]: "M11 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H11z",}));el.appendChild(svg["path"]("M9 5h18v26H9z", {["fill"]: "#55ACEE",["d"]: "M9 5h18v26H9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};