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
				el.appendChild(svg["circle"](18, 6, 12, {["cy"]: "6",["r"]: "6",["fill"]: "#CCD6DD",["cx"]: "18",}));el.appendChild(svg["path"]("M11 12h14v21H11z", {["fill"]: "#FFF",["d"]: "M11 12h14v21H11z",}));el.appendChild(svg["path"]("M11 28.487L20.251 33H25v-2.134l-14-6.83z", {["fill"]: "#DD2E44",["d"]: "M11 28.487L20.251 33H25v-2.134l-14-6.83z",}));el.appendChild(svg["path"]("M11 19.585l14 6.83v-4.45l-14-6.831z", {["fill"]: "#55ACEE",["d"]: "M11 19.585l14 6.83v-4.45l-14-6.831z",}));el.appendChild(svg["path"]("M13.697 12L25 17.514V12z", {["fill"]: "#DD2E44",["d"]: "M13.697 12L25 17.514V12z",}));el.appendChild(svg["path"]("M27 11c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2s.896-2 2-2h14c1.104 0 2 .896 2 2zm0 23c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2s.896-2 2-2h14c1.104 0 2 .896 2 2z", {["fill"]: "#99AAB5",["d"]: "M27 11c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2s.896-2 2-2h14c1.104 0 2 .896 2 2zm0 23c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2s.896-2 2-2h14c1.104 0 2 .896 2 2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};