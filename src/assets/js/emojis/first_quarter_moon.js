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
				el.appendChild(svg["path"]("M18 0v36c9.941 0 18-8.059 18-18S27.941 0 18 0z", {["fill"]: "#FFD983",["d"]: "M18 0v36c9.941 0 18-8.059 18-18S27.941 0 18 0z",}));el.appendChild(svg["path"]("M0 18c0 9.941 8.059 18 18 18V0C8.059 0 0 8.059 0 18z", {["fill"]: "#66757F",["d"]: "M0 18c0 9.941 8.059 18 18 18V0C8.059 0 0 8.059 0 18z",}));el.appendChild(svg["circle"](25.5, 8.5, 7, {["cy"]: "8.5",["r"]: "3.5",["fill"]: "#FFCC4D",["cx"]: "25.5",}));el.appendChild(svg["circle"](12, 16, 6, {["cy"]: "16",["r"]: "3",["fill"]: "#5B6876",["cx"]: "12",}));el.appendChild(svg["circle"](13.5, 27.5, 7, {["cy"]: "27.5",["r"]: "3.5",["fill"]: "#5B6876",["cx"]: "13.5",}));el.appendChild(svg["circle"](15, 6, 4, {["cy"]: "6",["r"]: "2",["fill"]: "#5B6876",["cx"]: "15",}));el.appendChild(svg["circle"](33, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "33",}));el.appendChild(svg["circle"](6, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#5B6876",["cx"]: "6",}));el.appendChild(svg["circle"](21, 31, 2, {["cy"]: "31",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "21",}));el.appendChild(svg["circle"](4, 19, 4, {["cy"]: "19",["r"]: "2",["fill"]: "#5B6876",["cx"]: "4",}));el.appendChild(svg["circle"](26, 23, 4, {["cy"]: "23",["r"]: "2",["fill"]: "#FFCC4D",["cx"]: "26",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};