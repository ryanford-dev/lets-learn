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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M8.591 9.156c0-1.55.992-2.418 2.326-2.418.589 0 1.55.465 1.954 1.023L22.7 20.877h.062V9.156c0-1.55.992-2.418 2.324-2.418 1.334 0 2.326.868 2.326 2.418v17.611c0 1.551-.992 2.418-2.326 2.418-.588 0-1.518-.465-1.953-1.022l-9.829-12.961h-.062v11.565c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.156z", {["fill"]: "#FFF",["d"]: "M8.591 9.156c0-1.55.992-2.418 2.326-2.418.589 0 1.55.465 1.954 1.023L22.7 20.877h.062V9.156c0-1.55.992-2.418 2.324-2.418 1.334 0 2.326.868 2.326 2.418v17.611c0 1.551-.992 2.418-2.326 2.418-.588 0-1.518-.465-1.953-1.022l-9.829-12.961h-.062v11.565c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.156z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};