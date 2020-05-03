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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#6CF",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M9.333 28.747l2.346-2.909L18 10.2l6.321 15.638 2.346 2.909L18 7.34z", {["fill"]: "#FFF",["d"]: "M9.333 28.747l2.346-2.909L18 10.2l6.321 15.638 2.346 2.909L18 7.34z",}));el.appendChild(svg["path"]("M24.321 25.838L18 10.2l-6.321 15.638L18 18z", {["d"]: "M24.321 25.838L18 10.2l-6.321 15.638L18 18z",}));el.appendChild(svg["path"]("M18 18l-6.321 7.838-2.346 2.909h17.334l-2.346-2.909z", {["fill"]: "#FCD116",["d"]: "M18 18l-6.321 7.838-2.346 2.909h17.334l-2.346-2.909z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};