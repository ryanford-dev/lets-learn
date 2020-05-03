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
				el.appendChild(svg["path"]("M32 5H13v13h23V9c0-2.209-1.791-4-4-4z", {["fill"]: "#FC3D32",["d"]: "M32 5H13v13h23V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M13 31h19c2.209 0 4-1.791 4-4v-9H13v13z", {["fill"]: "#007E3A",["d"]: "M13 31h19c2.209 0 4-1.791 4-4v-9H13v13z",}));el.appendChild(svg["path"]("M13 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h9V5z", {["fill"]: "#EEE",["d"]: "M13 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h9V5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};