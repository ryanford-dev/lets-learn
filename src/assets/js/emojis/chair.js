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
				el.appendChild(svg["path"]("M12 20c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2V22c0-1.1-.9-2-2-2zm18 0c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2V22c0-1.1-.9-2-2-2z", {["fill"]: "#A4523A",["d"]: "M12 20c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2V22c0-1.1-.9-2-2-2zm18 0c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2s2-.9 2-2V22c0-1.1-.9-2-2-2z",}));el.appendChild(svg["path"]("M13 2h16v8H13z", {["fill"]: "#C1694F",["d"]: "M13 2h16v8H13z",}));el.appendChild(svg["path"]("M16 9h2v13h-2zm4 0h2v13h-2zm4 0h2v13h-2zM7 23c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2s2-.9 2-2v-9c0-1.1-.9-2-2-2z", {["fill"]: "#C1694F",["d"]: "M16 9h2v13h-2zm4 0h2v13h-2zm4 0h2v13h-2zM7 23c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2s2-.9 2-2v-9c0-1.1-.9-2-2-2z",}));el.appendChild(svg["path"]("M25 21c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V23c0-1.1-.9-2-2-2zM12 0c-1.1 0-2 .9-2 2v20h4V2c0-1.1-.9-2-2-2zm18 0c-1.1 0-2 .9-2 2v20h4V2c0-1.1-.9-2-2-2z", {["fill"]: "#C1694F",["d"]: "M25 21c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2s2-.9 2-2V23c0-1.1-.9-2-2-2zM12 0c-1.1 0-2 .9-2 2v20h4V2c0-1.1-.9-2-2-2zm18 0c-1.1 0-2 .9-2 2v20h4V2c0-1.1-.9-2-2-2z",}));el.appendChild(svg["path"]("M14 2h1v8h-1zm14 8h-1V2h1z", {["fill"]: "#A4523A",["d"]: "M14 2h1v8h-1zm14 8h-1V2h1z",}));el.appendChild(svg["path"]("M30.769 20H10.341c-.223 0-.442.061-.633.175l-5.954 3.041s22.726 2.418 24.726 2.418l3.029-2.265c.309-.232.491-.597.491-.985v-1.153c0-.68-.551-1.231-1.231-1.231z", {["fill"]: "#D99E82",["d"]: "M30.769 20H10.341c-.223 0-.442.061-.633.175l-5.954 3.041s22.726 2.418 24.726 2.418l3.029-2.265c.309-.232.491-.597.491-.985v-1.153c0-.68-.551-1.231-1.231-1.231z",}));el.appendChild(svg["path"]("M16 10h2v1h-2zM5 26h4v1H5zm18 0h4v1h-4zm-3-16h2v1h-2zm4 0h2v1h-2z", {["fill"]: "#A4523A",["d"]: "M16 10h2v1h-2zM5 26h4v1H5zm18 0h4v1h-4zm-3-16h2v1h-2zm4 0h2v1h-2z",}));el.appendChild(svg["path"]("M27.44 26H4.56C3.698 26 3 25.328 3 24.5S3.698 23 4.56 23h22.88c.862 0 1.56.672 1.56 1.5s-.698 1.5-1.56 1.5z", {["fill"]: "#C1694F",["d"]: "M27.44 26H4.56C3.698 26 3 25.328 3 24.5S3.698 23 4.56 23h22.88c.862 0 1.56.672 1.56 1.5s-.698 1.5-1.56 1.5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};