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
				el.appendChild(svg["path"]("M15 26h6v4h-6z", {["fill"]: "#F4900C",["d"]: "M15 26h6v4h-6z",}));el.appendChild(svg["path"]("M30 18c0 7 3 4 3 7 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-3 3 0 3-7 0-5.523 6.477-8 12-8s12 2.477 12 8z", {["fill"]: "#FFAC33",["d"]: "M30 18c0 7 3 4 3 7 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-3 3 0 3-7 0-5.523 6.477-8 12-8s12 2.477 12 8z",}));el.appendChild(svg["circle"](18, 10, 6, {["cy"]: "10",["r"]: "3",["fill"]: "#FFAC33",["cx"]: "18",}));el.appendChild(svg["path"]("M35 33c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z", {["fill"]: "#C1694F",["d"]: "M35 33c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M33 31c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h26c1.104 0 2 .896 2 2z", {["fill"]: "#C1694F",["d"]: "M33 31c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h26c1.104 0 2 .896 2 2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};