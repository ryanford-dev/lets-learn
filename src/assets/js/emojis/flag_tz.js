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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v15.627L26.456 5H4z", {["fill"]: "#1EB53A",["d"]: "M4 5C1.791 5 0 6.791 0 9v15.627L26.456 5H4z",}));el.appendChild(svg["path"]("M32 31c2.209 0 4-1.791 4-4V11.33L9.479 31H32z", {["fill"]: "#00A3DD",["d"]: "M32 31c2.209 0 4-1.791 4-4V11.33L9.479 31H32z",}));el.appendChild(svg["path"]("M32 5h-2.532L0 26.638V27c0 2.209 1.791 4 4 4h2.467L36 9.318V9c0-2.209-1.791-4-4-4z", {["fill"]: "#141414",["d"]: "M32 5h-2.532L0 26.638V27c0 2.209 1.791 4 4 4h2.467L36 9.318V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M26.456 5L0 24.627v2.011L29.468 5zM9.479 31L36 11.33V9.318L6.467 31z", {["fill"]: "#FBD035",["d"]: "M26.456 5L0 24.627v2.011L29.468 5zM9.479 31L36 11.33V9.318L6.467 31z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};