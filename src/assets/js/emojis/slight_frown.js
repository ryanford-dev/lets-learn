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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFCC4D",["cx"]: "18",}));el.appendChild(svg["path"]("M25.485 27.379C25.44 27.2 24.317 23 18 23c-6.318 0-7.44 4.2-7.485 4.379-.055.217.043.442.237.554.195.111.439.078.6-.077C11.371 27.837 13.306 26 18 26s6.63 1.837 6.648 1.855c.096.095.224.145.352.145.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z", {["fill"]: "#664500",["d"]: "M25.485 27.379C25.44 27.2 24.317 23 18 23c-6.318 0-7.44 4.2-7.485 4.379-.055.217.043.442.237.554.195.111.439.078.6-.077C11.371 27.837 13.306 26 18 26s6.63 1.837 6.648 1.855c.096.095.224.145.352.145.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z",}));el.appendChild(svg["ellipse"](12, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "12",}));el.appendChild(svg["ellipse"](24, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};