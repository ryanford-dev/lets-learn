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
				el.appendChild(svg["path"]("M36 32c0 4-4 4-4 4H4c-4 0-4-4-4-4V4c0-4 4-4 4-4h28s4 0 4 4v28z", {["fill"]: "#F4900C",["d"]: "M36 32c0 4-4 4-4 4H4c-4 0-4-4-4-4V4c0-4 4-4 4-4h28s4 0 4 4v28z",}));el.appendChild(svg["path"]("M24 3H12C9 3 9 6 9 6v24c0 3 3 3 3 3h12c3 0 3-3 3-3V6c0-3-3-3-3-3zm1 25H11V8h14v20zM2 15v5l5-2v-1zm1-2l4 2v-2l-4-3zm0 9l4-2v2l-4 3zm31-7v5l-5-2v-1zm-1-2l-4 2v-2l4-3zm0 9l-4-2v2l4 3z", {["fill"]: "#FFF",["d"]: "M24 3H12C9 3 9 6 9 6v24c0 3 3 3 3 3h12c3 0 3-3 3-3V6c0-3-3-3-3-3zm1 25H11V8h14v20zM2 15v5l5-2v-1zm1-2l4 2v-2l-4-3zm0 9l4-2v2l-4 3zm31-7v5l-5-2v-1zm-1-2l-4 2v-2l4-3zm0 9l-4-2v2l4 3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};