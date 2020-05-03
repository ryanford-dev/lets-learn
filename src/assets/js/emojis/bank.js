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
				el.appendChild(svg["path"]("M3 16h30v18H3z", {["fill"]: "#66757F",["d"]: "M3 16h30v18H3z",}));el.appendChild(svg["path"]("M2 34h32c1.104 0 2 .896 2 2H0c0-1.104.896-2 2-2z", {["fill"]: "#CCD6DD",["d"]: "M2 34h32c1.104 0 2 .896 2 2H0c0-1.104.896-2 2-2z",}));el.appendChild(svg["path"]("M18 23c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z", {["fill"]: "#292F33",["d"]: "M18 23c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M3 21h4v11H3zm6 0h4v11H9zm20 0h4v11h-4zm-6 0h4v11h-4z", {["fill"]: "#CCD6DD",["d"]: "M3 21h4v11H3zm6 0h4v11H9zm20 0h4v11h-4zm-6 0h4v11h-4z",}));el.appendChild(svg["path"]("M2 32h32v2H2z", {["fill"]: "#AAB8C2",["d"]: "M2 32h32v2H2z",}));el.appendChild(svg["path"]("M36 11L18 0 0 11z", {["fill"]: "#66757F",["d"]: "M36 11L18 0 0 11z",}));el.appendChild(svg["path"]("M18 2.4L2 12v4h32v-4z", {["fill"]: "#CCD6DD",["d"]: "M18 2.4L2 12v4h32v-4z",}));el.appendChild(svg["path"]("M3 19h4v2H3zm6 0h4v2H9zm14 0h4v2h-4zm6 0h4v2h-4z", {["fill"]: "#8899A6",["d"]: "M3 19h4v2H3zm6 0h4v2H9zm14 0h4v2h-4zm6 0h4v2h-4z",}));el.appendChild(svg["path"]("M1 12h34v5H1z", {["fill"]: "#CCD6DD",["d"]: "M1 12h34v5H1z",}));el.appendChild(svg["path"]("M36 12c0 .552-.447 1-1 1H1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h34c.553 0 1 .448 1 1v1zm0 6c0 .552-.447 1-1 1H1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h34c.553 0 1 .448 1 1v1z", {["fill"]: "#AAB8C2",["d"]: "M36 12c0 .552-.447 1-1 1H1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h34c.553 0 1 .448 1 1v1zm0 6c0 .552-.447 1-1 1H1c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1h34c.553 0 1 .448 1 1v1z",}));el.appendChild(svg["path"]("M13 32h10v2H13z", {["fill"]: "#E1E8ED",["d"]: "M13 32h10v2H13z",}));el.appendChild(svg["path"]("M11 34h14v2H11z", {["fill"]: "#F5F8FA",["d"]: "M11 34h14v2H11z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};