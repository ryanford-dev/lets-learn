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
				el.appendChild(svg["path"]("M34 13c0 1.104-.896 2-2 2h-6c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2zm-22 0c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2z", {["fill"]: "#DAC8B1",["d"]: "M34 13c0 1.104-.896 2-2 2h-6c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2zm-22 0c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2z",}));el.appendChild(svg["path"]("M36 34c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V13c0-1.104.896-2 2-2h32c1.104 0 2 .896 2 2v21z", {["fill"]: "#F1DCC1",["d"]: "M36 34c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V13c0-1.104.896-2 2-2h32c1.104 0 2 .896 2 2v21z",}));el.appendChild(svg["path"]("M22 9V7c0-.738-.404-1.376-1-1.723V5c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2v.277c-.595.347-1 .985-1 1.723v2h-1v27h10V9h-1z", {["fill"]: "#DAC8B1",["d"]: "M22 9V7c0-.738-.404-1.376-1-1.723V5c0-1.104-.896-2-2-2h-2c-1.104 0-2 .896-2 2v.277c-.595.347-1 .985-1 1.723v2h-1v27h10V9h-1z",}));el.appendChild(svg["path"]("M14 7h2v2h-2zm6 0h2v2h-2zm-3 0h2v2h-2z", {["fill"]: "#55ACEE",["d"]: "M14 7h2v2h-2zm6 0h2v2h-2zm-3 0h2v2h-2z",}));el.appendChild(svg["path"]("M15 15h2v14h-2zm4 0h2v14h-2z", {["fill"]: "#3B88C3",["d"]: "M15 15h2v14h-2zm4 0h2v14h-2z",}));el.appendChild(svg["path"]("M24 17h2v12h-2zm4 0h2v12h-2zm4 0h2v12h-2zM2 17h2v12H2zm4 0h2v12H6zm4 0h2v12h-2zM2 30h2v2H2zm4 0h2v2H6zm4 0h2v2h-2z", {["fill"]: "#55ACEE",["d"]: "M24 17h2v12h-2zm4 0h2v12h-2zm4 0h2v12h-2zM2 17h2v12H2zm4 0h2v12H6zm4 0h2v12h-2zM2 30h2v2H2zm4 0h2v2H6zm4 0h2v2h-2z",}));el.appendChild(svg["path"]("M15 30h2v2h-2zm4 0h2v2h-2z", {["fill"]: "#3B88C3",["d"]: "M15 30h2v2h-2zm4 0h2v2h-2z",}));el.appendChild(svg["path"]("M24 30h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z", {["fill"]: "#55ACEE",["d"]: "M24 30h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z",}));el.appendChild(svg["path"]("M2 33h2v3H2zm4 0h2v3H6zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm4 0h2v3h-2z", {["fill"]: "#66757F",["d"]: "M2 33h2v3H2zm4 0h2v3H6zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm5 0h2v3h-2zm4 0h2v3h-2zm4 0h2v3h-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};