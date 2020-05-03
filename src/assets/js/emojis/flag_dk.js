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
				el.appendChild(svg["path"]("M32 5H15v11h21V9c0-2.209-1.791-4-4-4zM15 31h17c2.209 0 4-1.791 4-4.5V20H15v11zM0 20v6.5C0 29.209 1.791 31 4 31h7V20H0zM11 5H4C1.791 5 0 6.791 0 9v7h11V5z", {["fill"]: "#C60C30",["d"]: "M32 5H15v11h21V9c0-2.209-1.791-4-4-4zM15 31h17c2.209 0 4-1.791 4-4.5V20H15v11zM0 20v6.5C0 29.209 1.791 31 4 31h7V20H0zM11 5H4C1.791 5 0 6.791 0 9v7h11V5z",}));el.appendChild(svg["path"]("M15 5h-4v11H0v4h11v11h4V20h21v-4H15z", {["fill"]: "#EEE",["d"]: "M15 5h-4v11H0v4h11v11h4V20h21v-4H15z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};