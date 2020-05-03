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
				el.appendChild(svg["path"]("M6 4c3 0 5 2 8 6s7.957 7.191 12 8c5 1 9 5 9 11 0 4.897-3.846 7-9 7-5 0-9-3-14-8S2 14 2 10s1-6 4-6z", {["fill"]: "#744EAA",["d"]: "M6 4c3 0 5 2 8 6s7.957 7.191 12 8c5 1 9 5 9 11 0 4.897-3.846 7-9 7-5 0-9-3-14-8S2 14 2 10s1-6 4-6z",}));el.appendChild(svg["path"]("M3.515 0c1.248 0 1.248 1.248 1.248 2.495 0 1.764 1.248 1.129 2.496 1.129C8.505 3.624 11 6 11 6H7.258c-1.248 0 0 2.614-1.248 2.614S4.762 7.426 3.515 7.426 2 11 2 11s-1.604-4.153.267-6.024C3.515 3.728 1.02 0 3.515 0z", {["fill"]: "#77B255",["d"]: "M3.515 0c1.248 0 1.248 1.248 1.248 2.495 0 1.764 1.248 1.129 2.496 1.129C8.505 3.624 11 6 11 6H7.258c-1.248 0 0 2.614-1.248 2.614S4.762 7.426 3.515 7.426 2 11 2 11s-1.604-4.153.267-6.024C3.515 3.728 1.02 0 3.515 0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};