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
				el.appendChild(svg["path"]("M35 18c0 6.075-4.925 11-11 11H12C5.925 29 1 24.075 1 18S5.925 7 12 7h12c6.075 0 11 4.925 11 11z", {["fill"]: "#E6AAAA",["d"]: "M35 18c0 6.075-4.925 11-11 11H12C5.925 29 1 24.075 1 18S5.925 7 12 7h12c6.075 0 11 4.925 11 11z",}));el.appendChild(svg["ellipse"](10, 18, 8, 12, {["rx"]: "4",["cy"]: "18",["ry"]: "6",["fill"]: "#662113",["cx"]: "10",}));el.appendChild(svg["ellipse"](26, 18, 8, 12, {["rx"]: "4",["cy"]: "18",["ry"]: "6",["fill"]: "#662113",["cx"]: "26",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};