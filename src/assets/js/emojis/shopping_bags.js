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
				el.appendChild(svg["path"]("M11 0C6.582 0 3 3.582 3 8v8h2V8c0-3.313 2.687-6 6-6 3.314 0 6 2.687 6 6v8h2V8c0-4.418-3.582-8-8-8z", {["fill"]: "#F4900C",["d"]: "M11 0C6.582 0 3 3.582 3 8v8h2V8c0-3.313 2.687-6 6-6 3.314 0 6 2.687 6 6v8h2V8c0-4.418-3.582-8-8-8z",}));el.appendChild(svg["path"]("M1 8l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H1z", {["fill"]: "#DD2E44",["d"]: "M1 8l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H1z",}));el.appendChild(svg["path"]("M25 5c-4.418 0-8 3.582-8 8v8h2v-8c0-3.314 2.688-6 6-6 3.315 0 6 2.686 6 6v8h2v-8c0-4.418-3.582-8-8-8z", {["fill"]: "#FFCC4D",["d"]: "M25 5c-4.418 0-8 3.582-8 8v8h2v-8c0-3.314 2.688-6 6-6 3.315 0 6 2.686 6 6v8h2v-8c0-4.418-3.582-8-8-8z",}));el.appendChild(svg["path"]("M15 13l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H15z", {["fill"]: "#744EAA",["d"]: "M15 13l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H15z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};