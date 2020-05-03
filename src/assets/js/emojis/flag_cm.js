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
				el.appendChild(svg["path"]("M12 5v26h12V5H12zm7.882 15.59L18 19.223l-1.882 1.367.719-2.212-1.882-1.367h2.326L18 14.798l.719 2.212h2.326l-1.882 1.367.719 2.213z", {["fill"]: "#CC212D",["d"]: "M12 5v26h12V5H12zm7.882 15.59L18 19.223l-1.882 1.367.719-2.212-1.882-1.367h2.326L18 14.798l.719 2.212h2.326l-1.882 1.367.719 2.213z",}));el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z", {["fill"]: "#288541",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z",}));el.appendChild(svg["path"]("M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4zM18.719 17.011L18 14.798l-.719 2.213h-2.326l1.882 1.367-.719 2.212L18 19.223l1.882 1.367-.719-2.212 1.882-1.367z", {["fill"]: "#FEE833",["d"]: "M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4zM18.719 17.011L18 14.798l-.719 2.213h-2.326l1.882 1.367-.719 2.212L18 19.223l1.882 1.367-.719-2.212 1.882-1.367z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};