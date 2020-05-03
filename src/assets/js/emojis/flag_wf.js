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
				el.appendChild(svg["path"]("M32 5H18v12H0v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#ED2939",["d"]: "M32 5H18v12H0v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 16h19v2H0z", {["fill"]: "#EEE",["d"]: "M0 16h19v2H0z",}));el.appendChild(svg["path"]("M6 17H0V9c0-2.209 1.791-4 4-4h2v12z", {["fill"]: "#002395",["d"]: "M6 17H0V9c0-2.209 1.791-4 4-4h2v12z",}));el.appendChild(svg["path"]("M6 5h6v12H6zm11 0h2v13h-2z", {["fill"]: "#EEE",["d"]: "M6 5h6v12H6zm11 0h2v13h-2z",}));el.appendChild(svg["path"]("M12 5h6v12h-6z", {["fill"]: "#ED2939",["d"]: "M12 5h6v12h-6z",}));el.appendChild(svg["path"]("M24.38 22.32h6.24L27.5 19.2zM30.62 14h-6.24l3.12 3.12zm1.04 7.28v-6.24l-3.12 3.12zm-8.32-6.24v6.24l3.12-3.12z", {["d"]: "M24.38 22.32h6.24L27.5 19.2zM30.62 14h-6.24l3.12 3.12zm1.04 7.28v-6.24l-3.12 3.12zm-8.32-6.24v6.24l3.12-3.12z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};