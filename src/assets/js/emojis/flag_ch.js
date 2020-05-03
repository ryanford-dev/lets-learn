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
				el.appendChild(svg["path"]("M31 27c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v18z", {["fill"]: "#D32D27",["d"]: "M31 27c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M25 16.063h-5v-5h-4v5h-5V20h5v5.063h4V20h5z", {["fill"]: "#FFF",["d"]: "M25 16.063h-5v-5h-4v5h-5V20h5v5.063h4V20h5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};