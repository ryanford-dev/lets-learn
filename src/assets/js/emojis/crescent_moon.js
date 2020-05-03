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
				el.appendChild(svg["path"]("M30.312.776C32 19 20 32 .776 30.312c8.199 7.717 21.091 7.588 29.107-.429C37.9 21.867 38.03 8.975 30.312.776z", {["fill"]: "#FFD983",["d"]: "M30.312.776C32 19 20 32 .776 30.312c8.199 7.717 21.091 7.588 29.107-.429C37.9 21.867 38.03 8.975 30.312.776z",}));el.appendChild(svg["path"]("M30.705 15.915c-.453.454-.453 1.189 0 1.644.454.453 1.189.453 1.643 0 .454-.455.455-1.19 0-1.644-.453-.454-1.189-.454-1.643 0zm-16.022 14.38c-.682.681-.682 1.783 0 2.465.68.682 1.784.682 2.464 0 .681-.682.681-1.784 0-2.465-.68-.682-1.784-.682-2.464 0zm13.968-2.147c-1.135 1.135-2.974 1.135-4.108 0-1.135-1.135-1.135-2.975 0-4.107 1.135-1.136 2.974-1.136 4.108 0 1.135 1.133 1.135 2.973 0 4.107z", {["d"]: "M30.705 15.915c-.453.454-.453 1.189 0 1.644.454.453 1.189.453 1.643 0 .454-.455.455-1.19 0-1.644-.453-.454-1.189-.454-1.643 0zm-16.022 14.38c-.682.681-.682 1.783 0 2.465.68.682 1.784.682 2.464 0 .681-.682.681-1.784 0-2.465-.68-.682-1.784-.682-2.464 0zm13.968-2.147c-1.135 1.135-2.974 1.135-4.108 0-1.135-1.135-1.135-2.975 0-4.107 1.135-1.136 2.974-1.136 4.108 0 1.135 1.133 1.135 2.973 0 4.107z",["fill"]: "#FFCC4D",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};