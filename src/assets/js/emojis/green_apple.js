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
				el.appendChild(svg["path"]("M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9 0 11 6 20 10 20 3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20 0-7.001-5-9-9-9z", {["fill"]: "#77B255",["d"]: "M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9 0 11 6 20 10 20 3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20 0-7.001-5-9-9-9z",}));el.appendChild(svg["path"]("M17.311 7.88s-1.775-4.674-6.58-6.06c-3.843-1.108-6.318.26-6.318.26s3.012 3.991 5.895 4.822c2.882.83 7.003.978 7.003.978z", {["fill"]: "#3E721D",["d"]: "M17.311 7.88s-1.775-4.674-6.58-6.06c-3.843-1.108-6.318.26-6.318.26s3.012 3.991 5.895 4.822c2.882.83 7.003.978 7.003.978z",}));el.appendChild(svg["path"]("M18 10c-.552 0-1-.448-1-1 0-3.441 1.2-6.615 3.293-8.707.391-.391 1.023-.391 1.414 0s.391 1.024 0 1.414C19.986 3.427 19 6.085 19 9c0 .552-.448 1-1 1z", {["fill"]: "#662113",["d"]: "M18 10c-.552 0-1-.448-1-1 0-3.441 1.2-6.615 3.293-8.707.391-.391 1.023-.391 1.414 0s.391 1.024 0 1.414C19.986 3.427 19 6.085 19 9c0 .552-.448 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};