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
				el.appendChild(svg["path"]("M35.059 18c0 3.304-7.642 11-17.067 11C8.566 29 .925 22.249.925 18c0-3.313 7.642-11 17.067-11s17.067 7.686 17.067 11z", {["fill"]: "#99AAB5",["d"]: "M35.059 18c0 3.304-7.642 11-17.067 11C8.566 29 .925 22.249.925 18c0-3.313 7.642-11 17.067-11s17.067 7.686 17.067 11z",}));el.appendChild(svg["path"]("M33.817 18c0 2.904-7.087 9.667-15.826 9.667-8.74 0-15.825-5.935-15.825-9.667 0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18z", {["fill"]: "#F5F8FA",["d"]: "M33.817 18c0 2.904-7.087 9.667-15.826 9.667-8.74 0-15.825-5.935-15.825-9.667 0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18z",}));el.appendChild(svg["circle"](18, 18, 16.916, {["cy"]: "18",["r"]: "8.458",["fill"]: "#55ACEE",["cx"]: "18",}));el.appendChild(svg["circle"](18, 18, 9.416, {["cy"]: "18",["r"]: "4.708",["fill"]: "#292F33",["cx"]: "18",}));el.appendChild(svg["circle"](21, 15, 4, {["cy"]: "15",["r"]: "2",["fill"]: "#F5F8FA",["cx"]: "21",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};