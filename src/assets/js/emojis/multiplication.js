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
				el.appendChild(svg["path"]("M22.238 18.004l9.883-9.883c1.172-1.171 1.172-3.071 0-4.243-1.172-1.171-3.07-1.171-4.242 0l-9.883 9.883-9.883-9.882c-1.171-1.172-3.071-1.172-4.243 0-1.171 1.171-1.171 3.071 0 4.243l9.883 9.882-9.907 9.907c-1.171 1.171-1.171 3.071 0 4.242.585.586 1.354.879 2.121.879s1.536-.293 2.122-.879l9.906-9.906 9.882 9.882c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242l-9.881-9.883z", {["fill"]: "#31373D",["d"]: "M22.238 18.004l9.883-9.883c1.172-1.171 1.172-3.071 0-4.243-1.172-1.171-3.07-1.171-4.242 0l-9.883 9.883-9.883-9.882c-1.171-1.172-3.071-1.172-4.243 0-1.171 1.171-1.171 3.071 0 4.243l9.883 9.882-9.907 9.907c-1.171 1.171-1.171 3.071 0 4.242.585.586 1.354.879 2.121.879s1.536-.293 2.122-.879l9.906-9.906 9.882 9.882c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242l-9.881-9.883z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};