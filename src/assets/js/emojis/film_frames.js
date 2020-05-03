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
				el.appendChild(svg["path"]("M29 11h6v14h-6zM1 11h6v14H1zm8 0h18v14H9z", {["d"]: "M29 11h6v14h-6zM1 11h6v14H1zm8 0h18v14H9z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M35 11V6H1v5h6v14H1v5h34v-5h-6V11h6zm-8 14H9V11h18v14z", {["fill"]: "#231F20",["d"]: "M35 11V6H1v5h6v14H1v5h34v-5h-6V11h6zm-8 14H9V11h18v14z",}));el.appendChild(svg["path"]("M31 7h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zM7 7h2v3H7zM3 7h2v3H3zm28 19h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3H7zm-4 0h2v3H3z", {["fill"]: "#F5F8FA",["d"]: "M31 7h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zM7 7h2v3H7zM3 7h2v3H3zm28 19h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3h-2zm-4 0h2v3H7zm-4 0h2v3H3z",}));el.appendChild(svg["path"]("M29 25V11h1v14zM9 25V11h1v14z", {["fill"]: "#88C9F9",["d"]: "M29 25V11h1v14zM9 25V11h1v14z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};