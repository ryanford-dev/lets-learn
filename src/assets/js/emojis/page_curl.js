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
				el.appendChild(svg["path"]("M28 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.875-4-8V4c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v28z", {["fill"]: "#CCD6DD",["d"]: "M28 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.875-4-8V4c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M31 36H4c4 0 4-8 4-8 0-2.209 1.791-4 4-4h20c2.209 0 4 2 4 4 0 0 .25 8-5 8z", {["fill"]: "#E1E8ED",["d"]: "M31 36H4c4 0 4-8 4-8 0-2.209 1.791-4 4-4h20c2.209 0 4 2 4 4 0 0 .25 8-5 8z",}));el.appendChild(svg["path"]("M24 7c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1z", {["fill"]: "#99AAB5",["d"]: "M24 7c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .552-.447 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h18c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h18c.553 0 1 .447 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};