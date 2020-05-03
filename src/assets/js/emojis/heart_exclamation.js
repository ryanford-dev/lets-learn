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
				el.appendChild(svg["path"]("M18 4C14.875-2.375 6-.731 6 7c0 7.062 12 17 12 17s12-9.938 12-17c0-7.731-8.875-9.375-12-3z", {["fill"]: "#DD2E44",["d"]: "M18 4C14.875-2.375 6-.731 6 7c0 7.062 12 17 12 17s12-9.938 12-17c0-7.731-8.875-9.375-12-3z",}));el.appendChild(svg["circle"](18, 31, 10, {["cy"]: "31",["r"]: "5",["fill"]: "#DD2E44",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};