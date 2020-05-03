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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#F4900C",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 29, {["cy"]: "18",["r"]: "14.5",["fill"]: "#FFD983",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 26, {["cy"]: "18",["r"]: "13",["fill"]: "#F5F8FA",["cx"]: "18",}));el.appendChild(svg["path"]("M18 8l1.531 6.304 5.54-3.375-3.375 5.54L28 18l-6.304 1.531 3.375 5.54-5.54-3.375L18 28l-1.531-6.304-5.54 3.375 3.375-5.54L8 18l6.304-1.531-3.375-5.54 5.54 3.375z", {["fill"]: "#CCD6DD",["d"]: "M18 8l1.531 6.304 5.54-3.375-3.375 5.54L28 18l-6.304 1.531 3.375 5.54-5.54-3.375L18 28l-1.531-6.304-5.54 3.375 3.375-5.54L8 18l6.304-1.531-3.375-5.54 5.54 3.375z",}));el.appendChild(svg["path"]("M17.343 20.748l8.777 5.381-5.379-8.778z", {["fill"]: "#292F33",["d"]: "M17.343 20.748l8.777 5.381-5.379-8.778z",}));el.appendChild(svg["path"]("M18.657 15.267L9.879 9.886l5.38 8.779z", {["fill"]: "#DD2E44",["d"]: "M18.657 15.267L9.879 9.886l5.38 8.779z",}));el.appendChild(svg["circle"](18, 18.008, 6.11, {["cy"]: "18.008",["r"]: "3.055",["fill"]: "#8899A6",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18.008, 3.296, {["cy"]: "18.008",["r"]: "1.648",["fill"]: "#F5F8FA",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};