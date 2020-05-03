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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFCC4D",["cx"]: "18",}));el.appendChild(svg["path"]("M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z", {["fill"]: "#664500",["d"]: "M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z",}));el.appendChild(svg["path"]("M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z", {["fill"]: "#FFF",["d"]: "M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z",}));el.appendChild(svg["ellipse"](12, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "12",}));el.appendChild(svg["ellipse"](24, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};