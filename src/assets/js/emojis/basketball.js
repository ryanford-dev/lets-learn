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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#F4900C",["cx"]: "18",}));el.appendChild(svg["path"]("M36 17h-8.981c.188-5.506 1.943-9.295 4.784-10.546-.445-.531-.926-1.027-1.428-1.504-2.83 1.578-5.145 5.273-5.354 12.049H19V0h-2v17h-6.021c-.208-6.776-2.523-10.471-5.353-12.049-.502.476-.984.972-1.428 1.503C7.039 7.705 8.793 11.494 8.981 17H0v2h8.981c-.188 5.506-1.942 9.295-4.783 10.546.445.531.926 1.027 1.428 1.504 2.831-1.578 5.145-5.273 5.353-12.05H17v17h2V19h6.021c.209 6.776 2.523 10.471 5.354 12.05.502-.476.984-.973 1.428-1.504-2.841-1.251-4.595-5.04-4.784-10.546H36v-2z", {["fill"]: "#231F20",["d"]: "M36 17h-8.981c.188-5.506 1.943-9.295 4.784-10.546-.445-.531-.926-1.027-1.428-1.504-2.83 1.578-5.145 5.273-5.354 12.049H19V0h-2v17h-6.021c-.208-6.776-2.523-10.471-5.353-12.049-.502.476-.984.972-1.428 1.503C7.039 7.705 8.793 11.494 8.981 17H0v2h8.981c-.188 5.506-1.942 9.295-4.783 10.546.445.531.926 1.027 1.428 1.504 2.831-1.578 5.145-5.273 5.353-12.05H17v17h2V19h6.021c.209 6.776 2.523 10.471 5.354 12.05.502-.476.984-.973 1.428-1.504-2.841-1.251-4.595-5.04-4.784-10.546H36v-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};