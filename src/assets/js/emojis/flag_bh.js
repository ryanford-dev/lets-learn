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
				el.appendChild(svg["path"]("M15 6L8 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h4l7-1V6z", {["fill"]: "#EEE",["d"]: "M15 6L8 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h4l7-1V6z",}));el.appendChild(svg["path"]("M32 5H8l6.081 2.6L8 10.2l6.081 2.6L8 15.4l6.081 2.6L8 20.6l6.081 2.6L8 25.8l6.081 2.6L8 31h24c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#CE1126",["d"]: "M32 5H8l6.081 2.6L8 10.2l6.081 2.6L8 15.4l6.081 2.6L8 20.6l6.081 2.6L8 25.8l6.081 2.6L8 31h24c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};