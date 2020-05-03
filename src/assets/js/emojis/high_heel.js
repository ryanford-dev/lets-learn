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
				el.appendChild(svg["path"]("M35.447 32.12S34.349 34 32.573 34h-13.23c-3.635 0-4.391-4.179-7.604-10.605-3.213-6.427-6.906-3.048-6.906-3.048L3.618 35H2.334s-.614-12.551-1.25-14.596c-1.445-4.65-.625-8.181-.625-8.181l8.018.543 10.1 15.524 16.87 3.83z", {["fill"]: "#292F33",["d"]: "M35.447 32.12S34.349 34 32.573 34h-13.23c-3.635 0-4.391-4.179-7.604-10.605-3.213-6.427-6.906-3.048-6.906-3.048L3.618 35H2.334s-.614-12.551-1.25-14.596c-1.445-4.65-.625-8.181-.625-8.181l8.018.543 10.1 15.524 16.87 3.83z",}));el.appendChild(svg["path"]("M30.449 26.497c-1.137-.31-1.874-.625-1.874-.625-.512.534-1.231.625-1.874.625-3.825 0-5.808-1.556-8.122-6.873C13.58 8.144 5.354 3.38 2.959 3.38.408 3.38-1.004 15.251.46 15.251c4.607 0 8.415.928 11.119 3.749 4.043 4.217 5.513 13.12 8.117 13.12h15.752s.624-4.061-4.999-5.623z", {["fill"]: "#DD2E44",["d"]: "M30.449 26.497c-1.137-.31-1.874-.625-1.874-.625-.512.534-1.231.625-1.874.625-3.825 0-5.808-1.556-8.122-6.873C13.58 8.144 5.354 3.38 2.959 3.38.408 3.38-1.004 15.251.46 15.251c4.607 0 8.415.928 11.119 3.749 4.043 4.217 5.513 13.12 8.117 13.12h15.752s.624-4.061-4.999-5.623z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};