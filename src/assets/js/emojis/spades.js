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
				el.appendChild(svg["path"]("M32.799 20.336C32.799 11.456 18 .198 18 .198S3.201 11.456 3.201 20.336c0 6.946 8.175 10.172 12.766 5.173C15.631 29.688 11.247 33 7 33h.5c-.829 0-1.5.672-1.5 1.5S6.671 36 7.5 36h21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h.5c-4.246 0-8.632-3.312-8.967-7.491 4.591 4.999 12.766 1.773 12.766-5.173z", {["fill"]: "#31373D",["d"]: "M32.799 20.336C32.799 11.456 18 .198 18 .198S3.201 11.456 3.201 20.336c0 6.946 8.175 10.172 12.766 5.173C15.631 29.688 11.247 33 7 33h.5c-.829 0-1.5.672-1.5 1.5S6.671 36 7.5 36h21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h.5c-4.246 0-8.632-3.312-8.967-7.491 4.591 4.999 12.766 1.773 12.766-5.173z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};