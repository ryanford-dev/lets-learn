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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["ellipse"](11.5, 16.5, 5, 7, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "11.5",}));el.appendChild(svg["ellipse"](24.5, 16.5, 5, 7, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24.5",}));el.appendChild(svg["path"]("M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379c-.053.213.044.431.232.544.188.112.433.086.596-.06.009-.008 1.013-.863 4.657-.863 3.59 0 4.617.83 4.656.863.095.09.219.137.344.137.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z", {["fill"]: "#664500",["d"]: "M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379c-.053.213.044.431.232.544.188.112.433.086.596-.06.009-.008 1.013-.863 4.657-.863 3.59 0 4.617.83 4.656.863.095.09.219.137.344.137.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};