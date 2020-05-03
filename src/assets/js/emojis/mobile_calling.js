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
				el.appendChild(svg["path"]("M18 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H18z", {["fill"]: "#31373D",["d"]: "M18 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H18z",}));el.appendChild(svg["path"]("M16 5h18v26H16zm-3 11s1 1 1 2-1 2-1 2l-5 5c-1 1-3 1-3-1v-3H2s-2 0-2-2v-2c0-2 2-2 2-2h3v-3c0-2 2-2 3-1l5 5z", {["fill"]: "#55ACEE",["d"]: "M16 5h18v26H16zm-3 11s1 1 1 2-1 2-1 2l-5 5c-1 1-3 1-3-1v-3H2s-2 0-2-2v-2c0-2 2-2 2-2h3v-3c0-2 2-2 3-1l5 5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};