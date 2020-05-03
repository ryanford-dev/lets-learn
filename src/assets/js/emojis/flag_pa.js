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
				el.appendChild(svg["path"]("M18 18V5H4C1.791 5 0 6.791 0 9v9h18zm0 0v13h14c2.209 0 4-1.791 4-4v-9H18z", {["fill"]: "#EEE",["d"]: "M18 18V5H4C1.791 5 0 6.791 0 9v9h18zm0 0v13h14c2.209 0 4-1.791 4-4v-9H18z",}));el.appendChild(svg["path"]("M18 18v13H4c-2.209 0-4-1.791-4-4v-9h18z", {["fill"]: "#005293",["d"]: "M18 18v13H4c-2.209 0-4-1.791-4-4v-9h18z",}));el.appendChild(svg["path"]("M18 18V5h14c2.209 0 4 1.791 4 4v9H18z", {["fill"]: "#D21034",["d"]: "M18 18V5h14c2.209 0 4 1.791 4 4v9H18z",}));el.appendChild(svg["path"]("M9.674 10.573L9 8.5l-.674 2.073H6.147l1.763 1.281-.673 2.073L9 12.646l1.763 1.281-.673-2.073 1.763-1.281z", {["fill"]: "#005293",["d"]: "M9.674 10.573L9 8.5l-.674 2.073H6.147l1.763 1.281-.673 2.073L9 12.646l1.763 1.281-.673-2.073 1.763-1.281z",}));el.appendChild(svg["path"]("M25.91 24.854l-.673 2.073L27 25.646l1.763 1.281-.673-2.073 1.763-1.281h-2.179L27 21.5l-.674 2.073h-2.179z", {["fill"]: "#D21034",["d"]: "M25.91 24.854l-.673 2.073L27 25.646l1.763 1.281-.673-2.073 1.763-1.281h-2.179L27 21.5l-.674 2.073h-2.179z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};