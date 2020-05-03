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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#DD2E44",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M6.993 18.001c0-6.656 4.48-11.776 11.007-11.776 6.432 0 11.008 5.28 11.008 11.776 0 6.623-4.449 11.774-11.008 11.774-6.496 0-11.007-5.151-11.007-11.774zm17.023 0c0-3.872-2.016-7.36-6.016-7.36s-6.015 3.488-6.015 7.36c0 3.903 1.952 7.359 6.015 7.359 4.065 0 6.016-3.456 6.016-7.359z", {["fill"]: "#FFF",["d"]: "M6.993 18.001c0-6.656 4.48-11.776 11.007-11.776 6.432 0 11.008 5.28 11.008 11.776 0 6.623-4.449 11.774-11.008 11.774-6.496 0-11.007-5.151-11.007-11.774zm17.023 0c0-3.872-2.016-7.36-6.016-7.36s-6.015 3.488-6.015 7.36c0 3.903 1.952 7.359 6.015 7.359 4.065 0 6.016-3.456 6.016-7.359z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};