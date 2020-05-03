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
				el.appendChild(svg["path"]("M27 19.276c-.983 0-1.893.294-2.667.784v4.549h-2.3c.175 2.603 2.319 4.667 4.966 4.667 2.761 0 5-2.239 5-5v-5H27z", {["fill"]: "#55ACEE",["d"]: "M27 19.276c-.983 0-1.893.294-2.667.784v4.549h-2.3c.175 2.603 2.319 4.667 4.966 4.667 2.761 0 5-2.239 5-5v-5H27z",}));el.appendChild(svg["path"]("M22.995 22.999l.005-16 9 .003-.005 16z", {["fill"]: "#1C6399",["d"]: "M22.995 22.999l.005-16 9 .003-.005 16z",}));el.appendChild(svg["path"]("M24.202 21.451l6.354 6.354-6.878 6.878-6.354-6.354z", {["fill"]: "#1C6399",["d"]: "M24.202 21.451l6.354 6.354-6.878 6.878-6.354-6.354z",}));el.appendChild(svg["path"]("M30 4h-5c-1.1 0-2 .9-2 2v2h9V6c0-1.1-.9-2-2-2zM15 15.276c-.983 0-1.893.294-2.667.784v4.549h-2.3c.175 2.603 2.319 4.667 4.966 4.667 2.761 0 5-2.239 5-5v-5H15z", {["fill"]: "#55ACEE",["d"]: "M30 4h-5c-1.1 0-2 .9-2 2v2h9V6c0-1.1-.9-2-2-2zM15 15.276c-.983 0-1.893.294-2.667.784v4.549h-2.3c.175 2.603 2.319 4.667 4.966 4.667 2.761 0 5-2.239 5-5v-5H15z",}));el.appendChild(svg["path"]("M10.994 18.999l.006-16 9 .003-.006 16z", {["fill"]: "#1C6399",["d"]: "M10.994 18.999l.006-16 9 .003-.006 16z",}));el.appendChild(svg["path"]("M23.676 34.682c-1.757 1.757-4.607 1.757-6.364 0s-1.757-4.607 0-6.364c0 0 1.149.133 3.69 2.674s2.674 3.69 2.674 3.69zM18 0h-5c-1.1 0-2 .9-2 2v2h9V2c0-1.1-.9-2-2-2z", {["fill"]: "#55ACEE",["d"]: "M23.676 34.682c-1.757 1.757-4.607 1.757-6.364 0s-1.757-4.607 0-6.364c0 0 1.149.133 3.69 2.674s2.674 3.69 2.674 3.69zM18 0h-5c-1.1 0-2 .9-2 2v2h9V2c0-1.1-.9-2-2-2z",}));el.appendChild(svg["path"]("M12.202 17.451l6.354 6.354-6.878 6.878-6.354-6.354z", {["fill"]: "#1C6399",["d"]: "M12.202 17.451l6.354 6.354-6.878 6.878-6.354-6.354z",}));el.appendChild(svg["path"]("M11.676 30.682c-1.757 1.757-4.607 1.757-6.364 0s-1.757-4.607 0-6.364c0 0 1.149.133 3.69 2.674s2.674 3.69 2.674 3.69z", {["fill"]: "#55ACEE",["d"]: "M11.676 30.682c-1.757 1.757-4.607 1.757-6.364 0s-1.757-4.607 0-6.364c0 0 1.149.133 3.69 2.674s2.674 3.69 2.674 3.69z",}));el.appendChild(svg["path"]("M22.994 10.067h9v2h-9zm0 4h9v2h-9zm-12-8h9v2h-9zm0 4h9v2h-9z", {["fill"]: "#FFCC4D",["d"]: "M22.994 10.067h9v2h-9zm0 4h9v2h-9zm-12-8h9v2h-9zm0 4h9v2h-9z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};