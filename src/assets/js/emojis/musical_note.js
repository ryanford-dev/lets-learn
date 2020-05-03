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
				el.appendChild(svg["path"]("M34.209.206L11.791 2.793C10.806 2.907 10 3.811 10 4.803v18.782C9.09 23.214 8.075 23 7 23c-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V10.539l18-2.077v13.124c-.91-.372-1.925-.586-3-.586-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V1.803c0-.992-.806-1.71-1.791-1.597z", {["fill"]: "#5DADEC",["d"]: "M34.209.206L11.791 2.793C10.806 2.907 10 3.811 10 4.803v18.782C9.09 23.214 8.075 23 7 23c-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V10.539l18-2.077v13.124c-.91-.372-1.925-.586-3-.586-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V1.803c0-.992-.806-1.71-1.791-1.597z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};