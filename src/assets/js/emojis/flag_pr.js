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
				el.appendChild(svg["path"]("M32 5H4c-1.008 0-1.926.375-2.629.99L6.923 10H36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EA0B19",["d"]: "M32 5H4c-1.008 0-1.926.375-2.629.99L6.923 10H36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M13.846 15H36v-5H6.923z", {["fill"]: "#EEE",["d"]: "M13.846 15H36v-5H6.923z",}));el.appendChild(svg["path"]("M18 18l-4.154 3H36v-6H13.846z", {["fill"]: "#EA0B19",["d"]: "M18 18l-4.154 3H36v-6H13.846z",}));el.appendChild(svg["path"]("M6.923 26H36v-5H13.846z", {["fill"]: "#EEE",["d"]: "M6.923 26H36v-5H13.846z",}));el.appendChild(svg["path"]("M1.371 30.01c.703.615 1.621.99 2.629.99h28c2.209 0 4-1.791 4-4v-1H6.923l-5.552 4.01z", {["fill"]: "#EA0B19",["d"]: "M1.371 30.01c.703.615 1.621.99 2.629.99h28c2.209 0 4-1.791 4-4v-1H6.923l-5.552 4.01z",}));el.appendChild(svg["path"]("M13.846 21L18 18l-4.154-3-6.923-5-5.552-4.01C.532 6.724 0 7.799 0 9v18c0 1.201.532 2.276 1.371 3.01L6.923 26l6.923-5z", {["fill"]: "#0F55EC",["d"]: "M13.846 21L18 18l-4.154-3-6.923-5-5.552-4.01C.532 6.724 0 7.799 0 9v18c0 1.201.532 2.276 1.371 3.01L6.923 26l6.923-5z",}));el.appendChild(svg["path"]("M8.187 18.838l2.313-1.675H7.641l-.888-2.726-.89 2.726H3l2.315 1.677-.89 2.723 2.325-1.684 2.325 1.684z", {["fill"]: "#FFF",["d"]: "M8.187 18.838l2.313-1.675H7.641l-.888-2.726-.89 2.726H3l2.315 1.677-.89 2.723 2.325-1.684 2.325 1.684z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};