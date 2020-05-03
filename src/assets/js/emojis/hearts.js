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
				el.appendChild(svg["path"]("M2.067 11.319C2.067 2.521 14.251-.74 18 9.445 21.749-.741 33.933 2.52 33.933 11.319 33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319z", {["fill"]: "#BE1931",["d"]: "M2.067 11.319C2.067 2.521 14.251-.74 18 9.445 21.749-.741 33.933 2.52 33.933 11.319 33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};