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
				el.appendChild(svg["path"]("M0 34h36v2H0z", {["fill"]: "#939598",["d"]: "M0 34h36v2H0z",}));el.appendChild(svg["path"]("M3 35h33V6H21c-4 0-5 2-5 2l-4 6S0 19 0 24c0 4 6 6 6 6l-3 5z", {["fill"]: "#D1D3D4",["d"]: "M3 35h33V6H21c-4 0-5 2-5 2l-4 6S0 19 0 24c0 4 6 6 6 6l-3 5z",}));el.appendChild(svg["path"]("M14 35l2-3h20v3z", {["fill"]: "#231F20",["d"]: "M14 35l2-3h20v3z",}));el.appendChild(svg["path"]("M0 23.999c0 4 6 6 6 6V17.125C3 19 0 21.499 0 23.999zM6 30v-.001V30z", {["d"]: "M0 23.999c0 4 6 6 6 6V17.125C3 19 0 21.499 0 23.999zM6 30v-.001V30z",["fill"]: "#3B88C3",}));el.appendChild(svg["path"]("M6 30l-3 5h33v-5z", {["fill"]: "#269",["d"]: "M6 30l-3 5h33v-5z",}));el.appendChild(svg["path"]("M20 30l4-6h12v6z", {["fill"]: "#3B88C3",["d"]: "M20 30l4-6h12v6z",}));el.appendChild(svg["path"]("M26 8H16l-4 6h-.001 10.843c.477 0 1.108-.448 1.412-1l2.197-4c.303-.552.102-1-.451-1z", {["fill"]: "#55ACEE",["d"]: "M26 8H16l-4 6h-.001 10.843c.477 0 1.108-.448 1.412-1l2.197-4c.303-.552.102-1-.451-1z",}));el.appendChild(svg["path"]("M25.902 10l.549-1c.303-.552.102-1-.451-1H16l-1.333 2h11.235z", {["fill"]: "#3B88C3",["d"]: "M25.902 10l.549-1c.303-.552.102-1-.451-1H16l-1.333 2h11.235z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};