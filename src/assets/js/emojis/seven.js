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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M20.357 11.203H12.42c-1.674 0-2.294-1.085-2.294-2.139 0-1.085.589-2.14 2.294-2.14h11.224c1.582 0 2.233 1.426 2.233 2.232 0 .62-.341 1.271-.713 2.046l-7.69 15.627c-.868 1.736-1.209 2.355-2.604 2.355-1.705 0-2.574-1.302-2.574-2.201 0-.372.093-.65.311-1.085l7.75-14.695z", {["fill"]: "#FFF",["d"]: "M20.357 11.203H12.42c-1.674 0-2.294-1.085-2.294-2.139 0-1.085.589-2.14 2.294-2.14h11.224c1.582 0 2.233 1.426 2.233 2.232 0 .62-.341 1.271-.713 2.046l-7.69 15.627c-.868 1.736-1.209 2.355-2.604 2.355-1.705 0-2.574-1.302-2.574-2.201 0-.372.093-.65.311-1.085l7.75-14.695z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};