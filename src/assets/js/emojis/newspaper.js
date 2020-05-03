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
				el.appendChild(svg["path"]("M33 36H4c4 0 3-9 3-9 0-2.209 1.791-15 4-15h21s4 0 4 4v17s0 3-3 3z", {["fill"]: "#99AAB5",["d"]: "M33 36H4c4 0 3-9 3-9 0-2.209 1.791-15 4-15h21s4 0 4 4v17s0 3-3 3z",}));el.appendChild(svg["path"]("M30 33c0 3 3 3 3 3H3s-3 0-3-4V4c0-2.209 1.791-4 4-4h22c2.209 0 4 1.791 4 4v29z", {["fill"]: "#CCD6DD",["d"]: "M30 33c0 3 3 3 3 3H3s-3 0-3-4V4c0-2.209 1.791-4 4-4h22c2.209 0 4 1.791 4 4v29z",}));el.appendChild(svg["path"]("M27 20c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0-4c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0-4c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0 12c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zM25 9s2 0 2-2V5s0-2-2-2H5S3 3 3 5v2s0 2 2 2h20z", {["fill"]: "#99AAB5",["d"]: "M27 20c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0-4c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0-4c0 .553-.447 1-1 1h-8c-.552 0-1-.447-1-1 0-.553.448-1 1-1h8c.553 0 1 .447 1 1zm0 12c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zm0 4c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1 0-.553.448-1 1-1h22c.553 0 1 .447 1 1zM25 9s2 0 2-2V5s0-2-2-2H5S3 3 3 5v2s0 2 2 2h20z",}));el.appendChild(svg["path"]("M13 21s2 0 2-2v-6s0-2-2-2H5s-2 0-2 2v6s0 2 2 2h8z", {["fill"]: "#55ACEE",["d"]: "M13 21s2 0 2-2v-6s0-2-2-2H5s-2 0-2 2v6s0 2 2 2h8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};