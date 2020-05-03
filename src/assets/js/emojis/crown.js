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
				el.appendChild(svg["path"]("M14.174 17.075L6.75 7.594l-3.722 9.481z", {["fill"]: "#F4900C",["d"]: "M14.174 17.075L6.75 7.594l-3.722 9.481z",}));el.appendChild(svg["path"]("M17.938 5.534l-6.563 12.389H24.5z", {["fill"]: "#F4900C",["d"]: "M17.938 5.534l-6.563 12.389H24.5z",}));el.appendChild(svg["path"]("M21.826 17.075l7.424-9.481 3.722 9.481z", {["fill"]: "#F4900C",["d"]: "M21.826 17.075l7.424-9.481 3.722 9.481z",}));el.appendChild(svg["path"]("M28.669 15.19L23.887 3.523l-5.88 11.668-.007.003-.007-.004-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z", {["fill"]: "#FFCC4D",["d"]: "M28.669 15.19L23.887 3.523l-5.88 11.668-.007.003-.007-.004-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z",}));el.appendChild(svg["circle"](17.957, 22, 7.376, {["cy"]: "22",["r"]: "3.688",["fill"]: "#5C913B",["cx"]: "17.957",}));el.appendChild(svg["circle"](26.463, 22, 4.824, {["cy"]: "22",["r"]: "2.412",["fill"]: "#981CEB",["cx"]: "26.463",}));el.appendChild(svg["circle"](32.852, 22, 3.972, {["cy"]: "22",["r"]: "1.986",["fill"]: "#DD2E44",["cx"]: "32.852",}));el.appendChild(svg["circle"](9.45, 22, 4.824, {["cy"]: "22",["r"]: "2.412",["fill"]: "#981CEB",["cx"]: "9.45",}));el.appendChild(svg["circle"](3.061, 22, 3.972, {["cy"]: "22",["r"]: "1.986",["fill"]: "#DD2E44",["cx"]: "3.061",}));el.appendChild(svg["path"]("M33 34H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1zm0-3.486H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1z", {["fill"]: "#FFAC33",["d"]: "M33 34H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1zm0-3.486H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1z",}));el.appendChild(svg["circle"](1.447, 8.042, 2.814, {["cy"]: "8.042",["r"]: "1.407",["fill"]: "#FFCC4D",["cx"]: "1.447",}));el.appendChild(svg["circle"](6.75, 7.594, 2.384, {["cy"]: "7.594",["r"]: "1.192",["fill"]: "#F4900C",["cx"]: "6.75",}));el.appendChild(svg["circle"](12.113, 3.523, 3.568, {["cy"]: "3.523",["r"]: "1.784",["fill"]: "#FFCC4D",["cx"]: "12.113",}));el.appendChild(svg["circle"](34.553, 8.042, 2.814, {["cy"]: "8.042",["r"]: "1.407",["fill"]: "#FFCC4D",["cx"]: "34.553",}));el.appendChild(svg["circle"](29.25, 7.594, 2.384, {["cy"]: "7.594",["r"]: "1.192",["fill"]: "#F4900C",["cx"]: "29.25",}));el.appendChild(svg["circle"](23.887, 3.523, 3.568, {["cy"]: "3.523",["r"]: "1.784",["fill"]: "#FFCC4D",["cx"]: "23.887",}));el.appendChild(svg["circle"](17.938, 5.534, 3.568, {["cy"]: "5.534",["r"]: "1.784",["fill"]: "#F4900C",["cx"]: "17.938",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};