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
				el.appendChild(svg["path"]("M6.318 1.031c1.499 1.499 13.184 8.685 23.386 0V12H6.318V1.031z", {["fill"]: "#269",["d"]: "M6.318 1.031c1.499 1.499 13.184 8.685 23.386 0V12H6.318V1.031z",}));el.appendChild(svg["path"]("M34.918 5.946c0-2.537-2.429-4.475-4.27-5.391-.761-.378-1.812.393-1.896.873-.943 5.39-6.867 10.08-10.753 10.08-3.833 0-9.636-4.563-10.696-9.861C7.193 1.096 6.12.18 5.356.562c-1.838.917-4.251 2.853-4.251 5.384 3.122 4.607 3.827 6.381 3.827 11.159 0 4.777-1.366 14.117-2.56 16.507C3.566 34.807 10.594 36 18 36c7.405 0 14.448-1.193 15.642-2.389-1.194-2.39-2.546-11.73-2.546-16.507 0-4.777.701-6.551 3.822-11.158z", {["fill"]: "#55ACEE",["d"]: "M34.918 5.946c0-2.537-2.429-4.475-4.27-5.391-.761-.378-1.812.393-1.896.873-.943 5.39-6.867 10.08-10.753 10.08-3.833 0-9.636-4.563-10.696-9.861C7.193 1.096 6.12.18 5.356.562c-1.838.917-4.251 2.853-4.251 5.384 3.122 4.607 3.827 6.381 3.827 11.159 0 4.777-1.366 14.117-2.56 16.507C3.566 34.807 10.594 36 18 36c7.405 0 14.448-1.193 15.642-2.389-1.194-2.39-2.546-11.73-2.546-16.507 0-4.777.701-6.551 3.822-11.158z",}));el.appendChild(svg["path"]("M4.192 25.616c-.433 3.006-1.002 5.832-1.56 7.366l28.506-17.637c.177-3.329.976-5.184 3.323-8.717L4.192 25.616z", {["fill"]: "#FFD983",["d"]: "M4.192 25.616c-.433 3.006-1.002 5.832-1.56 7.366l28.506-17.637c.177-3.329.976-5.184 3.323-8.717L4.192 25.616z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};