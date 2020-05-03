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
				el.appendChild(svg["path"]("M9 28.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v.5s0 3 3 3 3-3 3-3V3.5c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5V29s0 6-6 6-6-6-6-6v-.5z", {["fill"]: "#66757F",["d"]: "M9 28.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v.5s0 3 3 3 3-3 3-3V3.5c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5V29s0 6-6 6-6-6-6-6v-.5z",}));el.appendChild(svg["path"]("M19.5 4C28.612 4 36 9.82 36 17c0 0 0 2-1 2s-3-2-3-2H7s-2 2-3 2-1-2-1-2C3 9.82 10.387 4 19.5 4z", {["fill"]: "#744EAA",["d"]: "M19.5 4C28.612 4 36 9.82 36 17c0 0 0 2-1 2s-3-2-3-2H7s-2 2-3 2-1-2-1-2C3 9.82 10.387 4 19.5 4z",}));el.appendChild(svg["path"]("M19.5 4C26.403 4 32 9.82 32 17c0 0 0 2-2 2s-5-2-5-2H14s-3 2-5 2-2-2-2-2C7 9.82 12.596 4 19.5 4z", {["fill"]: "#9266CC",["d"]: "M19.5 4C26.403 4 32 9.82 32 17c0 0 0 2-2 2s-5-2-5-2H14s-3 2-5 2-2-2-2-2C7 9.82 12.596 4 19.5 4z",}));el.appendChild(svg["path"]("M19.5 4C23.09 4 25 9.82 25 17c0 0-3 2-5 2h-1c-2 0-5-2-5-2 0-7.18 1.91-13 5.5-13z", {["fill"]: "#744EAA",["d"]: "M19.5 4C23.09 4 25 9.82 25 17c0 0-3 2-5 2h-1c-2 0-5-2-5-2 0-7.18 1.91-13 5.5-13z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};