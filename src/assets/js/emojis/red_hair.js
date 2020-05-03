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
				el.appendChild(svg["path"]("M0 21h30v15H0z", {["fill"]: "#FFDC5D",["d"]: "M0 21h30v15H0z",}));el.appendChild(svg["path"]("M4.5 1c-1.567 0-3.061.086-4.5.235v23.416c13.81 13.743 6.846-.189 6.846-.189 4.692 4.692 18.769 4.692 18.769 4.692L29.038 36h5.28c.424-2.252.682-5.332.682-9.192C35 15.077 23.269 1 4.5 1z", {["fill"]: "#E95F28",["d"]: "M4.5 1c-1.567 0-3.061.086-4.5.235v23.416c13.81 13.743 6.846-.189 6.846-.189 4.692 4.692 18.769 4.692 18.769 4.692L29.038 36h5.28c.424-2.252.682-5.332.682-9.192C35 15.077 23.269 1 4.5 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};