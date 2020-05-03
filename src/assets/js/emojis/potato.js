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
				el.appendChild(svg["path"]("M.25 13c0-7.158 10-15 18-8 2.714 2.375 5 4 5 7 12-2 13.703 8.892 12 14-1 3-5.868 11.059-24 3-9-4-11-11.616-11-16z", {["fill"]: "#D99E82",["d"]: "M.25 13c0-7.158 10-15 18-8 2.714 2.375 5 4 5 7 12-2 13.703 8.892 12 14-1 3-5.868 11.059-24 3-9-4-11-11.616-11-16z",}));el.appendChild(svg["path"]("M17.71 14.822c1.827-1.737 3.628-2.498 5.649-2.838l-.109.015c0-.858-.204-1.597-.534-2.28-2.074.772-4.288 2.281-5.006 5.103z", {["fill"]: "#C1694F",["d"]: "M17.71 14.822c1.827-1.737 3.628-2.498 5.649-2.838l-.109.015c0-.858-.204-1.597-.534-2.28-2.074.772-4.288 2.281-5.006 5.103z",}));el.appendChild(svg["circle"](10.25, 16, 2, {["cy"]: "16",["r"]: "1",["fill"]: "#C1694F",["cx"]: "10.25",}));el.appendChild(svg["circle"](30.25, 26, 2, {["cy"]: "26",["r"]: "1",["fill"]: "#C1694F",["cx"]: "30.25",}));el.appendChild(svg["circle"](14.75, 25.5, 3, {["cy"]: "25.5",["r"]: "1.5",["fill"]: "#C1694F",["cx"]: "14.75",}));el.appendChild(svg["circle"](5.75, 19.5, 3, {["cy"]: "19.5",["r"]: "1.5",["fill"]: "#C1694F",["cx"]: "5.75",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};