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
				el.appendChild(svg["path"]("M17 34c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V18c0-1.104-.896-2-2-2H19c-1.104 0-2 .896-2 2v16z", {["fill"]: "#AAB8C2",["d"]: "M17 34c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V18c0-1.104-.896-2-2-2H19c-1.104 0-2 .896-2 2v16z",}));el.appendChild(svg["path"]("M33 16H23v2h12c0-1.104-.896-2-2-2z", {["fill"]: "#292F33",["d"]: "M33 16H23v2h12c0-1.104-.896-2-2-2z",}));el.appendChild(svg["path"]("M3 30h30v4H3z", {["fill"]: "#3B88C3",["d"]: "M3 30h30v4H3z",}));el.appendChild(svg["path"]("M3 16c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20V16H3z", {["fill"]: "#CCD6DD",["d"]: "M3 16c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20V16H3z",}));el.appendChild(svg["path"]("M3 16c-1.104 0-2 .896-2 2h22v-2H3z", {["fill"]: "#66757F",["d"]: "M3 16c-1.104 0-2 .896-2 2h22v-2H3z",}));el.appendChild(svg["path"]("M3 20h4v4H3zm14 0h4v4h-4zm-7 0h4v4h-4z", {["fill"]: "#55ACEE",["d"]: "M3 20h4v4H3zm14 0h4v4h-4zm-7 0h4v4h-4z",}));el.appendChild(svg["path"]("M29 20h4v4h-4zm-6 0h4v4h-4z", {["fill"]: "#3B88C3",["d"]: "M29 20h4v4h-4zm-6 0h4v4h-4z",}));el.appendChild(svg["path"]("M3 30h18v6H3z", {["fill"]: "#55ACEE",["d"]: "M3 30h18v6H3z",}));el.appendChild(svg["path"]("M7 30h10v6H7z", {["fill"]: "#3B88C3",["d"]: "M7 30h10v6H7z",}));el.appendChild(svg["path"]("M1 26h22v4H1z", {["fill"]: "#DD2E44",["d"]: "M1 26h22v4H1z",}));el.appendChild(svg["path"]("M7 27h10v2H7z", {["fill"]: "#F4ABBA",["d"]: "M7 27h10v2H7z",}));el.appendChild(svg["path"]("M9 27h6v2H9z", {["fill"]: "#FFF",["d"]: "M9 27h6v2H9z",}));el.appendChild(svg["path"]("M23 26h12v4H23z", {["fill"]: "#A0041E",["d"]: "M23 26h12v4H23z",}));el.appendChild(svg["path"]("M5 14h2v2H5zm12 0h2v2h-2z", {["fill"]: "#292F33",["d"]: "M5 14h2v2H5zm12 0h2v2h-2z",}));el.appendChild(svg["path"]("M21 12c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v10z", {["fill"]: "#DD2E44",["d"]: "M21 12c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v10z",}));el.appendChild(svg["path"]("M10.561 10.151c.616 0 1.093.28 1.093.925 0 .644-.477.924-1.009.924H5.967c-.617 0-1.093-.28-1.093-.924 0-.294.182-.546.322-.714C6.359 8.975 7.62 7.714 8.685 6.173c.252-.364.49-.798.49-1.303 0-.574-.434-1.079-1.009-1.079-1.611 0-.84 2.269-2.185 2.269-.672 0-1.022-.476-1.022-1.022 0-1.765 1.569-3.18 3.292-3.18 1.723 0 3.109 1.135 3.109 2.914 0 1.947-2.171 3.88-3.362 5.379h2.563zm2.363-.35c-.687 0-.981-.462-.981-.826 0-.309.112-.477.196-.617l3.138-5.687c.308-.56.7-.813 1.429-.813.812 0 1.611.519 1.611 1.793v4.3h.238c.546 0 .98.364.98.925 0 .56-.434.924-.98.924h-.238v1.19c0 .743-.295 1.093-1.009 1.093s-1.008-.35-1.008-1.093V9.8h-3.376zM16.3 4.044h-.028l-1.891 3.908H16.3V4.044z", {["d"]: "M10.561 10.151c.616 0 1.093.28 1.093.925 0 .644-.477.924-1.009.924H5.967c-.617 0-1.093-.28-1.093-.924 0-.294.182-.546.322-.714C6.359 8.975 7.62 7.714 8.685 6.173c.252-.364.49-.798.49-1.303 0-.574-.434-1.079-1.009-1.079-1.611 0-.84 2.269-2.185 2.269-.672 0-1.022-.476-1.022-1.022 0-1.765 1.569-3.18 3.292-3.18 1.723 0 3.109 1.135 3.109 2.914 0 1.947-2.171 3.88-3.362 5.379h2.563zm2.363-.35c-.687 0-.981-.462-.981-.826 0-.309.112-.477.196-.617l3.138-5.687c.308-.56.7-.813 1.429-.813.812 0 1.611.519 1.611 1.793v4.3h.238c.546 0 .98.364.98.925 0 .56-.434.924-.98.924h-.238v1.19c0 .743-.295 1.093-1.009 1.093s-1.008-.35-1.008-1.093V9.8h-3.376zM16.3 4.044h-.028l-1.891 3.908H16.3V4.044z",["fill"]: "#FFF",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};