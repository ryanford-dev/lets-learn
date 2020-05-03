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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18 7 9.669 11.239 2.607 17.13.044 17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z", {["fill"]: "#FFD983",["d"]: "M36 18c0 9.941-8.059 18-18 18-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18 7 9.669 11.239 2.607 17.13.044 17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z",}));el.appendChild(svg["path"]("M7 18C7 9.669 11.239 2.607 17.13.044 7.596.501 0 8.353 0 18c0 9.646 7.594 17.498 17.128 17.956C11.238 33.391 7 26.331 7 18z", {["fill"]: "#66757F",["d"]: "M7 18C7 9.669 11.239 2.607 17.13.044 7.596.501 0 8.353 0 18c0 9.646 7.594 17.498 17.128 17.956C11.238 33.391 7 26.331 7 18z",}));el.appendChild(svg["circle"](25.5, 8.5, 7, {["cy"]: "8.5",["r"]: "3.5",["fill"]: "#FFCC4D",["cx"]: "25.5",}));el.appendChild(svg["circle"](16, 16, 6, {["cy"]: "16",["r"]: "3",["fill"]: "#FFCC4D",["cx"]: "16",}));el.appendChild(svg["circle"](14.5, 27.5, 7, {["cy"]: "27.5",["r"]: "3.5",["fill"]: "#FFCC4D",["cx"]: "14.5",}));el.appendChild(svg["circle"](15, 6, 4, {["cy"]: "6",["r"]: "2",["fill"]: "#FFCC4D",["cx"]: "15",}));el.appendChild(svg["circle"](33, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "33",}));el.appendChild(svg["circle"](6, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#5B6876",["cx"]: "6",}));el.appendChild(svg["circle"](21, 31, 2, {["cy"]: "31",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "21",}));el.appendChild(svg["circle"](4, 19, 4, {["cy"]: "19",["r"]: "2",["fill"]: "#5B6876",["cx"]: "4",}));el.appendChild(svg["circle"](26, 23, 4, {["cy"]: "23",["r"]: "2",["fill"]: "#FFCC4D",["cx"]: "26",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};