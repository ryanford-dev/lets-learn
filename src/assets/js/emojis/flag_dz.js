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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h14V5H4z", {["fill"]: "#006233",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h14V5H4z",}));el.appendChild(svg["path"]("M32 5H18v26h14c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EEE",["d"]: "M32 5H18v26h14c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M20 24c-3.315 0-6-2.685-6-6 0-3.314 2.685-6 6-6 1.31 0 2.52.425 3.507 1.138-1.348-1.524-3.312-2.491-5.507-2.491-4.061 0-7.353 3.292-7.353 7.353 0 4.062 3.292 7.354 7.353 7.354 2.195 0 4.16-.967 5.507-2.492C22.521 23.575 21.312 24 20 24z", {["fill"]: "#D20F34",["d"]: "M20 24c-3.315 0-6-2.685-6-6 0-3.314 2.685-6 6-6 1.31 0 2.52.425 3.507 1.138-1.348-1.524-3.312-2.491-5.507-2.491-4.061 0-7.353 3.292-7.353 7.353 0 4.062 3.292 7.354 7.353 7.354 2.195 0 4.16-.967 5.507-2.492C22.521 23.575 21.312 24 20 24z",}));el.appendChild(svg["path"]("M25.302 18.23l-2.44.562-.22 2.493-1.288-2.146-2.44.561 1.644-1.888-1.287-2.147 2.303.98 1.644-1.889-.22 2.494z", {["fill"]: "#D20F34",["d"]: "M25.302 18.23l-2.44.562-.22 2.493-1.288-2.146-2.44.561 1.644-1.888-1.287-2.147 2.303.98 1.644-1.889-.22 2.494z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};