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
				el.appendChild(svg["path"]("M34.459 1.375c-1.391-.902-3.248-.506-4.149.884L13.5 28.17l-8.198-7.58c-1.217-1.125-3.114-1.051-4.239.166-1.125 1.216-1.051 3.115.166 4.239l10.764 9.952s.309.266.452.359c.504.328 1.07.484 1.63.484.982 0 1.945-.482 2.52-1.368L35.343 5.524c.902-1.39.506-3.248-.884-4.149z", {["fill"]: "#31373D",["d"]: "M34.459 1.375c-1.391-.902-3.248-.506-4.149.884L13.5 28.17l-8.198-7.58c-1.217-1.125-3.114-1.051-4.239.166-1.125 1.216-1.051 3.115.166 4.239l10.764 9.952s.309.266.452.359c.504.328 1.07.484 1.63.484.982 0 1.945-.482 2.52-1.368L35.343 5.524c.902-1.39.506-3.248-.884-4.149z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};