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
				el.appendChild(svg["path"]("M12 3l-9 8.985V24l9 9h12l9-9V11.985L24 3z", {["fill"]: "#DD2E44",["d"]: "M12 3l-9 8.985V24l9 9h12l9-9V11.985L24 3z",}));el.appendChild(svg["path"]("M24.827 1H11.173L1 11.156v13.672L11.172 35h13.657L35 24.828V11.156L24.827 1zM33 24l-9 9H12l-9-9V11.985L12 3h12l9 8.985V24z", {["fill"]: "#CCD6DD",["d"]: "M24.827 1H11.173L1 11.156v13.672L11.172 35h13.657L35 24.828V11.156L24.827 1zM33 24l-9 9H12l-9-9V11.985L12 3h12l9 8.985V24z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};