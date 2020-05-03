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
				el.appendChild(svg["path"]("M0 32c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28z", {["fill"]: "#3B88C3",["d"]: "M0 32c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28z",}));el.appendChild(svg["path"]("M27 25V9H11z", {["fill"]: "#FFF",["d"]: "M27 25V9H11z",}));el.appendChild(svg["path"]("M7 23.343L19.816 10.53l5.656 5.657L12.657 29z", {["fill"]: "#FFF",["d"]: "M7 23.343L19.816 10.53l5.656 5.657L12.657 29z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};