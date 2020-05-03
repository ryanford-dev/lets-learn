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
				el.appendChild(svg["path"]("M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z", {["fill"]: "#3B88C3",["d"]: "M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z",}));el.appendChild(svg["path"]("M27 11v16H11z", {["fill"]: "#FFF",["d"]: "M27 11v16H11z",}));el.appendChild(svg["path"]("M7 12.657L12.658 7l13.814 13.814-5.656 5.657z", {["fill"]: "#FFF",["d"]: "M7 12.657L12.658 7l13.814 13.814-5.656 5.657z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};