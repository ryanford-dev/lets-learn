import { h } from "/assets/js/vendor/hyperapp.js";
import picostyle from "/assets/js/vendor/picostyle.js";
import { Link, location } from "/assets/js/vendor/router.js";
import abacus from "/assets/js/emojis/abacus.js";
import puzzle_piece from "/assets/js/emojis/puzzle_piece.js";

const style = picostyle(h);

const state = {
	location: location.state,
};

const actions = {
	location: location.actions,
};

const emoji = {
	abacus: abacus({ size: 2 }),
	jigsaw: style(puzzle_piece)({ filter: "hue-rotate(-115deg)" })({ size: 2 }),
};

const view = (state, actions) => props => h("nav", { class: "side-bar" }, [
	h("h4", {}, [ "Lessons", emoji.abacus ]),
	h("ul", {},	[
		...props.modules.lessons.map(lesson => h("li", {}, [
			Link({ to: lesson.href, }, h("span", {
				onclick: () => window.main.setScene(null)
			}, lesson.name))
		]))
	]),
	h("h4", {}, [ "Games", emoji.jigsaw ]),
	h("ul", {},	[
		...props.modules.games.map(game => h("li", {}, [
			Link({ to: game.href, }, h("span", {
				onclick: () => window.main.setScene(null)
			}, game.name))
		]))
	]),
]);

export const navbar = { state, actions, view };
