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
				el.appendChild(svg["path"]("M32.201 7.791c-2.223-.36-7.568-3.963-11.411-2.762s-3.542 2.162-5.464 2.763c-1.922.601-2.222-.36-6.065.841-3.842 1.201-6.184 7.206-7.805 8.768 0 0-1.603 1.621-1.021 3.483.583 1.861 2.523 1.32 2.523 1.32 6.726-2.102 9.007-4.925 9.007-4.925s3.482 1.021 6.364.12c2.882-.901 5.164-3.724 5.164-3.724s3.484 1.021 10.209-1.081c0 0 1.902-.661 1.32-2.522-.583-1.862-2.821-2.281-2.821-2.281zm-1.082 6.666c-5.764 1.801-4.562 5.644-11.288 7.747-6.726 2.102-7.927-1.74-13.691.061-1.921.601-2.582 1.861-2.281 2.824.9 2.881 8.407 10.025 18.976 6.723 10.568-3.303 12.67-13.452 11.769-16.333-.301-.963-1.564-1.623-3.485-1.022z", {["fill"]: "#DD2E44",["d"]: "M32.201 7.791c-2.223-.36-7.568-3.963-11.411-2.762s-3.542 2.162-5.464 2.763c-1.922.601-2.222-.36-6.065.841-3.842 1.201-6.184 7.206-7.805 8.768 0 0-1.603 1.621-1.021 3.483.583 1.861 2.523 1.32 2.523 1.32 6.726-2.102 9.007-4.925 9.007-4.925s3.482 1.021 6.364.12c2.882-.901 5.164-3.724 5.164-3.724s3.484 1.021 10.209-1.081c0 0 1.902-.661 1.32-2.522-.583-1.862-2.821-2.281-2.821-2.281zm-1.082 6.666c-5.764 1.801-4.562 5.644-11.288 7.747-6.726 2.102-7.927-1.74-13.691.061-1.921.601-2.582 1.861-2.281 2.824.9 2.881 8.407 10.025 18.976 6.723 10.568-3.303 12.67-13.452 11.769-16.333-.301-.963-1.564-1.623-3.485-1.022z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};