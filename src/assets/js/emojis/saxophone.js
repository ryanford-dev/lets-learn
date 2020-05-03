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
				el.appendChild(svg["path"]("M14 16L9 26s-1 2 1 2c1 0 2-2 2-2L26 7s2-4 8-1v2c-3-1-4 1-4 1L15 33s-2 3-7 3c-6 0-7-5-7-8 0-2 1-4 2-6s-2-6-2-6h13z", {["fill-rule"]: "evenodd",["clip-rule"]: "evenodd",["fill"]: "#FCAB40",["d"]: "M14 16L9 26s-1 2 1 2c1 0 2-2 2-2L26 7s2-4 8-1v2c-3-1-4 1-4 1L15 33s-2 3-7 3c-6 0-7-5-7-8 0-2 1-4 2-6s-2-6-2-6h13z",}));el.appendChild(svg["path"]("M7.5 20C4.04 20 0 18.952 0 16c0-2.953 4.04-4 7.5-4s7.5 1.047 7.5 4c0 2.952-4.04 4-7.5 4z", {["fill"]: "#FDCB58",["d"]: "M7.5 20C4.04 20 0 18.952 0 16c0-2.953 4.04-4 7.5-4s7.5 1.047 7.5 4c0 2.952-4.04 4-7.5 4z",}));el.appendChild(svg["circle"](19, 17, 4, {["cy"]: "17",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "19",}));el.appendChild(svg["circle"](22, 13, 4, {["cy"]: "13",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "22",}));el.appendChild(svg["circle"](25, 9, 4, {["cy"]: "9",["r"]: "2",["fill"]: "#CCD6DD",["cx"]: "25",}));el.appendChild(svg["path"]("M33.998 10c-.3 0-.605-.068-.893-.211l-2-1c-.988-.494-1.389-1.695-.895-2.684.493-.986 1.693-1.39 2.684-.895l2 1c.988.494 1.389 1.695.895 2.684-.351.701-1.057 1.106-1.791 1.106z", {["fill"]: "#9AAAB4",["d"]: "M33.998 10c-.3 0-.605-.068-.893-.211l-2-1c-.988-.494-1.389-1.695-.895-2.684.493-.986 1.693-1.39 2.684-.895l2 1c.988.494 1.389 1.695.895 2.684-.351.701-1.057 1.106-1.791 1.106z",}));el.appendChild(svg["path"]("M8.806 21.703l1.267-1.547 6.19 5.069-1.267 1.547z", {["fill-rule"]: "evenodd",["clip-rule"]: "evenodd",["fill"]: "#FCAB40",["d"]: "M8.806 21.703l1.267-1.547 6.19 5.069-1.267 1.547z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};