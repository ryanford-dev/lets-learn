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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M24.125 9.652c0 1.209-.806 2.294-2.076 2.294-1.271 0-2.264-.93-4.125-.93-1.333 0-2.542.713-2.542 2.016 0 3.193 10.357 1.147 10.357 9.146 0 4.434-3.659 7.193-7.938 7.193-2.388 0-7.534-.558-7.534-3.473 0-1.209.806-2.201 2.077-2.201 1.457 0 3.193 1.209 5.209 1.209 2.046 0 3.163-1.147 3.163-2.667 0-3.658-10.356-1.457-10.356-8.65 0-4.341 3.565-7.038 7.689-7.038 1.736.001 6.076.652 6.076 3.101z", {["fill"]: "#FFF",["d"]: "M24.125 9.652c0 1.209-.806 2.294-2.076 2.294-1.271 0-2.264-.93-4.125-.93-1.333 0-2.542.713-2.542 2.016 0 3.193 10.357 1.147 10.357 9.146 0 4.434-3.659 7.193-7.938 7.193-2.388 0-7.534-.558-7.534-3.473 0-1.209.806-2.201 2.077-2.201 1.457 0 3.193 1.209 5.209 1.209 2.046 0 3.163-1.147 3.163-2.667 0-3.658-10.356-1.457-10.356-8.65 0-4.341 3.565-7.038 7.689-7.038 1.736.001 6.076.652 6.076 3.101z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};