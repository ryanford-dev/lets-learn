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
				el.appendChild(svg["path"]("M14 34c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2V14c0-1.104-.896-2-2-2H16c-1.104 0-2 .896-2 2v20z", {["fill"]: "#FFCC4D",["d"]: "M14 34c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2V14c0-1.104-.896-2-2-2H16c-1.104 0-2 .896-2 2v20z",}));el.appendChild(svg["path"]("M34 12H20v2h16c0-1.104-.896-2-2-2z", {["fill"]: "#BCBEC0",["d"]: "M34 12H20v2h16c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M20 16h14v20H20z", {["fill"]: "#55ACEE",["d"]: "M20 16h14v20H20z",}));el.appendChild(svg["path"]("M18 0H2C.896 0 0 .896 0 2v32c0 1.104.896 2 2 2h18V2c0-1.104-.896-2-2-2z", {["fill"]: "#FFE8B6",["d"]: "M18 0H2C.896 0 0 .896 0 2v32c0 1.104.896 2 2 2h18V2c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M18 0H2C.896 0 0 .896 0 2h20c0-1.104-.896-2-2-2z", {["fill"]: "#BCBEC0",["d"]: "M18 0H2C.896 0 0 .896 0 2h20c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M2 22h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0 24h16v8H2z", {["fill"]: "#55ACEE",["d"]: "M2 22h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0-6h16v4H2zm0 24h16v8H2z",}));el.appendChild(svg["path"]("M6 32h8v4H6zm17 0h8v4h-8z", {["fill"]: "#3B88C3",["d"]: "M6 32h8v4H6zm17 0h8v4h-8z",}));el.appendChild(svg["path"]("M20 26h15v2H20zm0-6h15v2H20z", {["fill"]: "#FFCC4D",["d"]: "M20 26h15v2H20zm0-6h15v2H20z",}));el.appendChild(svg["path"]("M36 7c0 1.104-.896 2-2 2H24c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z", {["fill"]: "#DD2E44",["d"]: "M36 7c0 1.104-.896 2-2 2H24c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v2z",}));el.appendChild(svg["path"]("M26 9h2v3h-2zm4 0h2v3h-2z", {["fill"]: "#58595B",["d"]: "M26 9h2v3h-2zm4 0h2v3h-2z",}));el.appendChild(svg["path"]("M24 5h2v2h-2z", {["fill"]: "#F4ABBA",["d"]: "M24 5h2v2h-2z",}));el.appendChild(svg["path"]("M26 5h2v2h-2z", {["fill"]: "#FFF",["d"]: "M26 5h2v2h-2z",}));el.appendChild(svg["path"]("M28 5h2v2h-2z", {["fill"]: "#F4ABBA",["d"]: "M28 5h2v2h-2z",}));el.appendChild(svg["path"]("M30 5h2v2h-2z", {["fill"]: "#FFF",["d"]: "M30 5h2v2h-2z",}));el.appendChild(svg["path"]("M32 5h2v2h-2z", {["fill"]: "#F4ABBA",["d"]: "M32 5h2v2h-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};