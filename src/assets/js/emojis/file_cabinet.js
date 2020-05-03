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
				el.appendChild(svg["path"]("M30 34c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v32z", {["fill"]: "#292F33",["d"]: "M30 34c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v32z",}));el.appendChild(svg["path"]("M28 16c0 .552-.447 1-1 1H9c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h18c.553 0 1 .448 1 1v13zm0 17c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1V20c0-.553.448-1 1-1h18c.553 0 1 .447 1 1v13z", {["fill"]: "#66757F",["d"]: "M28 16c0 .552-.447 1-1 1H9c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h18c.553 0 1 .448 1 1v13zm0 17c0 .553-.447 1-1 1H9c-.552 0-1-.447-1-1V20c0-.553.448-1 1-1h18c.553 0 1 .447 1 1v13z",}));el.appendChild(svg["path"]("M22 8c0 .552-.447 1-1 1h-6c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h6c.553 0 1 .448 1 1v3zm0 17c0 .553-.447 1-1 1h-6c-.552 0-1-.447-1-1v-3c0-.553.448-1 1-1h6c.553 0 1 .447 1 1v3z", {["fill"]: "#292F33",["d"]: "M22 8c0 .552-.447 1-1 1h-6c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h6c.553 0 1 .448 1 1v3zm0 17c0 .553-.447 1-1 1h-6c-.552 0-1-.447-1-1v-3c0-.553.448-1 1-1h6c.553 0 1 .447 1 1v3z",}));el.appendChild(svg["path"]("M15 5h6v3h-6zm0 17h6v3h-6zm9-8.97c0 .536-.435.97-.97.97H12.97c-.536 0-.97-.435-.97-.97v-.06c0-.536.434-.97.97-.97h10.06c.535 0 .97.435.97.97v.06zm0 16.999c0 .536-.435.971-.97.971H12.97c-.536 0-.97-.435-.97-.971v-.059c0-.535.434-.97.97-.97h10.06c.535 0 .97.435.97.971v.058z", {["fill"]: "#E1E8ED",["d"]: "M15 5h6v3h-6zm0 17h6v3h-6zm9-8.97c0 .536-.435.97-.97.97H12.97c-.536 0-.97-.435-.97-.97v-.06c0-.536.434-.97.97-.97h10.06c.535 0 .97.435.97.97v.06zm0 16.999c0 .536-.435.971-.97.971H12.97c-.536 0-.97-.435-.97-.971v-.059c0-.535.434-.97.97-.97h10.06c.535 0 .97.435.97.971v.058z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};