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
				el.appendChild(svg["path"]("M35 19c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v2z", {["fill"]: "#66757F",["d"]: "M35 19c0 .553-.447 1-1 1h-3c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1h3c.553 0 1 .448 1 1v2z",}));el.appendChild(svg["path"]("M32 18h2v7h-2z", {["fill"]: "#66757F",["d"]: "M32 18h2v7h-2z",}));el.appendChild(svg["path"]("M6 19.219S11 15 16 15h.029L16 20s0 1-4 1-6-1.781-6-1.781z", {["fill"]: "#E1E8ED",["d"]: "M6 19.219S11 15 16 15h.029L16 20s0 1-4 1-6-1.781-6-1.781z",}));el.appendChild(svg["path"]("M7.248 19.101C10.798 16.41 14 16.043 15 16.043V20c0 3.162-7.752-.899-7.752-.899z", {["fill"]: "#3B88C3",["d"]: "M7.248 19.101C10.798 16.41 14 16.043 15 16.043V20c0 3.162-7.752-.899-7.752-.899z",}));el.appendChild(svg["path"]("M33 24.964s.5-4.013-1-5.731L1 18.086s2 3.439 6 5.732c4 2.291 26 1.146 26 1.146z", {["fill"]: "#CCD6DD",["d"]: "M33 24.964s.5-4.013-1-5.731L1 18.086s2 3.439 6 5.732c4 2.291 26 1.146 26 1.146z",}));el.appendChild(svg["path"]("M7 23.817c4 2.292 26 1.146 26 1.146s.288-2.335-.24-4.206L2.078 19.589c.977 1.205 2.614 2.905 4.922 4.228z", {["fill"]: "#F4900C",["d"]: "M7 23.817c4 2.292 26 1.146 26 1.146s.288-2.335-.24-4.206L2.078 19.589c.977 1.205 2.614 2.905 4.922 4.228z",}));el.appendChild(svg["path"]("M0 24h36v12H0z", {["fill"]: "#55ACEE",["d"]: "M0 24h36v12H0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};