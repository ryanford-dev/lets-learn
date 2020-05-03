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
				el.appendChild(svg["path"]("M27 32c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v28z", {["fill"]: "#31373D",["d"]: "M27 32c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M17.999 25c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z", {["fill"]: "#77B255",["d"]: "M17.999 25c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z",}));el.appendChild(svg["path"]("M17.999 14c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z", {["fill"]: "#FFCC4D",["d"]: "M17.999 14c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z",}));el.appendChild(svg["path"]("M17.999 3c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z", {["fill"]: "#DD2E44",["d"]: "M17.999 3c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};