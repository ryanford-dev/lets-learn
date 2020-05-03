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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["path"]("M25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm-10-8H8c-.552 0-1-.448-1-1s.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1zm13 0h-7c-.553 0-1-.448-1-1s.447-1 1-1h7c.553 0 1 .448 1 1s-.447 1-1 1z", {["fill"]: "#664500",["d"]: "M25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm-10-8H8c-.552 0-1-.448-1-1s.448-1 1-1h7c.552 0 1 .448 1 1s-.448 1-1 1zm13 0h-7c-.553 0-1-.448-1-1s.447-1 1-1h7c.553 0 1 .448 1 1s-.447 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};