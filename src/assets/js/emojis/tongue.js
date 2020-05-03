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
				el.appendChild(svg["path"]("M36 7.5C36 12 27.941 19 18 19S0 12 0 7.5C0 6 3 9 18 9s18-3 18-1.5z", {["fill"]: "#662113",["d"]: "M36 7.5C36 12 27.941 19 18 19S0 12 0 7.5C0 6 3 9 18 9s18-3 18-1.5z",}));el.appendChild(svg["path"]("M18 11c-6 0-11-1-11-1v12c0 6.075 4.925 11 11 11s11-4.925 11-11V10s-5 1-11 1z", {["fill"]: "#EA596E",["d"]: "M18 11c-6 0-11-1-11-1v12c0 6.075 4.925 11 11 11s11-4.925 11-11V10s-5 1-11 1z",}));el.appendChild(svg["path"]("M19 29c0 .553-.448 1-1 1s-1-.447-1-1V13c0-.552.448-1 1-1s1 .448 1 1v16z", {["fill"]: "#DD2E44",["d"]: "M19 29c0 .553-.448 1-1 1s-1-.447-1-1V13c0-.552.448-1 1-1s1 .448 1 1v16z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};