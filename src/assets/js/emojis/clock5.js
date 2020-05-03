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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#99AAB5",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 28, {["cy"]: "18",["r"]: "14",["fill"]: "#E1E8ED",["cx"]: "18",}));el.appendChild(svg["path"]("M19 18c0 .553-.447 1-1 1-.552 0-1-.447-1-1V7c0-.552.448-1 1-1 .553 0 1 .448 1 1v11z", {["fill"]: "#66757F",["d"]: "M19 18c0 .553-.447 1-1 1-.552 0-1-.447-1-1V7c0-.552.448-1 1-1 .553 0 1 .448 1 1v11z",}));el.appendChild(svg["path"]("M23 26.661c-.479.276-1.09.112-1.367-.366l-4.5-7.795c-.276-.478-.112-1.089.366-1.365s1.089-.112 1.366.365l4.5 7.795c.277.478.113 1.09-.365 1.366z", {["fill"]: "#66757F",["d"]: "M23 26.661c-.479.276-1.09.112-1.367-.366l-4.5-7.795c-.276-.478-.112-1.089.366-1.365s1.089-.112 1.366.365l4.5 7.795c.277.478.113 1.09-.365 1.366z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};