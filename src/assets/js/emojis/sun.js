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
				el.appendChild(svg["path"]("M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z", {["fill"]: "#FFAC33",["d"]: "M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z",}));el.appendChild(svg["circle"](18, 18, 20, {["cy"]: "18",["r"]: "10",["fill"]: "#FFAC33",["cx"]: "18",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};