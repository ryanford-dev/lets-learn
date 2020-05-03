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
				el.appendChild(svg["path"]("M36 32s0 4-4 4H4s-4 0-4-4V4c0-4 4-4 4-4h28c4 0 4 4 4 4v28z", {["fill"]: "#88C9F9",["d"]: "M36 32s0 4-4 4H4s-4 0-4-4V4c0-4 4-4 4-4h28c4 0 4 4 4 4v28z",}));el.appendChild(svg["path"]("M24 2c1 0 2 3 3 3s3 0 3 1-3 1-3 2-1 1-2 1-3 0-3-1 2 0 2-1-1-5 0-5zm-3 8c0-1 2-1 2-1s1 2 0 2-2-1-2-1zm2 2c-1 0-1 2-1 3s0 3-1 3-2 1-2 2-1 2-2 2-2 2-2 2-4 1-5 1-3 0-3 1-3 2-1 2 2-1 3-1h2s3-1 3 0 0 2 1 2 2-1 2-2 1-1 2-1 2 0 2-1 1-2 2-2 1-2 1-3 0-3 1-3 2-3 1-3-2 0-2-1-1-1-1-1z", {["d"]: "M24 2c1 0 2 3 3 3s3 0 3 1-3 1-3 2-1 1-2 1-3 0-3-1 2 0 2-1-1-5 0-5zm-3 8c0-1 2-1 2-1s1 2 0 2-2-1-2-1zm2 2c-1 0-1 2-1 3s0 3-1 3-2 1-2 2-1 2-2 2-2 2-2 2-4 1-5 1-3 0-3 1-3 2-1 2 2-1 3-1h2s3-1 3 0 0 2 1 2 2-1 2-2 1-1 2-1 2 0 2-1 1-2 2-2 1-2 1-3 0-3 1-3 2-3 1-3-2 0-2-1-1-1-1-1z",["fill"]: "#3E721D",}));el.appendChild(svg["path"]("M8 30c0-1 0-2 1-2h3c1 0 1 0 0 1s-1 0-2 0 0 2-1 2-1-1-1-1zm-4 3c0-1 1-1 1-2s-1 0-1-1 1-1 2-1 1 1 1 2-1 1-1 2-1 1-1 1-1 0-1-1z", {["d"]: "M8 30c0-1 0-2 1-2h3c1 0 1 0 0 1s-1 0-2 0 0 2-1 2-1-1-1-1zm-4 3c0-1 1-1 1-2s-1 0-1-1 1-1 2-1 1 1 1 2-1 1-1 2-1 1-1 1-1 0-1-1z",["fill"]: "#3E721D",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};