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
				el.appendChild(svg["path"]("M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z", {["fill"]: "#FFCC4D",["d"]: "M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z",}));el.appendChild(svg["path"]("M15.583 28.953c0-1.333 1.085-2.418 2.419-2.418 1.333 0 2.418 1.085 2.418 2.418 0 1.334-1.086 2.419-2.418 2.419-1.334 0-2.419-1.085-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108 1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108-1.271 0-2.232-.807-2.232-2.108V10.66z", {["fill"]: "#231F20",["d"]: "M15.583 28.953c0-1.333 1.085-2.418 2.419-2.418 1.333 0 2.418 1.085 2.418 2.418 0 1.334-1.086 2.419-2.418 2.419-1.334 0-2.419-1.085-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108 1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108-1.271 0-2.232-.807-2.232-2.108V10.66z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};