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
				el.appendChild(svg["path"]("M10 5H4C1.791 5 0 6.791 0 9v6h10V5zm22 0H16v10h20V9c0-2.209-1.791-4-4-4zM16 31h16c2.209 0 4-1.791 4-4.5V21H16v10zM0 21v5.5C0 29.209 1.791 31 4 31h6V21H0z", {["fill"]: "#EF2B2D",["d"]: "M10 5H4C1.791 5 0 6.791 0 9v6h10V5zm22 0H16v10h20V9c0-2.209-1.791-4-4-4zM16 31h16c2.209 0 4-1.791 4-4.5V21H16v10zM0 21v5.5C0 29.209 1.791 31 4 31h6V21H0z",}));el.appendChild(svg["path"]("M14.5 5h-2.944l-.025 11.5H0v3h11.525L11.5 31h3V19.5H36v-3H14.5z", {["fill"]: "#002868",["d"]: "M14.5 5h-2.944l-.025 11.5H0v3h11.525L11.5 31h3V19.5H36v-3H14.5z",}));el.appendChild(svg["path"]("M14.5 31H16V21h20v-1.5H14.5zM16 5h-1.5v11.5H36V15H16zm-4.5 0H10v10H0v1.5h11.5zM0 19.5V21h10v10h1.5V19.5z", {["fill"]: "#EDECEC",["d"]: "M14.5 31H16V21h20v-1.5H14.5zM16 5h-1.5v11.5H36V15H16zm-4.5 0H10v10H0v1.5h11.5zM0 19.5V21h10v10h1.5V19.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};