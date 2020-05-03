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
				el.appendChild(svg["circle"](18, 32, 6, {["cy"]: "32",["r"]: "3",["fill"]: "#BE1931",["cx"]: "18",}));el.appendChild(svg["path"]("M21 24c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3V5c0-1.657 1.343-3 3-3 1.656 0 3 1.343 3 3v19z", {["fill"]: "#BE1931",["d"]: "M21 24c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3V5c0-1.657 1.343-3 3-3 1.656 0 3 1.343 3 3v19z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};