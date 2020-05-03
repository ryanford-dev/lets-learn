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
				el.appendChild(svg["path"]("M24.187 9.657l5.658-5.654L32 6.16l-5.658 5.655z", {["fill"]: "#CCD6DD",["d"]: "M24.187 9.657l5.658-5.654L32 6.16l-5.658 5.655z",}));el.appendChild(svg["circle"](14, 22, 28, {["cy"]: "22",["r"]: "14",["fill"]: "#31373D",["cx"]: "14",}));el.appendChild(svg["path"]("M19 11.342l5.658-5.657 5.657 5.658L24.657 17z", {["fill"]: "#31373D",["d"]: "M19 11.342l5.658-5.657 5.657 5.658L24.657 17z",}));el.appendChild(svg["circle"](32, 4, 8, {["cy"]: "4",["r"]: "4",["fill"]: "#F18F26",["cx"]: "32",}));el.appendChild(svg["circle"](32, 4, 4, {["cy"]: "4",["r"]: "2",["fill"]: "#FDCB58",["cx"]: "32",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};