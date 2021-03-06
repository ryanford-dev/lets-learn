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
				el.appendChild(svg["path"]("M32 36v-4c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v4h28z", {["fill"]: "#3B88C3",["d"]: "M32 36v-4c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v4h28z",}));el.appendChild(svg["path"]("M14 26l4 5.001L22 26v-4h-8z", {["fill"]: "#FFDC5D",["d"]: "M14 26l4 5.001L22 26v-4h-8z",}));el.appendChild(svg["path"]("M14 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-4h-8v4z", {["fill"]: "#F9CA55",["d"]: "M14 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-4h-8v4z",}));el.appendChild(svg["path"]("M11.444 13.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623", {["fill"]: "#FFDC5D",["d"]: "M11.444 13.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623",}));el.appendChild(svg["path"]("M9.477 14.96c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S22.707 25.081 18 25.081c-4.707-.001-8.523-4.532-8.523-10.121", {["fill"]: "#FFDC5D",["d"]: "M9.477 14.96c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S22.707 25.081 18 25.081c-4.707-.001-8.523-4.532-8.523-10.121",}));el.appendChild(svg["path"]("M18 21.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848", {["fill"]: "#C1694F",["d"]: "M18 21.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848",}));el.appendChild(svg["path"]("M18 1.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 5.648 11.646 1.48 18 1.48", {["fill"]: "#FFAC33",["d"]: "M18 1.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 5.648 11.646 1.48 18 1.48",}));el.appendChild(svg["path"]("M14 15c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1", {["fill"]: "#662113",["d"]: "M14 15c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1",}));el.appendChild(svg["path"]("M18.75 17.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75", {["fill"]: "#C1694F",["d"]: "M18.75 17.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75",}));el.appendChild(svg["path"]("M10 32.5H8c0-4.094 1.877-8.5 6-8.5v2c-3.164 0-4 4.252-4 6.5zm17-4h-2c0-.411-.521-2.5-3-2.5v-2c3.533 0 5 2.931 5 4.5z", {["fill"]: "#292F33",["d"]: "M10 32.5H8c0-4.094 1.877-8.5 6-8.5v2c-3.164 0-4 4.252-4 6.5zm17-4h-2c0-.411-.521-2.5-3-2.5v-2c3.533 0 5 2.931 5 4.5z",}));el.appendChild(svg["circle"](9, 32.5, 6, {["cy"]: "32.5",["r"]: "3",["fill"]: "#CCD6DD",["cx"]: "9",}));el.appendChild(svg["circle"](9, 32.5, 4, {["cy"]: "32.5",["r"]: "2",["fill"]: "#F5F8FA",["cx"]: "9",}));el.appendChild(svg["path"]("M30 34h-2c0-.835-.108-5-2.25-5s-2.25 4.165-2.25 5h-2c0-4.383 1.589-7 4.25-7S30 29.617 30 34z", {["fill"]: "#292F33",["d"]: "M30 34h-2c0-.835-.108-5-2.25-5s-2.25 4.165-2.25 5h-2c0-4.383 1.589-7 4.25-7S30 29.617 30 34z",}));el.appendChild(svg["circle"](22.5, 34, 2, {["cy"]: "34",["r"]: "1",["fill"]: "#CCD6DD",["cx"]: "22.5",}));el.appendChild(svg["circle"](29, 34, 2, {["cy"]: "34",["r"]: "1",["fill"]: "#CCD6DD",["cx"]: "29",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};