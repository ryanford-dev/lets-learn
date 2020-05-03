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
				el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#C1272D",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15.047 22.165l1.128-3.471-2.953-2.145h3.649L18 13.074l1.129 3.474h3.649l-2.953 2.145 1.128 3.471L18 20.019l-2.953 2.146zm3.583-2.603l.916.665-.35-1.077-.566.412zm-1.826-.412l-.35 1.077.916-.665-.566-.412zm.241-.74l.955.694.955-.694-.365-1.122h-1.182l-.363 1.122zM15.5 17.288l.915.665.216-.665H15.5zm3.869 0l.216.665.915-.665h-1.131zm-1.019-.74L18 15.47l-.35 1.079h.7z", {["fill"]: "#006233",["d"]: "M15.047 22.165l1.128-3.471-2.953-2.145h3.649L18 13.074l1.129 3.474h3.649l-2.953 2.145 1.128 3.471L18 20.019l-2.953 2.146zm3.583-2.603l.916.665-.35-1.077-.566.412zm-1.826-.412l-.35 1.077.916-.665-.566-.412zm.241-.74l.955.694.955-.694-.365-1.122h-1.182l-.363 1.122zM15.5 17.288l.915.665.216-.665H15.5zm3.869 0l.216.665.915-.665h-1.131zm-1.019-.74L18 15.47l-.35 1.079h.7z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};