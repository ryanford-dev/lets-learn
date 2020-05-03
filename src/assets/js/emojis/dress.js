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
				el.appendChild(svg["path"]("M22.42 11.847L26 2s-.398.002-1 .034V0h-2v2.219c-2.271.302-5 1.028-5 2.781 0-1.753-2.729-2.479-5-2.781V0h-2v2.034C10.398 2.002 10 2 10 2l3.581 9.847L1 25.643S7 36 18 36s17-10.357 17-10.357L22.42 11.847z", {["fill"]: "#55ACEE",["d"]: "M22.42 11.847L26 2s-.398.002-1 .034V0h-2v2.219c-2.271.302-5 1.028-5 2.781 0-1.753-2.729-2.479-5-2.781V0h-2v2.034C10.398 2.002 10 2 10 2l3.581 9.847L1 25.643S7 36 18 36s17-10.357 17-10.357L22.42 11.847z",}));el.appendChild(svg["path"]("M13 11h10v2H13z", {["fill"]: "#BBDDF5",["d"]: "M13 11h10v2H13z",}));el.appendChild(svg["path"]("M15 13s-6.734 8.106-5.051 9.006C11.633 22.907 15 13 15 13zm6.096 0s6.734 8.105 5.051 9.007c-1.684.9-5.051-9.007-5.051-9.007zM18 13s-2 11 0 11 0-11 0-11z", {["fill"]: "#3B88C3",["d"]: "M15 13s-6.734 8.106-5.051 9.006C11.633 22.907 15 13 15 13zm6.096 0s6.734 8.105 5.051 9.007c-1.684.9-5.051-9.007-5.051-9.007zM18 13s-2 11 0 11 0-11 0-11z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};