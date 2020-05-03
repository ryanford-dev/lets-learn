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
				el.appendChild(svg["path"]("M31 2H5C3.343 2 2 3.343 2 5v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3z", {["fill"]: "#CCD6DD",["d"]: "M31 2H5C3.343 2 2 3.343 2 5v26c0 1.657 1.343 3 3 3h26c1.657 0 3-1.343 3-3V5c0-1.657-1.343-3-3-3z",}));el.appendChild(svg["path"]("M31 1H5C2.791 1 1 2.791 1 5v26c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V5c0-2.209-1.791-4-4-4zm0 2c1.103 0 2 .897 2 2v4h-6V3h4zm-4 16h6v6h-6v-6zm0-2v-6h6v6h-6zM25 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM17 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM3 5c0-1.103.897-2 2-2h4v6H3V5zm0 6h6v6H3v-6zm0 8h6v6H3v-6zm2 14c-1.103 0-2-.897-2-2v-4h6v6H5zm6 0v-6h6v6h-6zm8 0v-6h6v6h-6zm12 0h-4v-6h6v4c0 1.103-.897 2-2 2z", {["fill"]: "#E1E8ED",["d"]: "M31 1H5C2.791 1 1 2.791 1 5v26c0 2.209 1.791 4 4 4h26c2.209 0 4-1.791 4-4V5c0-2.209-1.791-4-4-4zm0 2c1.103 0 2 .897 2 2v4h-6V3h4zm-4 16h6v6h-6v-6zm0-2v-6h6v6h-6zM25 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM17 3v6h-6V3h6zm-6 8h6v6h-6v-6zm0 8h6v6h-6v-6zM3 5c0-1.103.897-2 2-2h4v6H3V5zm0 6h6v6H3v-6zm0 8h6v6H3v-6zm2 14c-1.103 0-2-.897-2-2v-4h6v6H5zm6 0v-6h6v6h-6zm8 0v-6h6v6h-6zm12 0h-4v-6h6v4c0 1.103-.897 2-2 2z",}));el.appendChild(svg["path"]("M13 33H7V16c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v17z", {["fill"]: "#5C913B",["d"]: "M13 33H7V16c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v17z",}));el.appendChild(svg["path"]("M29 33h-6V9c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v24z", {["fill"]: "#3B94D9",["d"]: "M29 33h-6V9c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v24z",}));el.appendChild(svg["path"]("M21 33h-6V23c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v10z", {["fill"]: "#DD2E44",["d"]: "M21 33h-6V23c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v10z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};