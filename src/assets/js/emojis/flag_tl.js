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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#DC241F",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M16 18L1.296 29.947c.079.072.16.141.244.207L23.667 18 1.54 5.846c-.084.066-.166.135-.244.207L16 18z", {["fill"]: "#FFC726",["d"]: "M16 18L1.296 29.947c.079.072.16.141.244.207L23.667 18 1.54 5.846c-.084.066-.166.135-.244.207L16 18z",}));el.appendChild(svg["path"]("M1.296 6.053l-.002.001C.499 6.785 0 7.834 0 9v18c0 1.166.499 2.216 1.296 2.947L16 18 1.296 6.053z", {["fill"]: "#141414",["d"]: "M1.296 6.053l-.002.001C.499 6.785 0 7.834 0 9v18c0 1.166.499 2.216 1.296 2.947L16 18 1.296 6.053z",}));el.appendChild(svg["path"]("M4.761 19.01l.492 3.269 1.523-2.934 3.262.542-2.32-2.355 1.523-2.934-2.957 1.478-2.32-2.355.493 3.269L1.5 18.468z", {["fill"]: "#FFF",["d"]: "M4.761 19.01l.492 3.269 1.523-2.934 3.262.542-2.32-2.355 1.523-2.934-2.957 1.478-2.32-2.355.493 3.269L1.5 18.468z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};