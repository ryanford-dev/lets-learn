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
				el.appendChild(svg["path"]("M35.702 7.477L28.522.298c-.396-.397-1.038-.397-1.436 0L3.395 23.989c-.397.397-.397 1.038 0 1.437.72.719-3.14 7.959-3.395 8.496L2.068 36c.536-.255 7.785-4.115 8.506-3.395.397.397 1.039.397 1.436 0L35.702 8.913c.397-.396.397-1.039 0-1.436z", {["fill"]: "#DD2E44",["d"]: "M35.702 7.477L28.522.298c-.396-.397-1.038-.397-1.436 0L3.395 23.989c-.397.397-.397 1.038 0 1.437.72.719-3.14 7.959-3.395 8.496L2.068 36c.536-.255 7.785-4.115 8.506-3.395.397.397 1.039.397 1.436 0L35.702 8.913c.397-.396.397-1.039 0-1.436z",}));el.appendChild(svg["path"]("M4.139 23.24L26.407.972l8.62 8.62L12.759 31.86z", {["fill"]: "#EA596E",["d"]: "M4.139 23.24L26.407.972l8.62 8.62L12.759 31.86z",}));el.appendChild(svg["path"]("M23.534 3.846l1.437-1.436 8.62 8.62-1.437 1.436zM5.576 21.803l1.436-1.437 8.62 8.62-1.437 1.437z", {["fill"]: "#292F33",["d"]: "M23.534 3.846l1.437-1.436 8.62 8.62-1.437 1.436zM5.576 21.803l1.436-1.437 8.62 8.62-1.437 1.437z",}));el.appendChild(svg["path"]("M26.886 9.353c-1.521-1.521-5.982.476-9.967 4.459-3.983 3.984-5.979 8.446-4.459 9.967 1.52 1.521 5.983-.476 9.967-4.459 3.983-3.984 5.979-8.447 4.459-9.967z", {["fill"]: "#BE1931",["d"]: "M26.886 9.353c-1.521-1.521-5.982.476-9.967 4.459-3.983 3.984-5.979 8.446-4.459 9.967 1.52 1.521 5.983-.476 9.967-4.459 3.983-3.984 5.979-8.447 4.459-9.967z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};