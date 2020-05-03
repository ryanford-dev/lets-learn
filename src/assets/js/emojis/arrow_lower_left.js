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
				el.appendChild(svg["path"]("M36 4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4z", {["fill"]: "#3B88C3",["d"]: "M36 4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4z",}));el.appendChild(svg["path"]("M9 11v16h16z", {["fill"]: "#FFF",["d"]: "M9 11v16h16z",}));el.appendChild(svg["path"]("M9.53 20.814L23.343 7 29 12.657 15.186 26.471z", {["fill"]: "#FFF",["d"]: "M9.53 20.814L23.343 7 29 12.657 15.186 26.471z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};