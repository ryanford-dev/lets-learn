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
				el.appendChild(svg["path"]("M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9 0 11 6 20 10 20 3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20 0-7.001-5-9-9-9z", {["fill"]: "#DD2E44",["d"]: "M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9 0 11 6 20 10 20 3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20 0-7.001-5-9-9-9z",}));el.appendChild(svg["path"]("M19 7s3-4 8-4c4 0 6 2 6 2s-4 3-7 3-7-1-7-1z", {["fill"]: "#77B255",["d"]: "M19 7s3-4 8-4c4 0 6 2 6 2s-4 3-7 3-7-1-7-1z",}));el.appendChild(svg["path"]("M18 10c-.552 0-1-.448-1-1 0-3.441 1.2-6.615 3.293-8.707.391-.391 1.023-.391 1.414 0s.391 1.024 0 1.414C19.986 3.427 19 6.085 19 9c0 .552-.448 1-1 1z", {["fill"]: "#662113",["d"]: "M18 10c-.552 0-1-.448-1-1 0-3.441 1.2-6.615 3.293-8.707.391-.391 1.023-.391 1.414 0s.391 1.024 0 1.414C19.986 3.427 19 6.085 19 9c0 .552-.448 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};