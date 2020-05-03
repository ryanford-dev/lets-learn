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
				el.appendChild(svg["path"]("M18 5h-2v11h20v-2H18zm-2 17v9h2v-9h18v-2H16zm-3-2H0v2h11v9h2v-9zm0-6V5h-2v9H0v2h13z", {["fill"]: "#FFCE00",["d"]: "M18 5h-2v11h20v-2H18zm-2 17v9h2v-9h18v-2H16zm-3-2H0v2h11v9h2v-9zm0-6V5h-2v9H0v2h13z",}));el.appendChild(svg["path"]("M16 5h-3v11H0v4h13v11h3V20h20v-4H16z", {["fill"]: "#D21034",["d"]: "M16 5h-3v11H0v4h13v11h3V20h20v-4H16z",}));el.appendChild(svg["path"]("M18 22v9h14c2.209 0 4-1.791 4-4v-5H18zM0 22v5c0 2.209 1.791 4 4 4h7v-9H0zM11 5H4C1.791 5 0 6.791 0 9v5h11V5zm21 0H18v9h18V9c0-2.209-1.791-4-4-4z", {["fill"]: "#0053A5",["d"]: "M18 22v9h14c2.209 0 4-1.791 4-4v-5H18zM0 22v5c0 2.209 1.791 4 4 4h7v-9H0zM11 5H4C1.791 5 0 6.791 0 9v5h11V5zm21 0H18v9h18V9c0-2.209-1.791-4-4-4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};