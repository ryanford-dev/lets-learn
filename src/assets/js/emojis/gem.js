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
				el.appendChild(svg["path"]("M13 3H7l-7 9h10z", {["fill"]: "#BDDDF4",["d"]: "M13 3H7l-7 9h10z",}));el.appendChild(svg["path"]("M36 12l-7-9h-6l3 9z", {["fill"]: "#5DADEC",["d"]: "M36 12l-7-9h-6l3 9z",}));el.appendChild(svg["path"]("M26 12h10L18 33z", {["fill"]: "#4289C1",["d"]: "M26 12h10L18 33z",}));el.appendChild(svg["path"]("M10 12H0l18 21zm3-9l-3 9h16l-3-9z", {["fill"]: "#8CCAF7",["d"]: "M10 12H0l18 21zm3-9l-3 9h16l-3-9z",}));el.appendChild(svg["path"]("M18 33l-8-21h16z", {["fill"]: "#5DADEC",["d"]: "M18 33l-8-21h16z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};