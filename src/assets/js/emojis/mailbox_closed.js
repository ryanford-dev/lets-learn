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
				el.appendChild(svg["path"]("M22 33c0 2.209-8 2.209-8 0V23c0-2.209 1.791-4 4-4s4 1.791 4 4v10z", {["fill"]: "#C1694F",["d"]: "M22 33c0 2.209-8 2.209-8 0V23c0-2.209 1.791-4 4-4s4 1.791 4 4v10z",}));el.appendChild(svg["path"]("M26 3H10v20h24V11c0-4.418-3.582-8-8-8z", {["fill"]: "#99AAB5",["d"]: "M26 3H10v20h24V11c0-4.418-3.582-8-8-8z",}));el.appendChild(svg["path"]("M10 3c-4.418 0-8 3.582-8 8v12h16V11c0-4.418-3.582-8-8-8z", {["fill"]: "#292F33",["d"]: "M10 3c-4.418 0-8 3.582-8 8v12h16V11c0-4.418-3.582-8-8-8z",}));el.appendChild(svg["path"]("M9 3c-3.866 0-7 3.582-7 8v12h14V11c0-4.418-3.134-8-7-8z", {["fill"]: "#99AAB5",["d"]: "M9 3c-3.866 0-7 3.582-7 8v12h14V11c0-4.418-3.134-8-7-8z",}));el.appendChild(svg["path"]("M34 13H22c-1.104 0-2 .896-2 2s.896 2 2 2h8v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-4c0-1.104-.896-2-2-2z", {["fill"]: "#DD2E44",["d"]: "M34 13H22c-1.104 0-2 .896-2 2s.896 2 2 2h8v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-4c0-1.104-.896-2-2-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};