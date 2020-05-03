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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#EA596E",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M18 22.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm0-14c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z", {["fill"]: "#FFF",["d"]: "M18 22.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm0-14c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z",}));el.appendChild(svg["path"]("M18 31.5c-.829 0-1.5-.672-1.5-1.5v-9c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v9c0 .828-.671 1.5-1.5 1.5z", {["fill"]: "#FFF",["d"]: "M18 31.5c-.829 0-1.5-.672-1.5-1.5v-9c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v9c0 .828-.671 1.5-1.5 1.5z",}));el.appendChild(svg["path"]("M22.875 27.5h-9.75c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h9.75c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5z", {["fill"]: "#FFF",["d"]: "M22.875 27.5h-9.75c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5h9.75c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};