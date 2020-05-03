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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M12.513 9.342c0-1.271.868-2.418 2.419-2.418h7.937c1.365 0 2.078 1.054 2.078 2.14 0 1.054-.683 2.139-2.078 2.139h-5.705v4.527h4.806c1.488 0 2.232 1.054 2.232 2.108 0 1.085-.744 2.17-2.232 2.17h-4.806v6.76c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342z", {["fill"]: "#FFF",["d"]: "M12.513 9.342c0-1.271.868-2.418 2.419-2.418h7.937c1.365 0 2.078 1.054 2.078 2.14 0 1.054-.683 2.139-2.078 2.139h-5.705v4.527h4.806c1.488 0 2.232 1.054 2.232 2.108 0 1.085-.744 2.17-2.232 2.17h-4.806v6.76c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};