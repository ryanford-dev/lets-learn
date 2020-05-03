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
				el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 1.104.448 2.104 1.172 2.828L26 5H4z", {["fill"]: "#009543",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 1.104.448 2.104 1.172 2.828L26 5H4z",}));el.appendChild(svg["path"]("M32 5h-6L1.172 29.828C1.896 30.552 2.896 31 4 31h6L34.828 6.172C34.104 5.448 33.104 5 32 5z", {["fill"]: "#FBDE4A",["d"]: "M32 5h-6L1.172 29.828C1.896 30.552 2.896 31 4 31h6L34.828 6.172C34.104 5.448 33.104 5 32 5z",}));el.appendChild(svg["path"]("M10 31h22c2.209 0 4-1.791 4-4V9c0-1.104-.448-2.104-1.172-2.828L10 31z", {["fill"]: "#DC241F",["d"]: "M10 31h22c2.209 0 4-1.791 4-4V9c0-1.104-.448-2.104-1.172-2.828L10 31z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};