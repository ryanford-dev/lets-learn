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
				el.appendChild(svg["path"]("M27 36v-4s0-4 4-4 4 4 4 4v4h-8zm-9 0v-9s0-4 4-4 4 4 4 4v9h-8zm-9 0V24s0-4 4-4 4 4 4 4v12H9zm-9 0v-9s0-4 4-4 4 4 4 4v9H0z", {["fill"]: "#FFDC5D",["d"]: "M27 36v-4s0-4 4-4 4 4 4 4v4h-8zm-9 0v-9s0-4 4-4 4 4 4 4v9h-8zm-9 0V24s0-4 4-4 4 4 4 4v12H9zm-9 0v-9s0-4 4-4 4 4 4 4v9H0z",}));el.appendChild(svg["path"]("M16 24c0-1.657 0-8-3-8s-3 6.343-3 8 1.343 3 3 3 3-1.343 3-3zm-9 3c0-1.657 0-8-3-8s-3 6.343-3 8 1.343 3 3 3 3-1.343 3-3zm18 0c0-1.657 0-8-3-8s-3 6.343-3 8 1.344 3 3 3c1.657 0 3-1.343 3-3zm9 5c0-1.657 0-8-3-8s-3 6.343-3 8 1.344 3 3 3c1.657 0 3-1.343 3-3z", {["fill"]: "#DD2E44",["d"]: "M16 24c0-1.657 0-8-3-8s-3 6.343-3 8 1.343 3 3 3 3-1.343 3-3zm-9 3c0-1.657 0-8-3-8s-3 6.343-3 8 1.343 3 3 3 3-1.343 3-3zm18 0c0-1.657 0-8-3-8s-3 6.343-3 8 1.344 3 3 3c1.657 0 3-1.343 3-3zm9 5c0-1.657 0-8-3-8s-3 6.343-3 8 1.344 3 3 3c1.657 0 3-1.343 3-3z",}));el.appendChild(svg["path"]("M13 16v4h2s2 0 6-4l-2-2s-2 2-6 2z", {["fill"]: "#DD2E44",["d"]: "M13 16v4h2s2 0 6-4l-2-2s-2 2-6 2z",}));el.appendChild(svg["path"]("M19 14l8-8 2 2-8 8z", {["fill"]: "#8899A6",["d"]: "M19 14l8-8 2 2-8 8z",}));el.appendChild(svg["path"]("M27 6s-2-2 0-4l2-2h7v5l-3 3c-2 2-4 0-4 0l-2-2z", {["fill"]: "#8899A6",["d"]: "M27 6s-2-2 0-4l2-2h7v5l-3 3c-2 2-4 0-4 0l-2-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};