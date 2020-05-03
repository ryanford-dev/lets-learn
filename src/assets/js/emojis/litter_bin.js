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
				el.appendChild(svg["path"]("M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4V4z", {["fill"]: "#3B88C3",["d"]: "M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4V4z",}));el.appendChild(svg["ellipse"](23, 7.5, 6, 7, {["rx"]: "3",["cy"]: "7.5",["ry"]: "3.5",["fill"]: "#FFF",["cx"]: "23",}));el.appendChild(svg["path"]("M29 13s0-2-2-2h-7c-1 0-2 1-2 1l-2 2h-4s-1 0-1 1 1 1 1 1h5l2-2v17s0 1 1 1h1s1 0 1-1v-8s0-1 1-1 1 1 1 1v8s0 1 1 1h1s1 0 1-1v-9s2 0 2-2v-7z", {["fill"]: "#FFF",["d"]: "M29 13s0-2-2-2h-7c-1 0-2 1-2 1l-2 2h-4s-1 0-1 1 1 1 1 1h5l2-2v17s0 1 1 1h1s1 0 1-1v-8s0-1 1-1 1 1 1 1v8s0 1 1 1h1s1 0 1-1v-9s2 0 2-2v-7z",}));el.appendChild(svg["path"]("M6 22s-1 0-1-1 1-1 1-1 2 0 2 2v8h6v-8c0-2 2-2 2-2s1 0 1 1-1 1-1 1v8s0 2-2 2H8s-2 0-2-2v-8z", {["fill"]: "#FFF",["d"]: "M6 22s-1 0-1-1 1-1 1-1 2 0 2 2v8h6v-8c0-2 2-2 2-2s1 0 1 1-1 1-1 1v8s0 2-2 2H8s-2 0-2-2v-8z",}));el.appendChild(svg["circle"](11, 20, 4, {["cy"]: "20",["r"]: "2",["fill"]: "#FFF",["cx"]: "11",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};