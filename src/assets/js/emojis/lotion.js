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
				el.appendChild(svg["path"]("M17 3h2v5h-2z", {["fill"]: "#66757F",["d"]: "M17 3h2v5h-2z",}));el.appendChild(svg["path"]("M12 12V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3H12z", {["fill"]: "#99AAB5",["d"]: "M12 12V9c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v3H12z",}));el.appendChild(svg["path"]("M24 11H12c-5 0-6 21-6 21 0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4 0 0-1-21-6-21z", {["fill"]: "#FFAC33",["d"]: "M24 11H12c-5 0-6 21-6 21 0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4 0 0-1-21-6-21z",}));el.appendChild(svg["path"]("M8 4s2-4 7-4h6c2 0 2 4 0 4h-6c-5 0-6 1-6 1L8 4z", {["fill"]: "#CCD6DD",["d"]: "M8 4s2-4 7-4h6c2 0 2 4 0 4h-6c-5 0-6 1-6 1L8 4z",}));el.appendChild(svg["path"]("M8.464 4.464L9 5s1-1 6-1h6c.975 0 1.472-.949 1.496-1.922C21 2.078 19.524 2 15 2c-3.859 0-5.519 1.377-6.536 2.464z", {["fill"]: "#99AAB5",["d"]: "M8.464 4.464L9 5s1-1 6-1h6c.975 0 1.472-.949 1.496-1.922C21 2.078 19.524 2 15 2c-3.859 0-5.519 1.377-6.536 2.464z",}));el.appendChild(svg["path"]("M23.5 13h-11c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h11c.275 0 .5.225.5.5s-.225.5-.5.5z", {["fill"]: "#FFCC4D",["d"]: "M23.5 13h-11c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h11c.275 0 .5.225.5.5s-.225.5-.5.5z",}));el.appendChild(svg["path"]("M18 18s-4 4.791-4 7c0 2.209 1.791 4 4 4s4-1.791 4-4-4-7-4-7z", {["fill"]: "#FFE8B6",["d"]: "M18 18s-4 4.791-4 7c0 2.209 1.791 4 4 4s4-1.791 4-4-4-7-4-7z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};