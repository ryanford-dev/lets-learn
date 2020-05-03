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
				el.appendChild(svg["path"]("M9 9c0-1.104-.896-2-2-2s-2 .896-2 2v24c0 1.104.896 2 2 2s2-.896 2-2V9zm22 0c0-1.104-.896-2-2-2s-2 .896-2 2v24c0 1.104.896 2 2 2s2-.896 2-2V9z", {["fill"]: "#DD2E44",["d"]: "M9 9c0-1.104-.896-2-2-2s-2 .896-2 2v24c0 1.104.896 2 2 2s2-.896 2-2V9zm22 0c0-1.104-.896-2-2-2s-2 .896-2 2v24c0 1.104.896 2 2 2s2-.896 2-2V9z",}));el.appendChild(svg["path"]("M36 16c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2s.896-2 2-2h32c1.104 0 2 .896 2 2zm-1-9c0 1.104-.781 1.719-2 2 0 0-3 1-15 1S3 9 3 9c-1.266-.266-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z", {["fill"]: "#DD2E44",["d"]: "M36 16c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2s.896-2 2-2h32c1.104 0 2 .896 2 2zm-1-9c0 1.104-.781 1.719-2 2 0 0-3 1-15 1S3 9 3 9c-1.266-.266-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z",}));el.appendChild(svg["path"]("M35.906 4c0 1.104-.659 1.797-1.908 2 0 0-4 1-15.999 1C6.001 7 2.002 6 2.002 6 .831 5.812.109 5.114.109 4.01.109 2.905-.102 1 1.002 1c0 0 3.999 2 16.997 2s16.998-2 16.998-2c1.105 0 .909 1.895.909 3z", {["fill"]: "#292F33",["d"]: "M35.906 4c0 1.104-.659 1.797-1.908 2 0 0-4 1-15.999 1C6.001 7 2.002 6 2.002 6 .831 5.812.109 5.114.109 4.01.109 2.905-.102 1 1.002 1c0 0 3.999 2 16.997 2s16.998-2 16.998-2c1.105 0 .909 1.895.909 3z",}));el.appendChild(svg["path"]("M20 15c0 1.104-.896 2-2 2s-2-.896-2-2V9c0-1.104.896-2 2-2s2 .896 2 2v6z", {["fill"]: "#DD2E44",["d"]: "M20 15c0 1.104-.896 2-2 2s-2-.896-2-2V9c0-1.104.896-2 2-2s2 .896 2 2v6z",}));el.appendChild(svg["path"]("M11 34c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2zm22 0c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z", {["fill"]: "#292F33",["d"]: "M11 34c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2zm22 0c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2s.896-2 2-2h4c1.104 0 2 .896 2 2z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};