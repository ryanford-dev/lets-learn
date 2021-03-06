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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["ellipse"](11.5, 16.5, 5, 7, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "11.5",}));el.appendChild(svg["ellipse"](24.5, 16.5, 5, 7, {["rx"]: "2.5",["cy"]: "16.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24.5",}));el.appendChild(svg["path"]("M12 28c2-5 13-5 13-3 0 1-8-1-13 3z", {["fill"]: "#664500",["d"]: "M12 28c2-5 13-5 13-3 0 1-8-1-13 3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};