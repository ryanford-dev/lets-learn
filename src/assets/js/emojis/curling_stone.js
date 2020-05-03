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
				el.appendChild(svg["path"]("M28 12H13V8c0-.552.448-1 1-1h11c1.104 0 2-.896 2-2s-.896-2-2-2H14c-2.761 0-5 2.239-5 5v4H8c-1.104 0-2 .896-2 2s.896 2 2 2h20c1.104 0 2-.896 2-2s-.896-2-2-2z", {["fill"]: "#BE1931",["d"]: "M28 12H13V8c0-.552.448-1 1-1h11c1.104 0 2-.896 2-2s-.896-2-2-2H14c-2.761 0-5 2.239-5 5v4H8c-1.104 0-2 .896-2 2s.896 2 2 2h20c1.104 0 2-.896 2-2s-.896-2-2-2z",}));el.appendChild(svg["path"]("M36 25c0 3.313-2.687 6-6 6H6c-3.313 0-6-2.687-6-6v-5c0-3.313 2.687-6 6-6h24c3.313 0 6 2.687 6 6v5z", {["fill"]: "#66757F",["d"]: "M36 25c0 3.313-2.687 6-6 6H6c-3.313 0-6-2.687-6-6v-5c0-3.313 2.687-6 6-6h24c3.313 0 6 2.687 6 6v5z",}));el.appendChild(svg["path"]("M0 20h36v5H0z", {["fill"]: "#99AAB5",["d"]: "M0 20h36v5H0z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};