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
				el.appendChild(svg["path"]("M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4V10z", {["fill"]: "#31373D",["d"]: "M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4V10z",}));el.appendChild(svg["circle"](21, 19, 20, {["cy"]: "19",["r"]: "10",["fill"]: "#CCD6DD",["cx"]: "21",}));el.appendChild(svg["circle"](21, 19, 16, {["cy"]: "19",["r"]: "8",["fill"]: "#31373D",["cx"]: "21",}));el.appendChild(svg["circle"](21, 19, 10, {["cy"]: "19",["r"]: "5",["fill"]: "#3B88C3",["cx"]: "21",}));el.appendChild(svg["circle"](32.5, 9.5, 3, {["cy"]: "9.5",["r"]: "1.5",["fill"]: "#FFF",["cx"]: "32.5",}));el.appendChild(svg["path"]("M16 9l3-6-6 2-4-5-2 5-6-1 4 6-5 4h6l-2 6 6-3 6 5-1-8 6-1z", {["fill"]: "#FFAC33",["d"]: "M16 9l3-6-6 2-4-5-2 5-6-1 4 6-5 4h6l-2 6 6-3 6 5-1-8 6-1z",}));el.appendChild(svg["path"]("M10 14l-3 2 1-3-3-1 3-2-3-3h4l1-3 2 3 3-1-2 3 3 3-3 1 1 4z", {["fill"]: "#FFF",["d"]: "M10 14l-3 2 1-3-3-1 3-2-3-3h4l1-3 2 3 3-1-2 3 3 3-3 1 1 4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};