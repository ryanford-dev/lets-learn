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
				el.appendChild(svg["path"]("M16 31c8.837 0 16-7.163 16-16H0c0 8.837 7.164 16 16 16z", {["fill"]: "#A0041E",["d"]: "M16 31c8.837 0 16-7.163 16-16H0c0 8.837 7.164 16 16 16z",}));el.appendChild(svg["ellipse"](16, 15, 32.102, 17.834, {["rx"]: "16.051",["cy"]: "15",["ry"]: "8.917",["fill"]: "#EA596E",["cx"]: "16",}));el.appendChild(svg["ellipse"](16, 15, 29.282, 15.438, {["rx"]: "14.641",["cy"]: "15",["ry"]: "7.719",["fill"]: "#662113",["cx"]: "16",}));el.appendChild(svg["path"]("M34 8c-1 0-4 1-8 4-4.525 3.394-7.596 2.187-7.596 2.187l.001.003C16.981 13.453 15.087 13 13 13c-4.418 0-8 2.015-8 4.5S8.582 22 13 22c2.773 0 5.216-.794 6.651-2 0 0 4.995-4.431 7.349-6 3-2 5-3 7-3s2-3 0-3z", {["fill"]: "#99AAB5",["d"]: "M34 8c-1 0-4 1-8 4-4.525 3.394-7.596 2.187-7.596 2.187l.001.003C16.981 13.453 15.087 13 13 13c-4.418 0-8 2.015-8 4.5S8.582 22 13 22c2.773 0 5.216-.794 6.651-2 0 0 4.995-4.431 7.349-6 3-2 5-3 7-3s2-3 0-3z",}));el.appendChild(svg["ellipse"](13, 19, 10, 5, {["rx"]: "5",["cy"]: "19",["ry"]: "2.5",["fill"]: "#CCD6DD",["cx"]: "13",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};