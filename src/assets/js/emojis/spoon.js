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
				el.appendChild(svg["path"]("M24 10c0-4.971-2.91-10-6.5-10S11 5.029 11 10c0 3.744 1.651 6.385 4 7.461V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V17.461c2.349-1.076 4-3.717 4-7.461z", {["fill"]: "#99AAB5",["d"]: "M24 10c0-4.971-2.91-10-6.5-10S11 5.029 11 10c0 3.744 1.651 6.385 4 7.461V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V17.461c2.349-1.076 4-3.717 4-7.461z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};