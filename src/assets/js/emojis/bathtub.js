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
				el.appendChild(svg["ellipse"](32, 16, 4, 2, {["rx"]: "2",["cy"]: "16",["ry"]: "1",["fill"]: "#99AAB5",["cx"]: "32",}));el.appendChild(svg["path"]("M33 21c-.553 0-1-.447-1-1V4c0-1.582-1.962-2-3-2s-3 .418-3 2c0 .552-.447 1-1 1s-1-.448-1-1c0-2.626 2.516-4 5-4s5 1.374 5 4v16c0 .553-.447 1-1 1z", {["fill"]: "#CCD6DD",["d"]: "M33 21c-.553 0-1-.447-1-1V4c0-1.582-1.962-2-3-2s-3 .418-3 2c0 .552-.447 1-1 1s-1-.448-1-1c0-2.626 2.516-4 5-4s5 1.374 5 4v16c0 .553-.447 1-1 1z",}));el.appendChild(svg["path"]("M28 6c0 1.104-1.343 1-3 1s-3 .104-3-1 1.343-2 3-2 3 .896 3 2z", {["fill"]: "#99AAB5",["d"]: "M28 6c0 1.104-1.343 1-3 1s-3 .104-3-1 1.343-2 3-2 3 .896 3 2z",}));el.appendChild(svg["path"]("M29 7c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1z", {["fill"]: "#CCD6DD",["d"]: "M29 7c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1z",}));el.appendChild(svg["circle"](12, 34, 4, {["cy"]: "34",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "12",}));el.appendChild(svg["circle"](28, 34, 4, {["cy"]: "34",["r"]: "2",["fill"]: "#99AAB5",["cx"]: "28",}));el.appendChild(svg["path"]("M30 34H12C7 34 2 28 1 20c-.248-1.984.812-1 3.021-1C4.021 19 17 21 30 21c2 0 5-1.209 5 1 0 0-1 12-5 12z", {["fill"]: "#CCD6DD",["d"]: "M30 34H12C7 34 2 28 1 20c-.248-1.984.812-1 3.021-1C4.021 19 17 21 30 21c2 0 5-1.209 5 1 0 0-1 12-5 12z",}));el.appendChild(svg["path"]("M36 21c0 .553-.447 1-1 1L1 20c-.552 0-1-.447-1-1 0-.553.448-1 1-1l34 2c.553 0 1 .447 1 1z", {["fill"]: "#99AAB5",["d"]: "M36 21c0 .553-.447 1-1 1L1 20c-.552 0-1-.447-1-1 0-.553.448-1 1-1l34 2c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};