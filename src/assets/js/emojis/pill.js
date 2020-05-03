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
				el.appendChild(svg["path"]("M33.207 19.773l-8.868-8.855L11.105 24.54l8.684 8.685.001-.001C21.509 34.939 23.881 36 26.5 36c5.246 0 9.5-4.254 9.5-9.5 0-2.628-1.068-5.007-2.793-6.727z", {["fill"]: "#BB1A34",["d"]: "M33.207 19.773l-8.868-8.855L11.105 24.54l8.684 8.685.001-.001C21.509 34.939 23.881 36 26.5 36c5.246 0 9.5-4.254 9.5-9.5 0-2.628-1.068-5.007-2.793-6.727z",}));el.appendChild(svg["path"]("M15.921 2.513C14.229.957 11.979 0 9.5 0 4.253 0 0 4.253 0 9.5c0 2.479.958 4.73 2.514 6.421l-.014.014 8.605 8.605 13.234-13.622-8.418-8.405z", {["fill"]: "#FDCB58",["d"]: "M15.921 2.513C14.229.957 11.979 0 9.5 0 4.253 0 0 4.253 0 9.5c0 2.479.958 4.73 2.514 6.421l-.014.014 8.605 8.605 13.234-13.622-8.418-8.405z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};