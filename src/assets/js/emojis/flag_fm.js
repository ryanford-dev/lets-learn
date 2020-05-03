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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#75B2DD",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M18.3 7.6l-.584 1.797h-1.889l1.528 1.11-.583 1.796 1.528-1.11 1.528 1.11-.583-1.796 1.528-1.11h-1.889zm8.603 9.816v-1.889l-1.11 1.528-1.796-.583L25.107 18l-1.11 1.528 1.796-.583 1.11 1.528v-1.889L28.7 18zm-7.658 8.077l.583-1.796-1.528 1.11-1.528-1.11.583 1.796-1.528 1.11h1.889L18.3 28.4l.584-1.797h1.889zm-8.438-8.438l-1.11-1.528v1.889L7.9 18l1.797.584v1.889l1.11-1.528 1.796.583L11.493 18l1.11-1.528z", {["d"]: "M18.3 7.6l-.584 1.797h-1.889l1.528 1.11-.583 1.796 1.528-1.11 1.528 1.11-.583-1.796 1.528-1.11h-1.889zm8.603 9.816v-1.889l-1.11 1.528-1.796-.583L25.107 18l-1.11 1.528 1.796-.583 1.11 1.528v-1.889L28.7 18zm-7.658 8.077l.583-1.796-1.528 1.11-1.528-1.11.583 1.796-1.528 1.11h1.889L18.3 28.4l.584-1.797h1.889zm-8.438-8.438l-1.11-1.528v1.889L7.9 18l1.797.584v1.889l1.11-1.528 1.796.583L11.493 18l1.11-1.528z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};