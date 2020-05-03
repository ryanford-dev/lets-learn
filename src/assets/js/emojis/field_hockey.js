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
				el.appendChild(svg["path"]("M4 21c2.409 0 2 2 2 3s0 3 2 3 3.464-2.465 7-6L36 0v7S22.5 21.5 18 26s-7 7-10 7c-3.513 0-7-2.605-7-7 0-4 2-5 3-5z", {["fill"]: "#C1694F",["d"]: "M4 21c2.409 0 2 2 2 3s0 3 2 3 3.464-2.465 7-6L36 0v7S22.5 21.5 18 26s-7 7-10 7c-3.513 0-7-2.605-7-7 0-4 2-5 3-5z",}));el.appendChild(svg["circle"](26.5, 29.5, 13, {["cy"]: "29.5",["r"]: "6.5",["fill"]: "#DD2E44",["cx"]: "26.5",}));el.appendChild(svg["path"]("M25.01 18.712C30.254 13.171 36 7 36 7V0L25.01 10.99v7.722zM22 21.878l1-1.049V13l-1 1v7.878z", {["fill"]: "#FFAC33",["d"]: "M25.01 18.712C30.254 13.171 36 7 36 7V0L25.01 10.99v7.722zM22 21.878l1-1.049V13l-1 1v7.878z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};