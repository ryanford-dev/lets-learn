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
				el.appendChild(svg["path"]("M33.73 18.187c-.491 1.981-1.376 2.514-3.356 2.022L18.72 17.322l3.332-13.448 11.655 2.888c1.979.491 2.515 1.376 2.023 3.356l-2 8.069z", {["fill"]: "#E8EAEB",["d"]: "M33.73 18.187c-.491 1.981-1.376 2.514-3.356 2.022L18.72 17.322l3.332-13.448 11.655 2.888c1.979.491 2.515 1.376 2.023 3.356l-2 8.069z",}));el.appendChild(svg["path"]("M14.1 34.383c-.073 0-.147-.009-.221-.027-.495-.121-.798-.622-.676-1.117L20.811 2.32c.122-.496.622-.798 1.117-.676s.798.623.676 1.118L14.996 33.68c-.103.421-.481.703-.896.703z", {["fill"]: "#66757F",["d"]: "M14.1 34.383c-.073 0-.147-.009-.221-.027-.495-.121-.798-.622-.676-1.117L20.811 2.32c.122-.496.622-.798 1.117-.676s.798.623.676 1.118L14.996 33.68c-.103.421-.481.703-.896.703z",}));el.appendChild(svg["path"]("M30.248 13.042c-.43 1.733-2.183 2.79-3.915 2.36-1.733-.429-2.791-2.182-2.361-3.916.43-1.733 2.184-2.79 3.916-2.36 1.732.43 2.788 2.183 2.36 3.916z", {["fill"]: "#BE1931",["d"]: "M30.248 13.042c-.43 1.733-2.183 2.79-3.915 2.36-1.733-.429-2.791-2.182-2.361-3.916.43-1.733 2.184-2.79 3.916-2.36 1.732.43 2.788 2.183 2.36 3.916z",}));el.appendChild(svg["path"]("M2.27 18.187c.491 1.981 1.375 2.514 3.356 2.022l11.655-2.887-3.333-13.448L2.293 6.762C.313 7.253-.221 8.138.27 10.118l2 8.069z", {["fill"]: "#E8EAEB",["d"]: "M2.27 18.187c.491 1.981 1.375 2.514 3.356 2.022l11.655-2.887-3.333-13.448L2.293 6.762C.313 7.253-.221 8.138.27 10.118l2 8.069z",}));el.appendChild(svg["path"]("M21.9 34.383c-.415 0-.792-.282-.896-.703L13.396 2.762c-.122-.495.181-.996.676-1.118.499-.121.996.181 1.118.676l7.607 30.918c.122.495-.181.996-.676 1.117-.074.019-.148.028-.221.028z", {["fill"]: "#66757F",["d"]: "M21.9 34.383c-.415 0-.792-.282-.896-.703L13.396 2.762c-.122-.495.181-.996.676-1.118.499-.121.996.181 1.118.676l7.607 30.918c.122.495-.181.996-.676 1.117-.074.019-.148.028-.221.028z",}));el.appendChild(svg["path"]("M5.752 13.042c.43 1.733 2.183 2.79 3.916 2.36 1.733-.429 2.79-2.182 2.361-3.916-.429-1.733-2.183-2.79-3.915-2.36-1.734.43-2.791 2.183-2.362 3.916z", {["fill"]: "#BE1931",["d"]: "M5.752 13.042c.43 1.733 2.183 2.79 3.916 2.36 1.733-.429 2.79-2.182 2.361-3.916-.429-1.733-2.183-2.79-3.915-2.36-1.734.43-2.791 2.183-2.362 3.916z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};