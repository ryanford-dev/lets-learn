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
				el.appendChild(svg["path"]("M14 28h9v8h-9z", {["fill"]: "#66757F",["d"]: "M14 28h9v8h-9z",}));el.appendChild(svg["path"]("M31 25c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v21z", {["fill"]: "#DD2E44",["d"]: "M31 25c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v21z",}));el.appendChild(svg["path"]("M7 8V6s0-2 2-2h18s2 0 2 2v2H7z", {["fill"]: "#A0041E",["d"]: "M7 8V6s0-2 2-2h18s2 0 2 2v2H7z",}));el.appendChild(svg["path"]("M27 12H9s-2 0-2-2V7h22v3c0 2-2 2-2 2z", {["fill"]: "#292F33",["d"]: "M27 12H9s-2 0-2-2V7h22v3c0 2-2 2-2 2z",}));el.appendChild(svg["path"]("M11 7v14s0 2 2 2h10s2 0 2-2V7H11z", {["fill"]: "#E1E8ED",["d"]: "M11 7v14s0 2 2 2h10s2 0 2-2V7H11z",}));el.appendChild(svg["path"]("M13 23h9.22c-1.847-2.365-6.425-8.205-7.22-9-1-1 0-2 0-2l5-5h-9v14s0 2 2 2z", {["fill"]: "#CCD6DD",["d"]: "M13 23h9.22c-1.847-2.365-6.425-8.205-7.22-9-1-1 0-2 0-2l5-5h-9v14s0 2 2 2z",}));el.appendChild(svg["path"]("M15 14c.795.795 5.373 6.635 7.22 9H23s.404-.01.848-.19L16 13l6-6h-2l-5 5s-1 1 0 2z", {["fill"]: "#66757F",["d"]: "M15 14c.795.795 5.373 6.635 7.22 9H23s.404-.01.848-.19L16 13l6-6h-2l-5 5s-1 1 0 2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};