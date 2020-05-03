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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFD983",["cx"]: "18",}));el.appendChild(svg["path"]("M0 18c0 9.941 8.059 18 18 18 .295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18 29 9.669 24.761 2.607 18.87.044 18.58.03 18.295 0 18 0 8.059 0 0 8.059 0 18z", {["fill"]: "#66757F",["d"]: "M0 18c0 9.941 8.059 18 18 18 .295 0 .58-.029.87-.043C24.761 33.393 29 26.332 29 18 29 9.669 24.761 2.607 18.87.044 18.58.03 18.295 0 18 0 8.059 0 0 8.059 0 18z",}));el.appendChild(svg["circle"](10.5, 8.5, 7, {["cy"]: "8.5",["r"]: "3.5",["fill"]: "#5B6876",["cx"]: "10.5",}));el.appendChild(svg["circle"](20, 16, 6, {["cy"]: "16",["r"]: "3",["fill"]: "#5B6876",["cx"]: "20",}));el.appendChild(svg["circle"](21.5, 27.5, 7, {["cy"]: "27.5",["r"]: "3.5",["fill"]: "#5B6876",["cx"]: "21.5",}));el.appendChild(svg["circle"](21, 6, 4, {["cy"]: "6",["r"]: "2",["fill"]: "#5B6876",["cx"]: "21",}));el.appendChild(svg["circle"](3, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#5B6876",["cx"]: "3",}));el.appendChild(svg["circle"](30, 9, 2, {["cy"]: "9",["r"]: "1",["fill"]: "#FFCC4D",["cx"]: "30",}));el.appendChild(svg["circle"](15, 31, 2, {["cy"]: "31",["r"]: "1",["fill"]: "#5B6876",["cx"]: "15",}));el.appendChild(svg["circle"](32, 19, 4, {["cy"]: "19",["r"]: "2",["fill"]: "#FFCC4D",["cx"]: "32",}));el.appendChild(svg["circle"](10, 23, 4, {["cy"]: "23",["r"]: "2",["fill"]: "#5B6876",["cx"]: "10",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};