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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["ellipse"](12, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "12",}));el.appendChild(svg["ellipse"](24, 13.5, 5, 7, {["rx"]: "2.5",["cy"]: "13.5",["ry"]: "3.5",["fill"]: "#664500",["cx"]: "24",}));el.appendChild(svg["path"]("M25 21c2.209 0 4 1.791 4 4s-1.791 4-4 4H11c-2.209 0-4-1.791-4-4s1.791-4 4-4h14z", {["fill"]: "#FFF",["d"]: "M25 21c2.209 0 4 1.791 4 4s-1.791 4-4 4H11c-2.209 0-4-1.791-4-4s1.791-4 4-4h14z",}));el.appendChild(svg["path"]("M25 20H11c-2.757 0-5 2.243-5 5s2.243 5 5 5h14c2.757 0 5-2.243 5-5s-2.243-5-5-5zm0 2c1.483 0 2.71 1.084 2.949 2.5H24.5V22h.5zm-1.5 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zM11 22h.5v2.5H8.051C8.29 23.084 9.517 22 11 22zm0 6c-1.483 0-2.71-1.084-2.949-2.5H11.5V28H11zm1.5 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4.5 0h-.5v-2.5h3.449C27.71 26.916 26.483 28 25 28z", {["fill"]: "#664500",["d"]: "M25 20H11c-2.757 0-5 2.243-5 5s2.243 5 5 5h14c2.757 0 5-2.243 5-5s-2.243-5-5-5zm0 2c1.483 0 2.71 1.084 2.949 2.5H24.5V22h.5zm-1.5 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zM11 22h.5v2.5H8.051C8.29 23.084 9.517 22 11 22zm0 6c-1.483 0-2.71-1.084-2.949-2.5H11.5V28H11zm1.5 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4.5 0h-.5v-2.5h3.449C27.71 26.916 26.483 28 25 28z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};