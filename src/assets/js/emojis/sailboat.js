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
				el.appendChild(svg["path"]("M20 26c0 .553-.447 1-1 1-.552 0-1-.447-1-1V1c0-.552.448-1 1-1 .553 0 1 .448 1 1v25z", {["fill"]: "#A7A9AC",["d"]: "M20 26c0 .553-.447 1-1 1-.552 0-1-.447-1-1V1c0-.552.448-1 1-1 .553 0 1 .448 1 1v25z",}));el.appendChild(svg["path"]("M3 24h31v8H12c-6 0-9-8-9-8z", {["fill"]: "#D1D3D4",["d"]: "M3 24h31v8H12c-6 0-9-8-9-8z",}));el.appendChild(svg["path"]("M0 30h36v6H0z", {["fill"]: "#55ACEE",["d"]: "M0 30h36v6H0z",}));el.appendChild(svg["path"]("M5 22s2-5 5-9 8-8 8-8-1 11-1 16v1s-3-1-6-1-6 1-6 1z", {["fill"]: "#FFAC33",["d"]: "M5 22s2-5 5-9 8-8 8-8-1 11-1 16v1s-3-1-6-1-6 1-6 1z",}));el.appendChild(svg["path"]("M20 2s6 6 9 11c2.771 4.618 4 9 4 9s-3-1-6-1-6 1-6 1v-1c0-9-1-19-1-19z", {["fill"]: "#F4900C",["d"]: "M20 2s6 6 9 11c2.771 4.618 4 9 4 9s-3-1-6-1-6 1-6 1v-1c0-9-1-19-1-19z",}));el.appendChild(svg["path"]("M2 24c-.552 0-1 .447-1 1s.448 1 1 1h33v-2H2z", {["fill"]: "#E6E7E8",["d"]: "M2 24c-.552 0-1 .447-1 1s.448 1 1 1h33v-2H2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};