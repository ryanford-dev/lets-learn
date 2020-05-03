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
				el.appendChild(svg["path"]("M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18", {["fill"]: "#FFCC4D",["d"]: "M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18",}));el.appendChild(svg["path"]("M8.665 12.871c.178.161.444.171.635.029.039-.029 3.922-2.9 8.7-2.9 4.766 0 8.662 2.871 8.7 2.9.191.142.457.13.635-.029.177-.16.217-.424.094-.628C27.3 12.029 24.212 7 18 7s-9.301 5.028-9.429 5.243c-.123.205-.084.468.094.628z", {["fill"]: "#664500",["d"]: "M8.665 12.871c.178.161.444.171.635.029.039-.029 3.922-2.9 8.7-2.9 4.766 0 8.662 2.871 8.7 2.9.191.142.457.13.635-.029.177-.16.217-.424.094-.628C27.3 12.029 24.212 7 18 7s-9.301 5.028-9.429 5.243c-.123.205-.084.468.094.628z",}));el.appendChild(svg["ellipse"](11.5, 21.5, 5, 7, {["rx"]: "2.5",["cy"]: "21.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "11.5",}));el.appendChild(svg["ellipse"](24.5, 21.5, 5, 7, {["rx"]: "2.5",["cy"]: "21.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24.5",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};