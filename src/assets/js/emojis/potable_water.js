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
				el.appendChild(svg["path"]("M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4V4z", {["fill"]: "#269",["d"]: "M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4V4z",}));el.appendChild(svg["path"]("M33 9H22V3s0-1-1-1-1 1-1 1v6c-8 0-8 7-8 7v2c0 1 1 1 1 1h3s1 0 1-1v-2c0-2 2-2 2-2h14c1 0 1-1 1-1v-3s0-1-1-1z", {["d"]: "M33 9H22V3s0-1-1-1-1 1-1 1v6c-8 0-8 7-8 7v2c0 1 1 1 1 1h3s1 0 1-1v-2c0-2 2-2 2-2h14c1 0 1-1 1-1v-3s0-1-1-1z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M18.5 3h-3c-.829 0-1.5.671-1.5 1.5S14.671 6 15.5 6h3c.828 0 1.5-.671 1.5-1.5S19.328 3 18.5 3zm5 3h3c.828 0 1.5-.671 1.5-1.5S27.328 3 26.5 3h-3c-.828 0-1.5.671-1.5 1.5S22.672 6 23.5 6z", {["d"]: "M18.5 3h-3c-.829 0-1.5.671-1.5 1.5S14.671 6 15.5 6h3c.828 0 1.5-.671 1.5-1.5S19.328 3 18.5 3zm5 3h3c.828 0 1.5-.671 1.5-1.5S27.328 3 26.5 3h-3c-.828 0-1.5.671-1.5 1.5S22.672 6 23.5 6z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M20 20c-1 0-1 1-1 1v5h-9v-5s0-1-1-1-1 1-1 1v11s0 2 2 2h9c2 0 2-2 2-2V21s0-1-1-1z", {["fill"]: "#FFF",["d"]: "M20 20c-1 0-1 1-1 1v5h-9v-5s0-1-1-1-1 1-1 1v11s0 2 2 2h9c2 0 2-2 2-2V21s0-1-1-1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};