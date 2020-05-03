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
				el.appendChild(svg["path"]("M32 0H4C1.791 0 0 1.791 0 4v22h36V4c0-2.209-1.791-4-4-4z", {["fill"]: "#F4900C",["d"]: "M32 0H4C1.791 0 0 1.791 0 4v22h36V4c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z", {["fill"]: "#485359",["d"]: "M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9V11z",}));el.appendChild(svg["path"]("M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10V17zm-17 2H6v-5s0-1-1-1H0v19c0 2.209 1.791 4 4 4h8V20s0-1-1-1zm21 6c-1 0-1 1-1 1v10h1c2.209 0 4-1.791 4-4v-7h-4z", {["fill"]: "#292F33",["d"]: "M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10V17zm-17 2H6v-5s0-1-1-1H0v19c0 2.209 1.791 4 4 4h8V20s0-1-1-1zm21 6c-1 0-1 1-1 1v10h1c2.209 0 4-1.791 4-4v-7h-4z",}));el.appendChild(svg["path"]("M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z", {["d"]: "M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z",["fill"]: "#FFCC4D",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};