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
				el.appendChild(svg["path"]("M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416 1.376.262 2.805.416 4.284.416 9.941 0 18-6.268 18-14S27.941 1 18 1z", {["fill"]: "#BDDDF4",["d"]: "M18 1C8.059 1 0 7.268 0 15c0 4.368 2.574 8.268 6.604 10.835C6.08 28.144 4.859 31.569 2 35c5.758-.96 9.439-3.761 11.716-6.416 1.376.262 2.805.416 4.284.416 9.941 0 18-6.268 18-14S27.941 1 18 1z",}));el.appendChild(svg["circle"](18, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#2A6797",["cx"]: "18",}));el.appendChild(svg["circle"](26, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#2A6797",["cx"]: "26",}));el.appendChild(svg["circle"](10, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#2A6797",["cx"]: "10",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};