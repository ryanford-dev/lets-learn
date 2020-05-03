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
				el.appendChild(svg["path"]("M21 18c0-2.001 3.246-3.369 5-6 2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6z", {["fill"]: "#FFE8B6",["d"]: "M21 18c0-2.001 3.246-3.369 5-6 2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6z",}));el.appendChild(svg["path"]("M18 2h-8s0 4 1 7c1.304 3.912 6 4.999 6 9s0 13 1 13 1-9 1-13 4.697-5.088 6-9c1-3 1-7 1-7h-8z", {["fill"]: "#FFAC33",["d"]: "M18 2h-8s0 4 1 7c1.304 3.912 6 4.999 6 9s0 13 1 13 1-9 1-13 4.697-5.088 6-9c1-3 1-7 1-7h-8z",}));el.appendChild(svg["path"]("M30 34c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2zm0-32c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2z", {["fill"]: "#3B88C3",["d"]: "M30 34c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2zm0-32c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};