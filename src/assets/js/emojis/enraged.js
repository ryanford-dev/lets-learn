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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#DA2F47",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["path"]("M25.485 29.879C25.44 29.7 24.317 25.5 18 25.5c-6.318 0-7.44 4.2-7.485 4.379-.055.217.043.442.237.554.195.109.439.079.6-.077.019-.019 1.954-1.856 6.648-1.856s6.63 1.837 6.648 1.855c.096.095.224.145.352.145.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557zm-9.778-12.586C12.452 14.038 7.221 14 7 14c-.552 0-.999.447-.999.998-.001.552.446 1 .998 1.002.029 0 1.925.022 3.983.737-.593.64-.982 1.634-.982 2.763 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-.174-.019-.34-.037-.507.013 0 .025.007.037.007.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414zM29 14c-.221 0-5.451.038-8.707 3.293-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293.013 0 .024-.007.036-.007-.016.167-.036.333-.036.507 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-1.129-.389-2.123-.982-2.763 2.058-.715 3.954-.737 3.984-.737.551-.002.998-.45.997-1.002-.001-.551-.447-.998-.999-.998z", {["fill"]: "#292F33",["d"]: "M25.485 29.879C25.44 29.7 24.317 25.5 18 25.5c-6.318 0-7.44 4.2-7.485 4.379-.055.217.043.442.237.554.195.109.439.079.6-.077.019-.019 1.954-1.856 6.648-1.856s6.63 1.837 6.648 1.855c.096.095.224.145.352.145.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557zm-9.778-12.586C12.452 14.038 7.221 14 7 14c-.552 0-.999.447-.999.998-.001.552.446 1 .998 1.002.029 0 1.925.022 3.983.737-.593.64-.982 1.634-.982 2.763 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-.174-.019-.34-.037-.507.013 0 .025.007.037.007.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414zM29 14c-.221 0-5.451.038-8.707 3.293-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293.013 0 .024-.007.036-.007-.016.167-.036.333-.036.507 0 1.934 1.119 3.5 2.5 3.5s2.5-1.566 2.5-3.5c0-1.129-.389-2.123-.982-2.763 2.058-.715 3.954-.737 3.984-.737.551-.002.998-.45.997-1.002-.001-.551-.447-.998-.999-.998z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};