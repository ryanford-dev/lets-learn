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
				el.appendChild(svg["path"]("M33.793 17S32.476 20 18 20C3.523 20 1.973 17 1.973 17S-1 22.117 4.802 25c4.238 2.105 10.916-.131 12.723-.814 1.991.683 9.274 2.824 13.557.814 5.862-2.751 2.711-8 2.711-8z", {["fill"]: "#DD2E44",["d"]: "M33.793 17S32.476 20 18 20C3.523 20 1.973 17 1.973 17S-1 22.117 4.802 25c4.238 2.105 10.916-.131 12.723-.814 1.991.683 9.274 2.824 13.557.814 5.862-2.751 2.711-8 2.711-8z",}));el.appendChild(svg["path"]("M0 24h36v12H0z", {["fill"]: "#55ACEE",["d"]: "M0 24h36v12H0z",}));el.appendChild(svg["path"]("M27.005 25.389c.206 0 .412-.079.569-.236.315-.315.315-.824 0-1.139l-8.861-8.86c-.315-.315-.824-.315-1.139 0-.315.315-.315.824 0 1.139l8.861 8.86c.158.157.364.236.57.236z", {["fill"]: "#FFAC33",["d"]: "M27.005 25.389c.206 0 .412-.079.569-.236.315-.315.315-.824 0-1.139l-8.861-8.86c-.315-.315-.824-.315-1.139 0-.315.315-.315.824 0 1.139l8.861 8.86c.158.157.364.236.57.236z",}));el.appendChild(svg["path"]("M29.316 28.505c.412 0 .825-.157 1.139-.472.629-.629.629-1.649 0-2.278l-2.416-2.416c-.629-.629-1.65-.629-2.278 0-.629.629-.629 1.649 0 2.278l2.416 2.416c.314.315.727.472 1.139.472z", {["fill"]: "#FFCC4D",["d"]: "M29.316 28.505c.412 0 .825-.157 1.139-.472.629-.629.629-1.649 0-2.278l-2.416-2.416c-.629-.629-1.65-.629-2.278 0-.629.629-.629 1.649 0 2.278l2.416 2.416c.314.315.727.472 1.139.472z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};