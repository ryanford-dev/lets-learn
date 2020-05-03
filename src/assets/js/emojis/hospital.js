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
				el.appendChild(svg["path"]("M24 10c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v8zM0 14v20c0 1.104.896 2 2 2h32c1.104 0 2-.896 2-2V14H0z", {["fill"]: "#CCD6DD",["d"]: "M24 10c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v8zM0 14v20c0 1.104.896 2 2 2h32c1.104 0 2-.896 2-2V14H0z",}));el.appendChild(svg["path"]("M18 12H2c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z", {["fill"]: "#99AAB5",["d"]: "M18 12H2c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M34 12H18c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z", {["fill"]: "#99AAB5",["d"]: "M34 12H18c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M2 22h32v4H2zm0-6h32v4H2zm0 12h32v4H2z", {["fill"]: "#55ACEE",["d"]: "M2 22h32v4H2zm0-6h32v4H2zm0 12h32v4H2z",}));el.appendChild(svg["path"]("M8 12h20v24H8z", {["fill"]: "#E1E8ED",["d"]: "M8 12h20v24H8z",}));el.appendChild(svg["path"]("M10 20h16v4H10zm0-6h16v4H10zm0 12h16v4H10z", {["fill"]: "#55ACEE",["d"]: "M10 20h16v4H10zm0-6h16v4H10zm0 12h16v4H10z",}));el.appendChild(svg["path"]("M13 32h10v4H13z", {["fill"]: "#3B88C3",["d"]: "M13 32h10v4H13z",}));el.appendChild(svg["path"]("M22 4h-3V1h-2v3h-3v2h3v3h2V6h3z", {["fill"]: "#DD2E44",["d"]: "M22 4h-3V1h-2v3h-3v2h3v3h2V6h3z",}));el.appendChild(svg["path"]("M26 10H10c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z", {["fill"]: "#99AAB5",["d"]: "M26 10H10c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};