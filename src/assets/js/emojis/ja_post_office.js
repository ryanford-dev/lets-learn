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
				el.appendChild(svg["path"]("M0 18v16c0 1.104.896 2 2 2h32c1.104 0 2-.896 2-2V18H0z", {["fill"]: "#AAB8C2",["d"]: "M0 18v16c0 1.104.896 2 2 2h32c1.104 0 2-.896 2-2V18H0z",}));el.appendChild(svg["path"]("M0 18l18-6.352L36 18z", {["fill"]: "#66757F",["d"]: "M0 18l18-6.352L36 18z",}));el.appendChild(svg["path"]("M2 20h32v4H2zm0 6h32v4H2z", {["fill"]: "#55ACEE",["d"]: "M2 20h32v4H2zm0 6h32v4H2z",}));el.appendChild(svg["path"]("M6 19h24v16H6z", {["fill"]: "#AAB8C2",["d"]: "M6 19h24v16H6z",}));el.appendChild(svg["path"]("M8 5h20v31H8z", {["fill"]: "#CCD6DD",["d"]: "M8 5h20v31H8z",}));el.appendChild(svg["path"]("M10 20h16v4H10zm0 6h16v4H10z", {["fill"]: "#55ACEE",["d"]: "M10 20h16v4H10zm0 6h16v4H10z",}));el.appendChild(svg["path"]("M14 13h2v18h-2zm6 0h2v18h-2z", {["fill"]: "#CCD6DD",["d"]: "M14 13h2v18h-2zm6 0h2v18h-2z",}));el.appendChild(svg["path"]("M16 32h4v4h-4z", {["fill"]: "#3B88C3",["d"]: "M16 32h4v4h-4z",}));el.appendChild(svg["path"]("M13 7h10v2H13zm0 4v2h4v4h2v-4h4v-2z", {["fill"]: "#DD2E44",["d"]: "M13 7h10v2H13zm0 4v2h4v4h2v-4h4v-2z",}));el.appendChild(svg["path"]("M8 5l10-5 10 5z", {["fill"]: "#66757F",["d"]: "M8 5l10-5 10 5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};