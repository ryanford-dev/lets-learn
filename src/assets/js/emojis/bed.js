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
				el.appendChild(svg["path"]("M1 28h34v5H1z", {["fill"]: "#C1694F",["d"]: "M1 28h34v5H1z",}));el.appendChild(svg["path"]("M36 35c0 .553-.447 1-1 1-.553 0-1-.447-1-1V21c0-.553.447-1 1-1 .553 0 1 .447 1 1v14zM0 35c0 .553.447 1 1 1 .553 0 1-.447 1-1V13c0-.552-.447-1-1-1-.553 0-1 .448-1 1v22z", {["fill"]: "#C1694F",["d"]: "M36 35c0 .553-.447 1-1 1-.553 0-1-.447-1-1V21c0-.553.447-1 1-1 .553 0 1 .447 1 1v14zM0 35c0 .553.447 1 1 1 .553 0 1-.447 1-1V13c0-.552-.447-1-1-1-.553 0-1 .448-1 1v22z",}));el.appendChild(svg["path"]("M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z", {["fill"]: "#269",["d"]: "M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z", {["fill"]: "#55ACEE",["d"]: "M32 23H4c-1.104 0-2 .896-2 2v4h32v-4c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M2.126 19.938c-.261 1.073 1.485 2.419 3.9 3.006 2.415.587 4.584.192 4.846-.881.261-1.073-1.485-2.419-3.9-3.007-2.415-.587-4.585-.192-4.846.882z", {["fill"]: "#5C913B",["d"]: "M2.126 19.938c-.261 1.073 1.485 2.419 3.9 3.006 2.415.587 4.584.192 4.846-.881.261-1.073-1.485-2.419-3.9-3.007-2.415-.587-4.585-.192-4.846.882z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};