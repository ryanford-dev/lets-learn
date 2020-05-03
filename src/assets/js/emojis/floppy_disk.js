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
				el.appendChild(svg["path"]("M4 36s-4 0-4-4V4s0-4 4-4h26c1 0 2 1 2 1l3 3s1 1 1 2v26s0 4-4 4H4z", {["fill"]: "#31373D",["d"]: "M4 36s-4 0-4-4V4s0-4 4-4h26c1 0 2 1 2 1l3 3s1 1 1 2v26s0 4-4 4H4z",}));el.appendChild(svg["path"]("M5 19v-1s0-2 2-2h21c2 0 2 2 2 2v1H5z", {["fill"]: "#55ACEE",["d"]: "M5 19v-1s0-2 2-2h21c2 0 2 2 2 2v1H5z",}));el.appendChild(svg["path"]("M5 32.021V19h25v13s0 2-2 2H7c-2 0-2-1.979-2-1.979zM10 3s0-1 1-1h18c1.048 0 1 1 1 1v10s0 1-1 1H11s-1 0-1-1V3zm12 10h5V3h-5v10z", {["fill"]: "#E1E8ED",["d"]: "M5 32.021V19h25v13s0 2-2 2H7c-2 0-2-1.979-2-1.979zM10 3s0-1 1-1h18c1.048 0 1 1 1 1v10s0 1-1 1H11s-1 0-1-1V3zm12 10h5V3h-5v10z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};