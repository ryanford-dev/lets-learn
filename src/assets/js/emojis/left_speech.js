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
				el.appendChild(svg["path"]("M18 1c9.941 0 18 6.268 18 14 0 4.368-2.574 8.268-6.604 10.835C29.92 28.144 31.141 31.569 34 35c-5.758-.96-9.44-3.761-11.716-6.416-1.376.262-2.805.416-4.284.416-9.941 0-18-6.268-18-14S8.059 1 18 1z", {["fill"]: "#8CCAF7",["d"]: "M18 1c9.941 0 18 6.268 18 14 0 4.368-2.574 8.268-6.604 10.835C29.92 28.144 31.141 31.569 34 35c-5.758-.96-9.44-3.761-11.716-6.416-1.376.262-2.805.416-4.284.416-9.941 0-18-6.268-18-14S8.059 1 18 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};