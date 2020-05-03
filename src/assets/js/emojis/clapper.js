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
				el.appendChild(svg["path"]("M35.845 32c0 2.2-1.8 4-4 4h-26c-2.2 0-4-1.8-4-4V19c0-2.2 1.8-4 4-4h26c2.2 0 4 1.8 4 4v13z", {["fill"]: "#3F7123",["d"]: "M35.845 32c0 2.2-1.8 4-4 4h-26c-2.2 0-4-1.8-4-4V19c0-2.2 1.8-4 4-4h26c2.2 0 4 1.8 4 4v13z",}));el.appendChild(svg["path"]("M1.845 15h34v6h-34z", {["fill"]: "#3F7123",["d"]: "M1.845 15h34v6h-34z",}));el.appendChild(svg["path"]("M1.845 15h34v7h-34z", {["fill"]: "#CCD6DD",["d"]: "M1.845 15h34v7h-34z",}));el.appendChild(svg["path"]("M1.845 15h4l-4 7v-7zm11 0l-4 7h7l4-7h-7zm14 0l-4 7h7l4-7h-7z", {["fill"]: "#292F33",["d"]: "M1.845 15h4l-4 7v-7zm11 0l-4 7h7l4-7h-7zm14 0l-4 7h7l4-7h-7z",}));el.appendChild(svg["path"]("M.155 8.207L33.148 0l1.69 6.792L1.845 15z", {["fill"]: "#CCD6DD",["d"]: "M.155 8.207L33.148 0l1.69 6.792L1.845 15z",}));el.appendChild(svg["path"]("M.155 8.207l5.572 5.827L1.845 15 .155 8.207zm19.158 2.448l-5.572-5.828-6.793 1.69 5.572 5.828 6.793-1.69zm13.586-3.38l-5.572-5.828-6.793 1.69 5.572 5.827 6.793-1.689z", {["fill"]: "#292F33",["d"]: "M.155 8.207l5.572 5.827L1.845 15 .155 8.207zm19.158 2.448l-5.572-5.828-6.793 1.69 5.572 5.828 6.793-1.69zm13.586-3.38l-5.572-5.828-6.793 1.69 5.572 5.827 6.793-1.689z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};