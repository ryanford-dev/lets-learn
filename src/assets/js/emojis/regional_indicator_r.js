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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M10.777 9.342c0-1.488.837-2.418 2.388-2.418h5.457c4.775 0 7.72 2.14 7.72 7.007 0 3.411-2.573 5.364-5.736 5.86l5.272 5.644c.433.465.619.93.619 1.364 0 1.209-.961 2.387-2.324 2.387-.559 0-1.303-.217-1.799-.806l-6.883-8.341h-.062v6.728c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342zm4.651 7.348h3.193c1.705 0 2.884-1.023 2.884-2.759 0-1.767-1.18-2.729-2.884-2.729h-3.193v5.488z", {["fill"]: "#FFF",["d"]: "M10.777 9.342c0-1.488.837-2.418 2.388-2.418h5.457c4.775 0 7.72 2.14 7.72 7.007 0 3.411-2.573 5.364-5.736 5.86l5.272 5.644c.433.465.619.93.619 1.364 0 1.209-.961 2.387-2.324 2.387-.559 0-1.303-.217-1.799-.806l-6.883-8.341h-.062v6.728c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342zm4.651 7.348h3.193c1.705 0 2.884-1.023 2.884-2.759 0-1.767-1.18-2.729-2.884-2.729h-3.193v5.488z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};