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
				el.appendChild(svg["path"]("M35 18c0-9.389-7.611-17-17-17S1 8.611 1 18s7.611 17 17 17 17-7.611 17-17z", {["d"]: "M35 18c0-9.389-7.611-17-17-17S1 8.611 1 18s7.611 17 17 17 17-7.611 17-17z",}));el.appendChild(svg["path"]("M13 31s-3 0-3-3V8s0-3 3-3h10s3 0 3 3v20s0 3-3 3H13z", {["fill"]: "#FFF",["d"]: "M13 31s-3 0-3-3V8s0-3 3-3h10s3 0 3 3v20s0 3-3 3H13z",}));el.appendChild(svg["path"]("M12 9h12v18H12z", {["d"]: "M12 9h12v18H12z",}));el.appendChild(svg["path"]("M18 0C8.06 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 34C9.164 34 2 26.837 2 18c0-3.712 1.276-7.121 3.397-9.835l22.437 22.437C25.12 32.725 21.713 34 18 34zm11.68-5.088L7.089 6.321C9.948 3.648 13.777 2 18 2c8.837 0 16 7.163 16 16 0 4.223-1.648 8.053-4.32 10.912z", {["fill"]: "#DD2E44",["d"]: "M18 0C8.06 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm0 34C9.164 34 2 26.837 2 18c0-3.712 1.276-7.121 3.397-9.835l22.437 22.437C25.12 32.725 21.713 34 18 34zm11.68-5.088L7.089 6.321C9.948 3.648 13.777 2 18 2c8.837 0 16 7.163 16 16 0 4.223-1.648 8.053-4.32 10.912z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};