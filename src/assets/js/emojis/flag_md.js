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
				el.appendChild(svg["path"]("M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z", {["fill"]: "#DD2E44",["d"]: "M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z", {["fill"]: "#265FB5",["d"]: "M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z",}));el.appendChild(svg["path"]("M12 5h12v26H12z", {["fill"]: "#FFCC4D",["d"]: "M12 5h12v26H12z",}));el.appendChild(svg["path"]("M16 15h4v3h-4z", {["fill"]: "#DD2E44",["d"]: "M16 15h4v3h-4z",}));el.appendChild(svg["path"]("M16 18v2l2 1 2-1v-2z", {["fill"]: "#269",["d"]: "M16 18v2l2 1 2-1v-2z",}));el.appendChild(svg["path"]("M16 11v1h1v2h2v-3zm3 10l-1 .625L17 21l-1 3 2 1 2-1zm-4-8l-1-1-1 1v10l2-2v-7h1zm7-1l-1 1-1 1h1v7l2 2V13z", {["fill"]: "#A0724A",["d"]: "M16 11v1h1v2h2v-3zm3 10l-1 .625L17 21l-1 3 2 1 2-1zm-4-8l-1-1-1 1v10l2-2v-7h1zm7-1l-1 1-1 1h1v7l2 2V13z",}));el.appendChild(svg["path"]("M16.234 17.594h.531V18h-.531zm3 0h.531V18h-.531z", {["fill"]: "#FFCC4D",["d"]: "M16.234 17.594h.531V18h-.531zm3 0h.531V18h-.531z",}));el.appendChild(svg["path"]("M15.637 22.743c-.106.062-.263-.01-.35-.159l-2.232-3.866c-.086-.15-.07-.321.037-.383l.136-.078c.106-.062.263.01.349.159l2.232 3.867c.087.149.07.32-.036.382l-.136.078z", {["fill"]: "#77B255",["d"]: "M15.637 22.743c-.106.062-.263-.01-.35-.159l-2.232-3.866c-.086-.15-.07-.321.037-.383l.136-.078c.106-.062.263.01.349.159l2.232 3.867c.087.149.07.32-.036.382l-.136.078z",}));el.appendChild(svg["path"]("M22.817 18.393c.107.061.125.23.039.377l-2.191 3.798c-.086.147-.24.216-.348.155l-.135-.078c-.106-.062-.124-.23-.039-.378l2.192-3.798c.085-.146.24-.217.347-.154l.135.078z", {["fill"]: "#FFCC4D",["d"]: "M22.817 18.393c.107.061.125.23.039.377l-2.191 3.798c-.086.147-.24.216-.348.155l-.135-.078c-.106-.062-.124-.23-.039-.378l2.192-3.798c.085-.146.24-.217.347-.154l.135.078z",}));el.appendChild(svg["path"]("M16 21l-1 1v1l1-1zm4 0v1l1 1v-1z", {["fill"]: "#DD2E44",["d"]: "M16 21l-1 1v1l1-1zm4 0v1l1 1v-1z",}));el.appendChild(svg["path"]("M18 17l-1-1v2.958L18 20l1-1.042V16z", {["fill"]: "#FFCC4D",["d"]: "M18 17l-1-1v2.958L18 20l1-1.042V16z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};