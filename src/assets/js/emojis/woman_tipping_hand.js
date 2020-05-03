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
				el.appendChild(svg["path"]("M14 0c-1.721 0-3.343.406-4.793 1.111C8.814 1.043 8.412 1 8 1 4.134 1 1 4.134 1 8v12h.018C1.201 26.467 6.489 31.656 13 31.656c6.511 0 11.799-5.189 11.982-11.656H25v-9c0-6.075-4.925-11-11-11z", {["fill"]: "#FFAC33",["d"]: "M14 0c-1.721 0-3.343.406-4.793 1.111C8.814 1.043 8.412 1 8 1 4.134 1 1 4.134 1 8v12h.018C1.201 26.467 6.489 31.656 13 31.656c6.511 0 11.799-5.189 11.982-11.656H25v-9c0-6.075-4.925-11-11-11z",}));el.appendChild(svg["path"]("M22 27H4c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z", {["fill"]: "#9268CA",["d"]: "M22 27H4c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M21 32h1v4h-1zM4 32h1v4H4z", {["fill"]: "#7450A8",["d"]: "M21 32h1v4h-1zM4 32h1v4H4z",}));el.appendChild(svg["path"]("M10 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z", {["fill"]: "#FFDC5D",["d"]: "M10 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z",}));el.appendChild(svg["path"]("M9 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019C10.89 11.605 9 5 9 5z", {["fill"]: "#FFDC5D",["d"]: "M9 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019C10.89 11.605 9 5 9 5z",}));el.appendChild(svg["path"]("M17 22H9s1 2 4 2 4-2 4-2z", {["fill"]: "#DF1F32",["d"]: "M17 22H9s1 2 4 2 4-2 4-2z",}));el.appendChild(svg["path"]("M29 36h-7l1-17h6z", {["fill"]: "#9268CA",["d"]: "M29 36h-7l1-17h6z",}));el.appendChild(svg["path"]("M31.541 15.443c-.144-.693-.822-1.139-1.517-.997L27.35 15H25c-1.104 0-2 .896-2 2v2h5c1.079 0 1.953-.857 1.992-1.927l.355-.073H31c0-.074-.028-.144-.045-.216.444-.276.698-.799.586-1.341z", {["fill"]: "#F9CA55",["d"]: "M31.541 15.443c-.144-.693-.822-1.139-1.517-.997L27.35 15H25c-1.104 0-2 .896-2 2v2h5c1.079 0 1.953-.857 1.992-1.927l.355-.073H31c0-.074-.028-.144-.045-.216.444-.276.698-.799.586-1.341z",}));el.appendChild(svg["path"]("M36 16c0-.552-.447-1-1-1l-6 1h-5c-.553 0-1 .448-1 1v2h6l6-2s1-.447 1-1z", {["fill"]: "#FFDC5D",["d"]: "M36 16c0-.552-.447-1-1-1l-6 1h-5c-.553 0-1 .448-1 1v2h6l6-2s1-.447 1-1z",}));el.appendChild(svg["path"]("M14 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z", {["fill"]: "#C1694F",["d"]: "M14 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z",}));el.appendChild(svg["path"]("M9 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z", {["fill"]: "#662113",["d"]: "M9 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};