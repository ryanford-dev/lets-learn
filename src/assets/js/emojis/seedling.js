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
				el.appendChild(svg["path"]("M22.911 14.398c-1.082.719-2.047 1.559-2.88 2.422-.127-4.245-1.147-9.735-6.772-12.423C12.146-1.658-.833 1.418.328 2.006c2.314 1.17 3.545 4.148 5.034 5.715 2.653 2.792 5.603 2.964 7.071.778 3.468 2.254 3.696 6.529 3.59 11.099-.012.505-.023.975-.023 1.402v14c0 1.104 4 1.104 4 0V23.51c.542-.954 2.122-3.505 4.43-5.294 1.586 1.393 4.142.948 6.463-1.495 1.489-1.567 2.293-4.544 4.607-5.715 1.221-.618-12.801-3.994-12.589 3.392z", {["fill"]: "#77B255",["d"]: "M22.911 14.398c-1.082.719-2.047 1.559-2.88 2.422-.127-4.245-1.147-9.735-6.772-12.423C12.146-1.658-.833 1.418.328 2.006c2.314 1.17 3.545 4.148 5.034 5.715 2.653 2.792 5.603 2.964 7.071.778 3.468 2.254 3.696 6.529 3.59 11.099-.012.505-.023.975-.023 1.402v14c0 1.104 4 1.104 4 0V23.51c.542-.954 2.122-3.505 4.43-5.294 1.586 1.393 4.142.948 6.463-1.495 1.489-1.567 2.293-4.544 4.607-5.715 1.221-.618-12.801-3.994-12.589 3.392z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};