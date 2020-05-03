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
				el.appendChild(svg["circle"](16, 18, 32, {["cy"]: "18",["r"]: "16",["fill"]: "#FFCC4D",["cx"]: "16",}));el.appendChild(svg["path"]("M11.471 13.529c0 1.706-.987 3.088-2.206 3.088-1.219 0-2.206-1.382-2.206-3.088 0-1.705.987-3.088 2.206-3.088 1.218 0 2.206 1.383 2.206 3.088zm11.529 0c0 1.706-.987 3.088-2.206 3.088-1.218 0-2.206-1.382-2.206-3.088 0-1.705.988-3.088 2.206-3.088 1.219 0 2.206 1.383 2.206 3.088zM10.118 29.382c1.765-4.412 11.471-4.412 11.471-2.647-.001.883-7.06-.882-11.471 2.647z", {["fill"]: "#664500",["d"]: "M11.471 13.529c0 1.706-.987 3.088-2.206 3.088-1.219 0-2.206-1.382-2.206-3.088 0-1.705.987-3.088 2.206-3.088 1.218 0 2.206 1.383 2.206 3.088zm11.529 0c0 1.706-.987 3.088-2.206 3.088-1.218 0-2.206-1.382-2.206-3.088 0-1.705.988-3.088 2.206-3.088 1.219 0 2.206 1.383 2.206 3.088zM10.118 29.382c1.765-4.412 11.471-4.412 11.471-2.647-.001.883-7.06-.882-11.471 2.647z",}));el.appendChild(svg["path"]("M32.262 17.5H17c-1.511 0-2.734 1.344-2.734 3 0 1.657 1.224 3 2.734 3h15.262c1.513 0 2.738-1.343 2.738-3 0-1.656-1.226-3-2.738-3z", {["fill"]: "#F4900C",["d"]: "M32.262 17.5H17c-1.511 0-2.734 1.344-2.734 3 0 1.657 1.224 3 2.734 3h15.262c1.513 0 2.738-1.343 2.738-3 0-1.656-1.226-3-2.738-3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};