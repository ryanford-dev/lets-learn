import { h } from "/assets/js/vendor/hyperapp.js";
import picostyle from "/assets/js/vendor/picostyle.js";
import busts_silhouette from "/assets/js/emojis/busts_silhouette.js";

const style = picostyle(h);

const state = {
	drawerActive: false,
	displayName: "Login",
};

const emoji = {
	busts_silhouette: busts_silhouette,
};

const actions = {
	toggleNav: () => state => ({ drawerActive: !state.drawerActive }),
	closeNav: () => ({ drawerActive: false }),
	login: e => {
		// login
		let target = e.target;
		if (target.tagName !== "A") {
			target = target.querySelector("a");
		}
		const user = target.textContent;
		return { displayName: user };
	},
};

const view = (state, actions) => props => h("header", {}, [
	h("div", { class: "top-container" }, [
		h("a", { class: "branding", href: "/", }, "Let's Learn!"),
		h("div", { class: "top-links" }, [
			h("button", {
				class: "top-toggle",
				onclick: actions.toggleNav,
				onblur: actions.closeNav,
			}, [
				h("span", { style: { marginRight: "0.3125rem" } }, state.displayName),
				emoji.busts_silhouette({
					size: 1.5,
					style: { verticalAlign: "middle", },
				}),
			]),
			h("ul", { class: "top-items" + (state.drawerActive ? " active" : ""),  key: "top-items", }, [
				...props.users.map(user => h("li", {}, [
					h("a", {
						href: "#",
						onclick: e => actions.login(e),
					}, [user.name])
				]))
			]),
		]),
	]),
]);

export const header = { state, actions, view };
