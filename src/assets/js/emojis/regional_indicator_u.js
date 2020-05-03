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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M8 9.156c0-1.55 1.167-2.418 2.5-2.418s2.5.868 2.5 2.418v10.821c0 2.853 2.055 4.923 5 4.923 2.822 0 5-2.194 5-4.923V9.156c0-1.55 1.168-2.418 2.5-2.418 1.334 0 2.467.868 2.467 2.418v11.069c0 5.209-4.852 9.147-9.967 9.147-5.178 0-10-3.876-10-9.147V9.156z", {["fill"]: "#FFF",["d"]: "M8 9.156c0-1.55 1.167-2.418 2.5-2.418s2.5.868 2.5 2.418v10.821c0 2.853 2.055 4.923 5 4.923 2.822 0 5-2.194 5-4.923V9.156c0-1.55 1.168-2.418 2.5-2.418 1.334 0 2.467.868 2.467 2.418v11.069c0 5.209-4.852 9.147-9.967 9.147-5.178 0-10-3.876-10-9.147V9.156z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};