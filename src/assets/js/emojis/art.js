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
				el.appendChild(svg["path"]("M18 3.143c-9.941 0-18 6.908-18 15.428 0 1.066.126 2.107.367 3.112C2.146 24.744 3.377 22.812 9 20c5.727-2.864 0 4-2 8-.615 1.23-.282 2.271.56 3.124C10.506 32.928 14.104 34 18 34c9.941 0 18-6.907 18-15.429 0-8.52-8.059-15.428-18-15.428zm2.849 24.447c-.395 1.346-2.46 1.924-4.613 1.291-2.153-.632-3.578-2.234-3.183-3.581.395-1.346 2.46-1.924 4.613-1.29 2.153.631 3.578 2.233 3.183 3.58z", {["fill"]: "#D99E82",["d"]: "M18 3.143c-9.941 0-18 6.908-18 15.428 0 1.066.126 2.107.367 3.112C2.146 24.744 3.377 22.812 9 20c5.727-2.864 0 4-2 8-.615 1.23-.282 2.271.56 3.124C10.506 32.928 14.104 34 18 34c9.941 0 18-6.907 18-15.429 0-8.52-8.059-15.428-18-15.428zm2.849 24.447c-.395 1.346-2.46 1.924-4.613 1.291-2.153-.632-3.578-2.234-3.183-3.581.395-1.346 2.46-1.924 4.613-1.29 2.153.631 3.578 2.233 3.183 3.58z",}));el.appendChild(svg["circle"](10, 11, 6, {["cy"]: "11",["r"]: "3",["fill"]: "#5C913B",["cx"]: "10",}));el.appendChild(svg["circle"](20, 9, 6, {["cy"]: "9",["r"]: "3",["fill"]: "#269",["cx"]: "20",}));el.appendChild(svg["circle"](29, 15, 6, {["cy"]: "15",["r"]: "3",["fill"]: "#DD2E44",["cx"]: "29",}));el.appendChild(svg["circle"](28, 24, 6, {["cy"]: "24",["r"]: "3",["fill"]: "#FFCC4D",["cx"]: "28",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};