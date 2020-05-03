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
				el.appendChild(svg["path"]("M18 0v36C8.059 36 0 27.941 0 18S8.059 0 18 0z", {["fill"]: "#FFD983",["d"]: "M18 0v36C8.059 36 0 27.941 0 18S8.059 0 18 0z",}));el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18V0c9.941 0 18 8.059 18 18z", {["fill"]: "#66757F",["d"]: "M36 18c0 9.941-8.059 18-18 18V0c9.941 0 18 8.059 18 18z",}));el.appendChild(svg["circle"](10.5, 8.5, 7, {["cy"]: "8.5",["r"]: "3.5",["fill"]: "#FFCC4D",["cx"]: "10.5",}));el.appendChild(svg["circle"](24, 16, 6, {["cy"]: "16",["r"]: "3",["fill"]: "#5B6876",["cx"]: "24",}));el.appendChild(svg["circle"](22.5, 27.5, 7, {["cy"]: "27.5",["r"]: "3.5",["fill"]: "#5B6876",["cx"]: "22.5",}));el.appendChild(svg["circle"](21, 6, 4, {["cy"]: "6",["r"]: "2",["fill"]: "#5B6876",["cx"]: "21",}));el.appendChild(svg["circle"](3, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "3",}));el.appendChild(svg["circle"](30, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#5B6876",["cx"]: "30",}));el.appendChild(svg["circle"](15, 31, 2, {["cy"]: "31",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "15",}));el.appendChild(svg["circle"](32, 19, 4, {["cy"]: "19",["r"]: "2",["fill"]: "#5B6876",["cx"]: "32",}));el.appendChild(svg["circle"](10, 23, 4, {["cy"]: "23",["r"]: "2",["fill"]: "#FFCC4D",["cx"]: "10",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};