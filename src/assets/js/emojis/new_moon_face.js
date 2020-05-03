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
				el.appendChild(svg["path"]("M36 18c0 9.94-8.06 18-18 18-9.941 0-18-8.06-18-18C0 8.059 8.059 0 18 0c9.94 0 18 8.059 18 18", {["fill"]: "#66757F",["d"]: "M36 18c0 9.94-8.06 18-18 18-9.941 0-18-8.06-18-18C0 8.059 8.059 0 18 0c9.94 0 18 8.059 18 18",}));el.appendChild(svg["circle"](9.5, 7.5, 7, {["cy"]: "7.5",["fill"]: "#5B6876",["cx"]: "9.5",["r"]: "3.5",}));el.appendChild(svg["circle"](24.5, 28.5, 7, {["cy"]: "28.5",["fill"]: "#5B6876",["cx"]: "24.5",["r"]: "3.5",}));el.appendChild(svg["circle"](22, 5, 4, {["cy"]: "5",["fill"]: "#5B6876",["cx"]: "22",["r"]: "2",}));el.appendChild(svg["circle"](3, 18, 2, {["cy"]: "18",["fill"]: "#5B6876",["cx"]: "3",["r"]: "1",}));el.appendChild(svg["circle"](30, 9, 2, {["cy"]: "9",["fill"]: "#5B6876",["cx"]: "30",["r"]: "1",}));el.appendChild(svg["circle"](16, 31, 2, {["cy"]: "31",["fill"]: "#5B6876",["cx"]: "16",["r"]: "1",}));el.appendChild(svg["circle"](32, 19, 4, {["cy"]: "19",["fill"]: "#5B6876",["cx"]: "32",["r"]: "2",}));el.appendChild(svg["circle"](6, 26, 4, {["cy"]: "26",["fill"]: "#5B6876",["cx"]: "6",["r"]: "2",}));el.appendChild(svg["path"]("M18 24.904c-7 0-9-2.618-9-1.381C9 24.762 13 28 18 28s9-3.238 9-4.477c0-1.237-2 1.381-9 1.381M27 15c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3m-12 0c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3", {["d"]: "M18 24.904c-7 0-9-2.618-9-1.381C9 24.762 13 28 18 28s9-3.238 9-4.477c0-1.237-2 1.381-9 1.381M27 15c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3m-12 0c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3",["fill"]: "#292F33",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};