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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M12.792 9.156c0-1.55.992-2.418 2.325-2.418 1.333 0 2.325.868 2.325 2.418V24.72h5.52c1.58 0 2.263 1.179 2.232 2.232-.061 1.025-.868 2.048-2.231 2.048H15.21c-1.519 0-2.418-.992-2.418-2.543V9.156z", {["fill"]: "#FFF",["d"]: "M12.792 9.156c0-1.55.992-2.418 2.325-2.418 1.333 0 2.325.868 2.325 2.418V24.72h5.52c1.58 0 2.263 1.179 2.232 2.232-.061 1.025-.868 2.048-2.231 2.048H15.21c-1.519 0-2.418-.992-2.418-2.543V9.156z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};