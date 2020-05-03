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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#024FA2",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M0 9h36v1H0zm0 17h36v1H0z", {["fill"]: "#EEE",["d"]: "M0 9h36v1H0zm0 17h36v1H0z",}));el.appendChild(svg["path"]("M0 10h36v16H0z", {["fill"]: "#ED1C27",["d"]: "M0 10h36v16H0z",}));el.appendChild(svg["path"]("M13.278 23.778c3.191 0 5.778-2.587 5.778-5.778s-2.587-5.778-5.778-5.778S7.5 14.809 7.5 18s2.587 5.778 5.778 5.778zm-1.257-7.508l1.257-3.868 1.257 3.868h4.067l-3.29 2.39 1.257 3.868-3.29-2.39-3.29 2.39 1.257-3.868-3.29-2.39h4.065z", {["fill"]: "#FFF",["d"]: "M13.278 23.778c3.191 0 5.778-2.587 5.778-5.778s-2.587-5.778-5.778-5.778S7.5 14.809 7.5 18s2.587 5.778 5.778 5.778zm-1.257-7.508l1.257-3.868 1.257 3.868h4.067l-3.29 2.39 1.257 3.868-3.29-2.39-3.29 2.39 1.257-3.868-3.29-2.39h4.065z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};