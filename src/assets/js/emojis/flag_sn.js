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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z", {["fill"]: "#00853F",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z",}));el.appendChild(svg["path"]("M12 5h12v26H12z", {["fill"]: "#FDEF42",["d"]: "M12 5h12v26H12z",}));el.appendChild(svg["path"]("M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#E31B23",["d"]: "M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M18.869 16.674L18 14l-.869 2.674H14.32l2.274 1.652L15.726 21 18 19.348 20.274 21l-.868-2.674 2.274-1.652z", {["fill"]: "#00853F",["d"]: "M18.869 16.674L18 14l-.869 2.674H14.32l2.274 1.652L15.726 21 18 19.348 20.274 21l-.868-2.674 2.274-1.652z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};