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
				el.appendChild(svg["path"]("M31 6V1.955c0-.527-.428-.955-.955-.955H5.955C5.428 1 5 1.428 5 1.955V6L0 31l14 4 4-10.545L22 35l14-4-5-25z", {["fill"]: "#78B159",["d"]: "M31 6V1.955c0-.527-.428-.955-.955-.955H5.955C5.428 1 5 1.428 5 1.955V6L0 31l14 4 4-10.545L22 35l14-4-5-25z",}));el.appendChild(svg["path"]("M5 4h26v2H5zm8.782 2h-2.074c-1.378 4.107-5.46 5.399-7.87 5.807l-.421 2.107c3.606-.408 8.9-2.403 10.365-7.914z", {["d"]: "M5 4h26v2H5zm8.782 2h-2.074c-1.378 4.107-5.46 5.399-7.87 5.807l-.421 2.107c3.606-.408 8.9-2.403 10.365-7.914z",["fill"]: "#5D9040",}));el.appendChild(svg["path"]("M32.583 13.914l-.421-2.107c-2.41-.408-6.491-1.701-7.87-5.807h-2.074c1.464 5.511 6.759 7.506 10.365 7.914zM17 6v21.091l1-2.636 1 2.636V6z", {["d"]: "M32.583 13.914l-.421-2.107c-2.41-.408-6.491-1.701-7.87-5.807h-2.074c1.464 5.511 6.759 7.506 10.365 7.914zM17 6v21.091l1-2.636 1 2.636V6z",["fill"]: "#5D9040",}));el.appendChild(svg["path"]("M18.149 23H18v-2h.149C19.722 21 21 19.722 21 18.149V5h2v13.149C23 20.824 20.824 23 18.149 23z", {["d"]: "M18.149 23H18v-2h.149C19.722 21 21 19.722 21 18.149V5h2v13.149C23 20.824 20.824 23 18.149 23z",["fill"]: "#5D9040",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};