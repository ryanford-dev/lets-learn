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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v2.5h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#003082",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v2.5h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 11.5h36V18H0z", {["fill"]: "#EEE",["d"]: "M0 11.5h36V18H0z",}));el.appendChild(svg["path"]("M0 18h36v6.5H0z", {["fill"]: "#289728",["d"]: "M0 18h36v6.5H0z",}));el.appendChild(svg["path"]("M0 24.5V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2.5H0z", {["fill"]: "#FFCE00",["d"]: "M0 24.5V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2.5H0z",}));el.appendChild(svg["path"]("M15 5h6v26h-6z", {["fill"]: "#D21034",["d"]: "M15 5h6v26h-6z",}));el.appendChild(svg["path"]("M6.878 7.612l-.68-2.094-.681 2.094H3.316l1.781 1.294L4.417 11l1.781-1.294L7.979 11l-.681-2.094L9.08 7.612z", {["fill"]: "#FFCE00",["d"]: "M6.878 7.612l-.68-2.094-.681 2.094H3.316l1.781 1.294L4.417 11l1.781-1.294L7.979 11l-.681-2.094L9.08 7.612z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};