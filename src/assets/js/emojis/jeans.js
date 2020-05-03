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
				el.appendChild(svg["path"]("M20.182 0H10v4.568L3.818 33.682 11.545 36l6.41-23.182z", {["fill"]: "#3B88C3",["d"]: "M20.182 0H10v4.568L3.818 33.682 11.545 36l6.41-23.182z",}));el.appendChild(svg["path"]("M15.818 0H26v4.568l6.182 29.114L24.454 36l-6.409-23.182z", {["fill"]: "#3B88C3",["d"]: "M15.818 0H26v4.568l6.182 29.114L24.454 36l-6.409-23.182z",}));el.appendChild(svg["path"]("M10 2h16v2H10zm9 10h-2l-4-2h10z", {["fill"]: "#269",["d"]: "M10 2h16v2H10zm9 10h-2l-4-2h10z",}));el.appendChild(svg["path"]("M12 0h2v3h-2zm10 0h2v3h-2zm-6 4h2v7h-2z", {["fill"]: "#269",["d"]: "M12 0h2v3h-2zm10 0h2v3h-2zm-6 4h2v7h-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};