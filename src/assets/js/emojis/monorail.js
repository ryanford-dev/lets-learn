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
				el.appendChild(svg["path"]("M0 24h36v4H0z", {["fill"]: "#6D6E71",["d"]: "M0 24h36v4H0z",}));el.appendChild(svg["path"]("M0 22h36v4H0zm6 6h4v8H6zm10 0h4v8h-4zm10 0h4v8h-4z", {["fill"]: "#939598",["d"]: "M0 22h36v4H0zm6 6h4v8H6zm10 0h4v8h-4zm10 0h4v8h-4z",}));el.appendChild(svg["path"]("M6 27h4v3H6zm10 0h4v3h-4zm10 0h4v3h-4z", {["fill"]: "#6D6E71",["d"]: "M6 27h4v3H6zm10 0h4v3h-4zm10 0h4v3h-4z",}));el.appendChild(svg["path"]("M36 0h-6c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h6V0z", {["fill"]: "#BCBEC0",["d"]: "M36 0h-6c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h6V0z",}));el.appendChild(svg["path"]("M36 20v5H18c-3 0-7-5-7-5h25z", {["fill"]: "#D1D3D4",["d"]: "M36 20v5H18c-3 0-7-5-7-5h25z",}));el.appendChild(svg["path"]("M11 20s.751.938 1.844 2H36v-2H11z", {["fill"]: "#BCBEC0",["d"]: "M11 20s.751.938 1.844 2H36v-2H11z",}));el.appendChild(svg["path"]("M36 20H10c-3 0-7-3-7-6C3 9 19 2 21 2h15v18z", {["fill"]: "#E6E7E8",["d"]: "M36 20H10c-3 0-7-3-7-6C3 9 19 2 21 2h15v18z",}));el.appendChild(svg["path"]("M3.741 12C3.28 12.686 3 13.36 3 14c0 1.655 1.22 3.308 2.816 4.459C21.231 14 36 14 36 14v-2H3.741z", {["fill"]: "#5C913B",["d"]: "M3.741 12C3.28 12.686 3 13.36 3 14c0 1.655 1.22 3.308 2.816 4.459C21.231 14 36 14 36 14v-2H3.741z",}));el.appendChild(svg["path"]("M21 4h-5.553c-3.327 1.524-7.344 3.738-9.898 6H21c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm5 5c0 .552-.447 1-1 1-.553 0-1-.448-1-1V5c0-.552.447-1 1-1 .553 0 1 .448 1 1v4zm8 0c0 .552-.447 1-1 1h-4c-.553 0-1-.448-1-1V5c0-.552.447-1 1-1h4c.553 0 1 .448 1 1v4z", {["fill"]: "#55ACEE",["d"]: "M21 4h-5.553c-3.327 1.524-7.344 3.738-9.898 6H21c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm5 5c0 .552-.447 1-1 1-.553 0-1-.448-1-1V5c0-.552.447-1 1-1 .553 0 1 .448 1 1v4zm8 0c0 .552-.447 1-1 1h-4c-.553 0-1-.448-1-1V5c0-.552.447-1 1-1h4c.553 0 1 .448 1 1v4z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};