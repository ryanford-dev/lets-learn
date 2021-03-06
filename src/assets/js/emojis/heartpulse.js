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
				el.appendChild(svg["path"]("M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z", {["fill"]: "#F4ABBA",["d"]: "M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z",}));el.appendChild(svg["path"]("M31.423 13.372c0-4.091-3.315-7.406-7.405-7.406-2.482 0-4.673 1.225-6.018 3.099-1.344-1.874-3.535-3.099-6.017-3.099-4.09 0-7.406 3.315-7.406 7.406 0 .579.074 1.141.199 1.681C5.805 21.442 12.908 28.184 18 30.034c5.091-1.851 12.195-8.592 13.223-14.98.127-.541.2-1.103.2-1.682z", {["fill"]: "#EA596E",["d"]: "M31.423 13.372c0-4.091-3.315-7.406-7.405-7.406-2.482 0-4.673 1.225-6.018 3.099-1.344-1.874-3.535-3.099-6.017-3.099-4.09 0-7.406 3.315-7.406 7.406 0 .579.074 1.141.199 1.681C5.805 21.442 12.908 28.184 18 30.034c5.091-1.851 12.195-8.592 13.223-14.98.127-.541.2-1.103.2-1.682z",}));el.appendChild(svg["path"]("M27.191 14.831c0-2.801-2.27-5.072-5.07-5.072-1.7 0-3.2.839-4.121 2.123-.92-1.284-2.421-2.123-4.121-2.123-2.801 0-5.072 2.271-5.072 5.072 0 .397.05.781.136 1.151.705 4.376 5.569 8.992 9.056 10.259 3.485-1.268 8.352-5.884 9.055-10.259.088-.37.137-.755.137-1.151z", {["fill"]: "#DD2E44",["d"]: "M27.191 14.831c0-2.801-2.27-5.072-5.07-5.072-1.7 0-3.2.839-4.121 2.123-.92-1.284-2.421-2.123-4.121-2.123-2.801 0-5.072 2.271-5.072 5.072 0 .397.05.781.136 1.151.705 4.376 5.569 8.992 9.056 10.259 3.485-1.268 8.352-5.884 9.055-10.259.088-.37.137-.755.137-1.151z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};