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
				el.appendChild(svg["path"]("M29 12c-4.688-3.515-6-6-8-6s-2 1-3 1-1-1-3-1-3.313 2.485-8 6c-4 3-7 3-7 5s5 6 8 9c2 2 5 4 10 4s8-2 10-4c3-3 8-7 8-9s-3-2-7-5z", {["fill"]: "#E75A70",["d"]: "M29 12c-4.688-3.515-6-6-8-6s-2 1-3 1-1-1-3-1-3.313 2.485-8 6c-4 3-7 3-7 5s5 6 8 9c2 2 5 4 10 4s8-2 10-4c3-3 8-7 8-9s-3-2-7-5z",}));el.appendChild(svg["path"]("M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083C3.833 16.75 1 16.167 1 17c0 .834 9 5 17 5s17-4.166 17-5c0-.833-2.834-.25-6.611-1.5z", {["fill"]: "#662113",["d"]: "M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083C3.833 16.75 1 16.167 1 17c0 .834 9 5 17 5s17-4.166 17-5c0-.833-2.834-.25-6.611-1.5z",}));el.appendChild(svg["path"]("M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083c-3.624 1.199-6.371.715-6.59 1.408 2.454.385 9.119-.644 16.979-.644s14.524 1.029 16.979.644c-.219-.693-2.967-.209-6.59-1.408z", {["fill"]: "#FFF",["d"]: "M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083c-3.624 1.199-6.371.715-6.59 1.408 2.454.385 9.119-.644 16.979-.644s14.524 1.029 16.979.644c-.219-.693-2.967-.209-6.59-1.408z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};