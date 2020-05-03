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
				el.appendChild(svg["path"]("M21 15c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h13c2.209 0 4 1.791 4 4v3z", {["fill"]: "#BE1931",["d"]: "M21 15c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h13c2.209 0 4 1.791 4 4v3z",}));el.appendChild(svg["path"]("M36 6c0 2.209-1.791 4-4 4H20c-2.209 0-4-1.791-4-4V5c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v1z", {["fill"]: "#BE1931",["d"]: "M36 6c0 2.209-1.791 4-4 4H20c-2.209 0-4-1.791-4-4V5c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v1z",}));el.appendChild(svg["path"]("M0 12v22c0 1.104.896 2 2 2h31V12H0z", {["fill"]: "#F4ABBA",["d"]: "M0 12v22c0 1.104.896 2 2 2h31V12H0z",}));el.appendChild(svg["path"]("M2 32h12v4H2zm0-6h16v4H2z", {["fill"]: "#3B88C3",["d"]: "M2 32h12v4H2zm0-6h16v4H2z",}));el.appendChild(svg["path"]("M16 5v31h18c1.104 0 2-.896 2-2V5H16z", {["fill"]: "#FFD4DE",["d"]: "M16 5v31h18c1.104 0 2-.896 2-2V5H16z",}));el.appendChild(svg["path"]("M18 20h16v4H18zm0-6h16v4H18zm0-6h16v4H18zm0 18h16v4H18z", {["fill"]: "#55ACEE",["d"]: "M18 20h16v4H18zm0-6h16v4H18zm0-6h16v4H18zm0 18h16v4H18z",}));el.appendChild(svg["path"]("M22 7h2v24h-2zm6 0h2v24h-2z", {["fill"]: "#FFD4DE",["d"]: "M22 7h2v24h-2zm6 0h2v24h-2z",}));el.appendChild(svg["path"]("M22 32h8v4h-8z", {["fill"]: "#3B88C3",["d"]: "M22 32h8v4h-8z",}));el.appendChild(svg["path"]("M10 14v4H6v-4H4v10h2v-4h4v4h2V14z", {["fill"]: "#DD2E44",["d"]: "M10 14v4H6v-4H4v10h2v-4h4v4h2V14z",}));el.appendChild(svg["path"]("M7 25h2v6H7zm7 0h2v6h-2z", {["fill"]: "#F4ABBA",["d"]: "M7 25h2v6H7zm7 0h2v6h-2z",}));el.appendChild(svg["path"]("M3 3C3 .239 6.963-1 8 3c1.122-4 5-2.761 5 0 0 3-5 6-5 6S3 6 3 3z", {["fill"]: "#EA596E",["d"]: "M3 3C3 .239 6.963-1 8 3c1.122-4 5-2.761 5 0 0 3-5 6-5 6S3 6 3 3z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};