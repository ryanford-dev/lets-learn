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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v15.323L26.496 5H4z", {["fill"]: "#009E49",["d"]: "M4 5C1.791 5 0 6.791 0 9v15.323L26.496 5H4z",}));el.appendChild(svg["path"]("M32 31c2.209 0 4-1.791 4-4V11.186L8.767 31H32z", {["fill"]: "#CE1126",["d"]: "M32 31c2.209 0 4-1.791 4-4V11.186L8.767 31H32z",}));el.appendChild(svg["path"]("M26.496 5L0 24.323v1.874L29.066 5zM8.767 31L36 11.186V9.312L6.197 31z", {["fill"]: "#FCD116",["d"]: "M26.496 5L0 24.323v1.874L29.066 5zM8.767 31L36 11.186V9.312L6.197 31z",}));el.appendChild(svg["path"]("M32 5h-2.934L0 26.197V27c0 2.209 1.791 4 4 4h2.197L36 9.312V9c0-2.209-1.791-4-4-4z", {["fill"]: "#141414",["d"]: "M32 5h-2.934L0 26.197V27c0 2.209 1.791 4 4 4h2.197L36 9.312V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M27.152 9.729l-2.074 1.513-2.079-1.505.798 2.439-2.074 1.513 2.567-.005.797 2.44.789-2.443 2.567-.004-2.08-1.505zM13.185 19.915l-2.074 1.513-2.079-1.505.798 2.439-2.074 1.513 2.567-.005.797 2.44.789-2.443 2.567-.004-2.08-1.505z", {["d"]: "M27.152 9.729l-2.074 1.513-2.079-1.505.798 2.439-2.074 1.513 2.567-.005.797 2.44.789-2.443 2.567-.004-2.08-1.505zM13.185 19.915l-2.074 1.513-2.079-1.505.798 2.439-2.074 1.513 2.567-.005.797 2.44.789-2.443 2.567-.004-2.08-1.505z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};