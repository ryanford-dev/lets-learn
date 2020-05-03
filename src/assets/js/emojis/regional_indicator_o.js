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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M7.336 17.962c0-6.449 4.341-11.41 10.666-11.41 6.232 0 10.666 5.116 10.666 11.41 0 6.418-4.31 11.41-10.666 11.41-6.294 0-10.666-4.992-10.666-11.41zm16.496 0c0-3.752-1.954-7.131-5.83-7.131-3.876 0-5.829 3.379-5.829 7.131 0 3.782 1.891 7.132 5.829 7.132 3.938 0 5.83-3.35 5.83-7.132z", {["fill"]: "#FFF",["d"]: "M7.336 17.962c0-6.449 4.341-11.41 10.666-11.41 6.232 0 10.666 5.116 10.666 11.41 0 6.418-4.31 11.41-10.666 11.41-6.294 0-10.666-4.992-10.666-11.41zm16.496 0c0-3.752-1.954-7.131-5.83-7.131-3.876 0-5.829 3.379-5.829 7.131 0 3.782 1.891 7.132 5.829 7.132 3.938 0 5.83-3.35 5.83-7.132z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};