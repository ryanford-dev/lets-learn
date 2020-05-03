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
				el.appendChild(svg["path"]("M13 5H4C1.791 5 0 6.791 0 9v9h13V5zm-4.663 9.292l-1.882-1.367-1.882 1.367.719-2.212-1.882-1.368h2.326L6.455 8.5l.719 2.212H9.5L7.618 12.08l.719 2.212z", {["fill"]: "#1F429B",["d"]: "M13 5H4C1.791 5 0 6.791 0 9v9h13V5zm-4.663 9.292l-1.882-1.367-1.882 1.367.719-2.212-1.882-1.368h2.326L6.455 8.5l.719 2.212H9.5L7.618 12.08l.719 2.212z",}));el.appendChild(svg["path"]("M32 5H13v13h23V9c0-2.209-1.791-4-4-4z", {["fill"]: "#EEE",["d"]: "M32 5H13v13h23V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 18v9c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H0z", {["fill"]: "#D42D27",["d"]: "M0 18v9c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9H0z",}));el.appendChild(svg["path"]("M7.174 10.712L6.455 8.5l-.719 2.212H3.41l1.882 1.368-.719 2.212 1.882-1.367 1.882 1.367-.719-2.212L9.5 10.712z", {["fill"]: "#FFF",["d"]: "M7.174 10.712L6.455 8.5l-.719 2.212H3.41l1.882 1.368-.719 2.212 1.882-1.367 1.882 1.367-.719-2.212L9.5 10.712z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};