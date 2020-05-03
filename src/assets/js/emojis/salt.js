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
				el.appendChild(svg["path"]("M26 4c0 3-3.582 6-8 6s-8-3-8-6c0-4.418 6-4 8-4s8-.418 8 4z", {["fill"]: "#66757F",["d"]: "M26 4c0 3-3.582 6-8 6s-8-3-8-6c0-4.418 6-4 8-4s8-.418 8 4z",}));el.appendChild(svg["path"]("M24.306 12H11.694c-.978 0-1.812.707-1.973 1.671l-3.333 20C6.185 34.89 7.125 36 8.361 36h19.278c1.236 0 2.176-1.11 1.973-2.329l-3.333-20c-.161-.964-.996-1.671-1.973-1.671z", {["fill"]: "#CCD6DD",["d"]: "M24.306 12H11.694c-.978 0-1.812.707-1.973 1.671l-3.333 20C6.185 34.89 7.125 36 8.361 36h19.278c1.236 0 2.176-1.11 1.973-2.329l-3.333-20c-.161-.964-.996-1.671-1.973-1.671z",}));el.appendChild(svg["path"]("M19.344 14h-6.802c-.489 0-.906.353-.986.836l-3 18c-.103.609.367 1.164.985 1.164h10.427l-.624-20zm5.101.836c-.08-.483-.498-.836-.986-.836h-2.413l.909 20h4.505c.618 0 1.088-.555.986-1.164l-3.001-18z", {["fill"]: "#F5F8FA",["d"]: "M19.344 14h-6.802c-.489 0-.906.353-.986.836l-3 18c-.103.609.367 1.164.985 1.164h10.427l-.624-20zm5.101.836c-.08-.483-.498-.836-.986-.836h-2.413l.909 20h4.505c.618 0 1.088-.555.986-1.164l-3.001-18z",}));el.appendChild(svg["ellipse"](15, 1.5, 2.4, 1.2, {["rx"]: "1.2",["cy"]: "1.5",["ry"]: ".6",["fill"]: "#CCD6DD",["cx"]: "15",}));el.appendChild(svg["ellipse"](21, 1.5, 2.4, 1.2, {["rx"]: "1.2",["cy"]: "1.5",["ry"]: ".6",["fill"]: "#CCD6DD",["cx"]: "21",}));el.appendChild(svg["ellipse"](18, 3.5, 2.4, 1.2, {["rx"]: "1.2",["cy"]: "3.5",["ry"]: ".6",["fill"]: "#CCD6DD",["cx"]: "18",}));el.appendChild(svg["path"]("M25 12H11V9.528c0-.844.684-1.262 1.528-1.262h10.944c.844 0 1.528.418 1.528 1.262V12z", {["fill"]: "#66757F",["d"]: "M25 12H11V9.528c0-.844.684-1.262 1.528-1.262h10.944c.844 0 1.528.418 1.528 1.262V12z",}));el.appendChild(svg["path"]("M23.472 8H12.528c-.657 0-1.213.417-1.429 1H24.9c-.215-.583-.77-1-1.428-1zM11 10h14v1H11zm0 2h14v.5H11z", {["fill"]: "#CCD6DD",["d"]: "M23.472 8H12.528c-.657 0-1.213.417-1.429 1H24.9c-.215-.583-.77-1-1.428-1zM11 10h14v1H11zm0 2h14v.5H11z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};