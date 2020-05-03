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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFD983",["cx"]: "18",}));el.appendChild(svg["circle"](10.5, 8.5, 7, {["cy"]: "8.5",["fill"]: "#FFCC4D",["cx"]: "10.5",["r"]: "3.5",}));el.appendChild(svg["circle"](20, 17, 6, {["cy"]: "17",["fill"]: "#FFCC4D",["cx"]: "20",["r"]: "3",}));el.appendChild(svg["circle"](24.5, 28.5, 7, {["cy"]: "28.5",["fill"]: "#FFCC4D",["cx"]: "24.5",["r"]: "3.5",}));el.appendChild(svg["circle"](22, 5, 4, {["cy"]: "5",["fill"]: "#FFCC4D",["cx"]: "22",["r"]: "2",}));el.appendChild(svg["circle"](3, 18, 2, {["cy"]: "18",["fill"]: "#FFCC4D",["cx"]: "3",["r"]: "1",}));el.appendChild(svg["circle"](30, 9, 2, {["cy"]: "9",["fill"]: "#FFCC4D",["cx"]: "30",["r"]: "1",}));el.appendChild(svg["circle"](15, 31, 2, {["cy"]: "31",["fill"]: "#FFCC4D",["cx"]: "15",["r"]: "1",}));el.appendChild(svg["circle"](32, 19, 4, {["cy"]: "19",["fill"]: "#FFCC4D",["cx"]: "32",["r"]: "2",}));el.appendChild(svg["circle"](10, 23, 4, {["cy"]: "23",["fill"]: "#FFCC4D",["cx"]: "10",["r"]: "2",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};