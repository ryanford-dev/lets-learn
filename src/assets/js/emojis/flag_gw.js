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
				el.appendChild(svg["path"]("M32 5H15v13h21V9c0-2.209-1.791-4-4-4z", {["fill"]: "#FCD116",["d"]: "M32 5H15v13h21V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15 31h17c2.209 0 4-1.791 4-4v-9H15v13z", {["fill"]: "#009E49",["d"]: "M15 31h17c2.209 0 4-1.791 4-4v-9H15v13z",}));el.appendChild(svg["path"]("M15 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h11V5zm-5 17l-2.547-1.851L4.906 22l.973-2.994-2.547-1.851H6.48l.973-2.994.973 2.994h3.148l-2.547 1.851L10 22z", {["fill"]: "#CE1126",["d"]: "M15 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h11V5zm-5 17l-2.547-1.851L4.906 22l.973-2.994-2.547-1.851H6.48l.973-2.994.973 2.994h3.148l-2.547 1.851L10 22z",}));el.appendChild(svg["path"]("M8.426 17.155l-.973-2.994-.973 2.994H3.332l2.547 1.851L4.906 22l2.547-1.851L10 22l-.973-2.994 2.547-1.851z", {["d"]: "M8.426 17.155l-.973-2.994-.973 2.994H3.332l2.547 1.851L4.906 22l2.547-1.851L10 22l-.973-2.994 2.547-1.851z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};