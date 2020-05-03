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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#12AD2B",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M8.173 13.5H36v9H8.173z", {["fill"]: "#FFCE00",["d"]: "M8.173 13.5H36v9H8.173z",}));el.appendChild(svg["path"]("M1.149 6.195C.438 6.917 0 7.907 0 9v18c0 1.093.438 2.083 1.148 2.805L12.5 18 1.149 6.195z", {["fill"]: "#D21034",["d"]: "M1.149 6.195C.438 6.917 0 7.907 0 9v18c0 1.093.438 2.083 1.148 2.805L12.5 18 1.149 6.195z",}));el.appendChild(svg["path"]("M18.004 20.36l1.625-1.181 1.624 1.181-.62-1.91 1.624-1.181h-2.008l-.62-1.909-.621 1.909H17l1.625 1.181zm9.5 0l1.625-1.181 1.624 1.181-.62-1.91 1.624-1.181h-2.008l-.62-1.909-.621 1.909H26.5l1.625 1.181z", {["d"]: "M18.004 20.36l1.625-1.181 1.624 1.181-.62-1.91 1.624-1.181h-2.008l-.62-1.909-.621 1.909H17l1.625 1.181zm9.5 0l1.625-1.181 1.624 1.181-.62-1.91 1.624-1.181h-2.008l-.62-1.909-.621 1.909H26.5l1.625 1.181z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};