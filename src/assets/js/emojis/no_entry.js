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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z", {["fill"]: "#BE1931",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z",}));el.appendChild(svg["path"]("M32 20c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v4z", {["fill"]: "#FFF",["d"]: "M32 20c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};