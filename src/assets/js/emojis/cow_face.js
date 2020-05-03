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
				el.appendChild(svg["path"]("M4 8s-4 2-4 11c0 0 6-1 7-3 0 0 2-12.25-3-8zm27.995.043s4 2 4 11c0 0-6-.999-7-2.999 0 0-2-12.251 3-8.001z", {["fill"]: "#99AAB5",["d"]: "M4 8s-4 2-4 11c0 0 6-1 7-3 0 0 2-12.25-3-8zm27.995.043s4 2 4 11c0 0-6-.999-7-2.999 0 0-2-12.251 3-8.001z",}));el.appendChild(svg["path"]("M1 1c-1.01.99 1 8 5 9s4-5 3-5C5 5 3.042-1 1 1zm34.297 0c1.011.99-1 8-5 9s-4-5-3-5c4 0 5.959-6 8-4z", {["fill"]: "#FFE8B6",["d"]: "M1 1c-1.01.99 1 8 5 9s4-5 3-5C5 5 3.042-1 1 1zm34.297 0c1.011.99-1 8-5 9s-4-5-3-5c4 0 5.959-6 8-4z",}));el.appendChild(svg["path"]("M21.976 31h-7.951C8.488 31 4 26.512 4 20.976v-8.951C4 6.488 8.488 2 14.025 2h7.951C27.512 2 32 6.488 32 12.025v8.951C32 26.512 27.512 31 21.976 31z", {["fill"]: "#CCD6DD",["d"]: "M21.976 31h-7.951C8.488 31 4 26.512 4 20.976v-8.951C4 6.488 8.488 2 14.025 2h7.951C27.512 2 32 6.488 32 12.025v8.951C32 26.512 27.512 31 21.976 31z",}));el.appendChild(svg["path"]("M35 28c0 5.522-4.478 8-10 8H11c-5.523 0-10-2.478-10-8s4.477-10 10-10h14c5.522 0 10 4.478 10 10z", {["fill"]: "#E6AAAA",["d"]: "M35 28c0 5.522-4.478 8-10 8H11c-5.523 0-10-2.478-10-8s4.477-10 10-10h14c5.522 0 10 4.478 10 10z",}));el.appendChild(svg["ellipse"](9.5, 26, 3, 6, {["rx"]: "1.5",["cy"]: "26",["ry"]: "3",["fill"]: "#C1694F",["cx"]: "9.5",}));el.appendChild(svg["ellipse"](26.5, 26, 3, 6, {["rx"]: "1.5",["cy"]: "26",["ry"]: "3",["fill"]: "#C1694F",["cx"]: "26.5",}));el.appendChild(svg["path"]("M11 12s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm10 0s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z", {["fill"]: "#272B2B",["d"]: "M11 12s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2zm10 0s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};