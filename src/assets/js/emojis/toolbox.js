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
				el.appendChild(svg["path"]("M26 .5H10C8.07.5 6.5 2.07 6.5 4v4h3V4c0-.271.229-.5.5-.5h16c.271 0 .5.229.5.5v4h3V4c0-1.93-1.57-3.5-3.5-3.5z", {["fill"]: "#292F33",["d"]: "M26 .5H10C8.07.5 6.5 2.07 6.5 4v4h3V4c0-.271.229-.5.5-.5h16c.271 0 .5.229.5.5v4h3V4c0-1.93-1.57-3.5-3.5-3.5z",}));el.appendChild(svg["path"]("M36 31.765S36 36 31.765 36H4.235C0 36 0 31.765 0 31.765V11.647c0-4.235 4.235-4.235 4.235-4.235h27.529s4.235 0 4.235 4.235v20.118z", {["fill"]: "#DD2E44",["d"]: "M36 31.765S36 36 31.765 36H4.235C0 36 0 31.765 0 31.765V11.647c0-4.235 4.235-4.235 4.235-4.235h27.529s4.235 0 4.235 4.235v20.118z",}));el.appendChild(svg["path"]("M4 22h28v2H4z", {["fill"]: "#CCD6DD",["d"]: "M4 22h28v2H4z",}));el.appendChild(svg["path"]("M0 15h36v2H0zm4 9h28v2H4zm0 6h28v2H4z", {["fill"]: "#BE1931",["d"]: "M0 15h36v2H0zm4 9h28v2H4zm0 6h28v2H4z",}));el.appendChild(svg["path"]("M4 28h28v2H4z", {["fill"]: "#CCD6DD",["d"]: "M4 28h28v2H4z",}));el.appendChild(svg["path"]("M10 19H8c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1zm18 0h-2c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1z", {["fill"]: "#AAB8C2",["d"]: "M10 19H8c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1zm18 0h-2c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v4c0 .552-.448 1-1 1z",}));el.appendChild(svg["path"]("M25 17v1c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-1h-4zM7 17v1c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-1H7z", {["fill"]: "#292F33",["d"]: "M25 17v1c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-1h-4zM7 17v1c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-1H7z",}));el.appendChild(svg["path"]("M26 15h2v3h-2zM8 15h2v3H8z", {["fill"]: "#292F33",["d"]: "M26 15h2v3h-2zM8 15h2v3H8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};