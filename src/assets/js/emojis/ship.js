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
				el.appendChild(svg["path"]("M16 0h4v5h-4z", {["fill"]: "#292F33",["d"]: "M16 0h4v5h-4z",}));el.appendChild(svg["path"]("M16 2h4v4h-4z", {["fill"]: "#D1D3D4",["d"]: "M16 2h4v4h-4z",}));el.appendChild(svg["path"]("M18 2h2v4h-2z", {["fill"]: "#A7A9AC",["d"]: "M18 2h2v4h-2z",}));el.appendChild(svg["path"]("M18 19H5s1.355 8 4.875 14C13.394 39 18 33 18 33s4.606 6 8.125 0C29.645 27 31 19 31 19H18z", {["fill"]: "#66757F",["d"]: "M18 19H5s1.355 8 4.875 14C13.394 39 18 33 18 33s4.606 6 8.125 0C29.645 27 31 19 31 19H18z",}));el.appendChild(svg["path"]("M18 19H5s1.355 8 4.875 14C13.394 39 18 33 18 33V19z", {["fill"]: "#99AAB5",["d"]: "M18 19H5s1.355 8 4.875 14C13.394 39 18 33 18 33V19z",}));el.appendChild(svg["path"]("M0 30h36v6H0z", {["fill"]: "#55ACEE",["d"]: "M0 30h36v6H0z",}));el.appendChild(svg["path"]("M30 9h-2.45l-.242-4H8.692l-.241 4H6v6h2.088l-.242 4h20.308l-.242-4H30z", {["fill"]: "#E6E7E8",["d"]: "M30 9h-2.45l-.242-4H8.692l-.241 4H6v6h2.088l-.242 4h20.308l-.242-4H30z",}));el.appendChild(svg["path"]("M10 15h16v4H10z", {["fill"]: "#D1D3D4",["d"]: "M10 15h16v4H10z",}));el.appendChild(svg["path"]("M8 11h20v2H8z", {["fill"]: "#6D6E71",["d"]: "M8 11h20v2H8z",}));el.appendChild(svg["path"]("M10 7h16v2H10z", {["fill"]: "#BCBEC0",["d"]: "M10 7h16v2H10z",}));el.appendChild(svg["path"]("M5.913 23h24.174c.201-.747.368-1.427.5-2H5.413c.132.573.299 1.253.5 2z", {["fill"]: "#BE1931",["d"]: "M5.913 23h24.174c.201-.747.368-1.427.5-2H5.413c.132.573.299 1.253.5 2z",}));el.appendChild(svg["path"]("M18 23h12.087c.201-.747.368-1.427.5-2H18v2z", {["fill"]: "#A0041E",["d"]: "M18 23h12.087c.201-.747.368-1.427.5-2H18v2z",}));el.appendChild(svg["path"]("M12 17h12v2H12z", {["fill"]: "#BCBEC0",["d"]: "M12 17h12v2H12z",}));el.appendChild(svg["path"]("M16 0h2v2h-2z", {["fill"]: "#58595B",["d"]: "M16 0h2v2h-2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};