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
				el.appendChild(svg["path"]("M31 15c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h22c1.104 0 2 .896 2 2v8z", {["fill"]: "#FDCB58",["d"]: "M31 15c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2V7c0-1.104.896-2 2-2h22c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M33 19c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v8z", {["fill"]: "#FDD888",["d"]: "M33 19c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h26c1.104 0 2 .896 2 2v8z",}));el.appendChild(svg["path"]("M35 33c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h30c1.104 0 2 .896 2 2v18z", {["fill"]: "#FEE7B8",["d"]: "M35 33c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h30c1.104 0 2 .896 2 2v18z",}));el.appendChild(svg["path"]("M11 14zm0 0z", {["fill"]: "#67757F",["d"]: "M11 14zm0 0z",}));el.appendChild(svg["path"]("M23 3h-5c-1.104 0-2 .895-2 2v1h2c1.104 0 2 .896 2 2h3c1.104 0 2-.896 2-2V5c0-1.105-.896-2-2-2z", {["fill"]: "#78B159",["d"]: "M23 3h-5c-1.104 0-2 .895-2 2v1h2c1.104 0 2 .896 2 2h3c1.104 0 2-.896 2-2V5c0-1.105-.896-2-2-2z",}));el.appendChild(svg["path"]("M17 7h-5c-1.104 0-2 .896-2 2v1h2c1.104 0 2 .896 2 2h3c1.104 0 2-.896 2-2V9c0-1.104-.896-2-2-2z", {["fill"]: "#F18F26",["d"]: "M17 7h-5c-1.104 0-2 .896-2 2v1h2c1.104 0 2 .896 2 2h3c1.104 0 2-.896 2-2V9c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M13 14c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v1z", {["fill"]: "#9268CA",["d"]: "M13 14c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h5c1.104 0 2 .896 2 2v1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};