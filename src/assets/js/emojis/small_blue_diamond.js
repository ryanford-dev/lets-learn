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
				el.appendChild(svg["path"]("M7.707 18.708c-.389-.389-.389-1.025 0-1.414l9.585-9.586c.389-.389 1.025-.389 1.414 0l9.587 9.587c.389.389.389 1.025 0 1.414l-9.587 9.585c-.389.389-1.025.389-1.414 0l-9.585-9.586z", {["fill"]: "#55ACEE",["d"]: "M7.707 18.708c-.389-.389-.389-1.025 0-1.414l9.585-9.586c.389-.389 1.025-.389 1.414 0l9.587 9.587c.389.389.389 1.025 0 1.414l-9.587 9.585c-.389.389-1.025.389-1.414 0l-9.585-9.586z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};