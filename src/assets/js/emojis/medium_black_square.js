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
				el.appendChild(svg["path"]("M33 30c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z", {["fill"]: "#31373D",["d"]: "M33 30c0 1.657-1.343 3-3 3H6c-1.657 0-3-1.343-3-3V6c0-1.657 1.343-3 3-3h24c1.657 0 3 1.343 3 3v24z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};