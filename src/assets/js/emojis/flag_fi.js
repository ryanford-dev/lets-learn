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
				el.appendChild(svg["path"]("M32 5H18v10h18V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EDECEC",["d"]: "M32 5H18v10h18V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M11 5H4C1.791 5 0 6.791 0 9v6h11V5z", {["fill"]: "#EEE",["d"]: "M11 5H4C1.791 5 0 6.791 0 9v6h11V5z",}));el.appendChild(svg["path"]("M32 31H18V21h18v6c0 2.209-1.791 4-4 4zm-21 0H4c-2.209 0-4-1.791-4-4v-6h11v10z", {["fill"]: "#EDECEC",["d"]: "M32 31H18V21h18v6c0 2.209-1.791 4-4 4zm-21 0H4c-2.209 0-4-1.791-4-4v-6h11v10z",}));el.appendChild(svg["path"]("M18 5h-7v10H0v6h11v10h7V21h18v-6H18z", {["fill"]: "#003580",["d"]: "M18 5h-7v10H0v6h11v10h7V21h18v-6H18z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};