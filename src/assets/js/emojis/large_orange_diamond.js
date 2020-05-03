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
				el.appendChild(svg["path"]("M1.061 19.062c-.583-.584-.583-1.539 0-2.122L16.94 1.061c.583-.583 1.539-.583 2.122 0L34.94 16.94c.583.583.583 1.538 0 2.121L19.062 34.939c-.583.583-1.539.583-2.122 0L1.061 19.062z", {["fill"]: "#FFAC33",["d"]: "M1.061 19.062c-.583-.584-.583-1.539 0-2.122L16.94 1.061c.583-.583 1.539-.583 2.122 0L34.94 16.94c.583.583.583 1.538 0 2.121L19.062 34.939c-.583.583-1.539.583-2.122 0L1.061 19.062z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};