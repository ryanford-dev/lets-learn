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
				el.appendChild(svg["path"]("M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z", {["fill"]: "#3B88C3",["d"]: "M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z",}));el.appendChild(svg["path"]("M12.953 15.717c.549-1.394 1.234-2.861 2.175-4.142C13.95 10.064 12.351 9 10 9H7v4h3c1.307 0 2.119.896 2.953 2.717zm6.527 5.424c-.478 1.314-1.059 2.777-1.852 4.132C18.718 26.318 20.117 27 22 27h3v-4h-3c-1.082 0-1.822-.62-2.52-1.859z", {["d"]: "M12.953 15.717c.549-1.394 1.234-2.861 2.175-4.142C13.95 10.064 12.351 9 10 9H7v4h3c1.307 0 2.119.896 2.953 2.717zm6.527 5.424c-.478 1.314-1.059 2.777-1.852 4.132C18.718 26.318 20.117 27 22 27h3v-4h-3c-1.082 0-1.822-.62-2.52-1.859z",["fill"]: "#FFF",}));el.appendChild(svg["path"]("M10 27H7v-4h3c1.884 0 2.739-1.816 4.117-5.673C15.441 13.617 17.09 9 22 9h3v4h-3c-1.885 0-2.739 1.817-4.117 5.673C16.559 22.383 14.91 27 10 27z", {["fill"]: "#FFF",["d"]: "M10 27H7v-4h3c1.884 0 2.739-1.816 4.117-5.673C15.441 13.617 17.09 9 22 9h3v4h-3c-1.885 0-2.739 1.817-4.117 5.673C16.559 22.383 14.91 27 10 27z",}));el.appendChild(svg["path"]("M30.2 11L23 5v12zm0 14L23 19v12z", {["fill"]: "#FFF",["d"]: "M30.2 11L23 5v12zm0 14L23 19v12z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};