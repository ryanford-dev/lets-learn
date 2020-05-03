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
				el.appendChild(svg["ellipse"](18, 34.5, 8, 3, {["rx"]: "4",["cy"]: "34.5",["ry"]: "1.5",["fill"]: "#292F33",["cx"]: "18",}));el.appendChild(svg["path"]("M14.339 10.725S16.894 34.998 18.001 35c1.106.001 3.66-24.275 3.66-24.275h-7.322z", {["fill"]: "#99AAB5",["d"]: "M14.339 10.725S16.894 34.998 18.001 35c1.106.001 3.66-24.275 3.66-24.275h-7.322z",}));el.appendChild(svg["circle"](18, 8, 16, {["cy"]: "8",["r"]: "8",["fill"]: "#DD2E44",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};