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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#E70013",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["circle"](18, 18, 13, {["cy"]: "18",["r"]: "6.5",["fill"]: "#FFF",["cx"]: "18",}));el.appendChild(svg["path"]("M15.4 18c0-2.154 1.746-3.9 3.9-3.9 1.019 0 1.946.391 2.641 1.031-.887-1.216-2.321-2.006-3.941-2.006-2.692 0-4.875 2.183-4.875 4.875s2.183 4.875 4.875 4.875c1.62 0 3.055-.79 3.941-2.006-.695.64-1.622 1.031-2.641 1.031-2.154 0-3.9-1.746-3.9-3.9z", {["fill"]: "#E70013",["d"]: "M15.4 18c0-2.154 1.746-3.9 3.9-3.9 1.019 0 1.946.391 2.641 1.031-.887-1.216-2.321-2.006-3.941-2.006-2.692 0-4.875 2.183-4.875 4.875s2.183 4.875 4.875 4.875c1.62 0 3.055-.79 3.941-2.006-.695.64-1.622 1.031-2.641 1.031-2.154 0-3.9-1.746-3.9-3.9z",}));el.appendChild(svg["path"]("M19.645 16.937l-1.249-1.719v2.125L16.375 18l2.021.657v2.125l1.249-1.719 2.021.656L20.417 18l1.249-1.719z", {["fill"]: "#E70013",["d"]: "M19.645 16.937l-1.249-1.719v2.125L16.375 18l2.021.657v2.125l1.249-1.719 2.021.656L20.417 18l1.249-1.719z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};