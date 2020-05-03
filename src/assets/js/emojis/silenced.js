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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#FFCC4D",["cx"]: "18",}));el.appendChild(svg["path"]("M14.034 14.499c0 1.934-1.119 3.5-2.5 3.5s-2.5-1.566-2.5-3.5c0-1.933 1.119-3.5 2.5-3.5s2.5 1.567 2.5 3.5m13 0c0 1.934-1.119 3.5-2.5 3.5s-2.5-1.566-2.5-3.5c0-1.933 1.119-3.5 2.5-3.5s2.5 1.567 2.5 3.5m-2.033 12.505H10c-1 0-1-1-1-1v-1s0-1.003 1-1.003l15.001.003v3z", {["fill"]: "#664500",["d"]: "M14.034 14.499c0 1.934-1.119 3.5-2.5 3.5s-2.5-1.566-2.5-3.5c0-1.933 1.119-3.5 2.5-3.5s2.5 1.567 2.5 3.5m13 0c0 1.934-1.119 3.5-2.5 3.5s-2.5-1.566-2.5-3.5c0-1.933 1.119-3.5 2.5-3.5s2.5 1.567 2.5 3.5m-2.033 12.505H10c-1 0-1-1-1-1v-1s0-1.003 1-1.003l15.001.003v3z",}));el.appendChild(svg["path"]("M35.255 26.084l-7.713-2.121c-.72-.197-1.049.287-1.171.547l-1.64-.784L24 25.255v-2.254h-2v2h-2v-2h-2.001v2H16v-2h-2v2h-2v-2h-2v3h2v2h2v-2h1.999v2h2v-2H20v2h2v-2h1.643l-.58 1.212 1.648.788-.099.207s-.248.737.373 1.275c.621.537 5.285 4.735 5.285 4.735s.899.866 1.769.079c.738-.67 3.649-6.02 3.914-6.983.266-.964-.698-1.23-.698-1.23zm-3.772 6.071l-2.644-2.248 1.614-3.069 3.338 1.132-2.308 4.185z", {["fill"]: "#99AAB5",["d"]: "M35.255 26.084l-7.713-2.121c-.72-.197-1.049.287-1.171.547l-1.64-.784L24 25.255v-2.254h-2v2h-2v-2h-2.001v2H16v-2h-2v2h-2v-2h-2v3h2v2h2v-2h1.999v2h2v-2H20v2h2v-2h1.643l-.58 1.212 1.648.788-.099.207s-.248.737.373 1.275c.621.537 5.285 4.735 5.285 4.735s.899.866 1.769.079c.738-.67 3.649-6.02 3.914-6.983.266-.964-.698-1.23-.698-1.23zm-3.772 6.071l-2.644-2.248 1.614-3.069 3.338 1.132-2.308 4.185z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};