import { h } from "/assets/js/vendor/hyperapp.js";
import { renderToString } from "/assets/js/vendor/hyperapp-render.js";
import picostyle from "/assets/js/vendor/picostyle.js";
import uuid from "/assets/js/vendor/uuid.js";
import regional_indicator_a from "/assets/js/emojis/regional_indicator_a.js";
import regional_indicator_b from "/assets/js/emojis/regional_indicator_b.js";
import regional_indicator_c from "/assets/js/emojis/regional_indicator_c.js";
import regional_indicator_d from "/assets/js/emojis/regional_indicator_d.js";
import regional_indicator_e from "/assets/js/emojis/regional_indicator_e.js";
import regional_indicator_f from "/assets/js/emojis/regional_indicator_f.js";
import regional_indicator_g from "/assets/js/emojis/regional_indicator_g.js";
import regional_indicator_h from "/assets/js/emojis/regional_indicator_h.js";
import regional_indicator_i from "/assets/js/emojis/regional_indicator_i.js";
import regional_indicator_j from "/assets/js/emojis/regional_indicator_j.js";
import regional_indicator_k from "/assets/js/emojis/regional_indicator_k.js";
import regional_indicator_l from "/assets/js/emojis/regional_indicator_l.js";
import regional_indicator_m from "/assets/js/emojis/regional_indicator_m.js";
import regional_indicator_n from "/assets/js/emojis/regional_indicator_n.js";
import regional_indicator_o from "/assets/js/emojis/regional_indicator_o.js";
import regional_indicator_p from "/assets/js/emojis/regional_indicator_p.js";
import regional_indicator_q from "/assets/js/emojis/regional_indicator_q.js";
import regional_indicator_r from "/assets/js/emojis/regional_indicator_r.js";
import regional_indicator_s from "/assets/js/emojis/regional_indicator_s.js";
import regional_indicator_t from "/assets/js/emojis/regional_indicator_t.js";
import regional_indicator_u from "/assets/js/emojis/regional_indicator_u.js";
import regional_indicator_v from "/assets/js/emojis/regional_indicator_v.js";
import regional_indicator_w from "/assets/js/emojis/regional_indicator_w.js";
import regional_indicator_x from "/assets/js/emojis/regional_indicator_x.js";
import regional_indicator_y from "/assets/js/emojis/regional_indicator_y.js";
import regional_indicator_z from "/assets/js/emojis/regional_indicator_z.js";
import zero from "/assets/js/emojis/zero.js";
import one from "/assets/js/emojis/one.js";
import two from "/assets/js/emojis/two.js";
import three from "/assets/js/emojis/three.js";
import four from "/assets/js/emojis/four.js";
import five from "/assets/js/emojis/five.js";
import six from "/assets/js/emojis/six.js";
import seven from "/assets/js/emojis/seven.js";
import eight from "/assets/js/emojis/eight.js";
import nine from "/assets/js/emojis/nine.js";
import ten from "/assets/js/emojis/ten.js";
import ski from "/assets/js/emojis/ski.js";
import owl from "/assets/js/emojis/owl.js";
import ant from "/assets/js/emojis/ant.js";
import tea from "/assets/js/emojis/tea.js";
import coy from "/assets/js/emojis/coy.js";
import zap from "/assets/js/emojis/zap.js";
import cry from "/assets/js/emojis/cry.js";
import ice from "/assets/js/emojis/ice.js";
import pen from "/assets/js/emojis/pen.js";
import ear from "/assets/js/emojis/ear.js";
import leg from "/assets/js/emojis/leg.js";
import tie from "/assets/js/emojis/tie.js";
import sad from "/assets/js/emojis/sad.js";
import map from "/assets/js/emojis/map.js";
import eye from "/assets/js/emojis/eye.js";
import fog from "/assets/js/emojis/fog.js";
import sun from "/assets/js/emojis/sun.js";
import bed from "/assets/js/emojis/bed.js";
import pie from "/assets/js/emojis/pie.js";
import dvd from "/assets/js/emojis/dvd.js";
import bus from "/assets/js/emojis/bus.js";
import imp from "/assets/js/emojis/imp.js";
import dog from "/assets/js/emojis/dog.js";
import ram from "/assets/js/emojis/ram.js";
import cat from "/assets/js/emojis/cat.js";
import bat from "/assets/js/emojis/bat.js";
import gem from "/assets/js/emojis/gem.js";
import bee from "/assets/js/emojis/bee.js";
import bug from "/assets/js/emojis/bug.js";
import pig from "/assets/js/emojis/pig.js";
import yum from "/assets/js/emojis/yum.js";
import cow from "/assets/js/emojis/cow.js";
import sob from "/assets/js/emojis/sob.js";
import axe from "/assets/js/emojis/axe.js";
import egg from "/assets/js/emojis/egg.js";
import bow from "/assets/js/emojis/bow.js";
import boy from "/assets/js/emojis/boy.js";
import man from "/assets/js/emojis/man.js";
import urn from "/assets/js/emojis/urn.js";
import key from "/assets/js/emojis/key.js";
import rat from "/assets/js/emojis/rat.js";
import eyes from "/assets/js/emojis/eyes.js";
import coat from "/assets/js/emojis/coat.js";
import goat from "/assets/js/emojis/goat.js";
import snow from "/assets/js/emojis/snow.js";
import bird from "/assets/js/emojis/bird.js";
import lock from "/assets/js/emojis/lock.js";
import golf from "/assets/js/emojis/golf.js";
import girl from "/assets/js/emojis/girl.js";
import baby from "/assets/js/emojis/baby.js";
import kiss from "/assets/js/emojis/kiss.js";
import feet from "/assets/js/emojis/feet.js";
import dart from "/assets/js/emojis/dart.js";
import ship from "/assets/js/emojis/ship.js";
import lips from "/assets/js/emojis/lips.js";
import dove from "/assets/js/emojis/dove.js";
import milk from "/assets/js/emojis/milk.js";
import rain from "/assets/js/emojis/rain.js";
import disk from "/assets/js/emojis/disk.js";
import rose from "/assets/js/emojis/rose.js";
import link from "/assets/js/emojis/link.js";
import hole from "/assets/js/emojis/hole.js";
import fish from "/assets/js/emojis/fish.js";
import germ from "/assets/js/emojis/germ.js";
import grin from "/assets/js/emojis/grin.js";
import bald from "/assets/js/emojis/bald.js";
import bulb from "/assets/js/emojis/bulb.js";
import kite from "/assets/js/emojis/kite.js";
import star from "/assets/js/emojis/star.js";
import bone from "/assets/js/emojis/bone.js";
import mask from "/assets/js/emojis/mask.js";
import kiwi from "/assets/js/emojis/kiwi.js";
import fire from "/assets/js/emojis/fire.js";
import pick from "/assets/js/emojis/pick.js";
import stew from "/assets/js/emojis/stew.js";
import crab from "/assets/js/emojis/crab.js";
import seat from "/assets/js/emojis/seat.js";
import cake from "/assets/js/emojis/cake.js";
import bell from "/assets/js/emojis/bell.js";
import bike from "/assets/js/emojis/bike.js";
import sick from "/assets/js/emojis/sick.js";
import boom from "/assets/js/emojis/boom.js";
import door from "/assets/js/emojis/door.js";
import yawn from "/assets/js/emojis/yawn.js";
import wink from "/assets/js/emojis/wink.js";
import nose from "/assets/js/emojis/nose.js";
import goal from "/assets/js/emojis/goal.js";
import love from "/assets/js/emojis/love.js";
import foot from "/assets/js/emojis/foot.js";
import wave from "/assets/js/emojis/wave.js";
import book from "/assets/js/emojis/book.js";
import hero from "/assets/js/emojis/hero.js";
import herb from "/assets/js/emojis/herb.js";
import corn from "/assets/js/emojis/corn.js";
import tent from "/assets/js/emojis/tent.js";
import gift from "/assets/js/emojis/gift.js";
import taco from "/assets/js/emojis/taco.js";
import gear from "/assets/js/emojis/gear.js";
import fist from "/assets/js/emojis/fist.js";
import yoyo from "/assets/js/emojis/yoyo.js";
import boar from "/assets/js/emojis/boar.js";
import deer from "/assets/js/emojis/deer.js";
import duck from "/assets/js/emojis/duck.js";
import ring from "/assets/js/emojis/ring.js";
import pill from "/assets/js/emojis/pill.js";
import rice from "/assets/js/emojis/rice.js";
import bath from "/assets/js/emojis/bath.js";
import taxi from "/assets/js/emojis/taxi.js";
import drum from "/assets/js/emojis/drum.js";
import park from "/assets/js/emojis/park.js";
import bank from "/assets/js/emojis/bank.js";
import sled from "/assets/js/emojis/sled.js";
import soap from "/assets/js/emojis/soap.js";
import yarn from "/assets/js/emojis/yarn.js";
import salt from "/assets/js/emojis/salt.js";
import dusk from "/assets/js/emojis/dusk.js";
import clap from "/assets/js/emojis/clap.js";
import swan from "/assets/js/emojis/swan.js";
import pear from "/assets/js/emojis/pear.js";
import glad from "/assets/js/emojis/glad.js";
import purse from "/assets/js/emojis/purse.js";
import socks from "/assets/js/emojis/socks.js";
import otter from "/assets/js/emojis/otter.js";
import skier from "/assets/js/emojis/skier.js";
import globe from "/assets/js/emojis/globe.js";
import mango from "/assets/js/emojis/mango.js";
import tired from "/assets/js/emojis/tired.js";
import sheep from "/assets/js/emojis/sheep.js";
import medal from "/assets/js/emojis/medal.js";
import sushi from "/assets/js/emojis/sushi.js";
import skunk from "/assets/js/emojis/skunk.js";
import lemon from "/assets/js/emojis/lemon.js";
import llama from "/assets/js/emojis/llama.js";
import crazy from "/assets/js/emojis/crazy.js";
import happy from "/assets/js/emojis/happy.js";
import dolls from "/assets/js/emojis/dolls.js";
import adult from "/assets/js/emojis/adult.js";
import peace from "/assets/js/emojis/peace.js";
import beach from "/assets/js/emojis/beach.js";
import angry from "/assets/js/emojis/angry.js";
import brick from "/assets/js/emojis/brick.js";
import mouse from "/assets/js/emojis/mouse.js";
import whale from "/assets/js/emojis/whale.js";
import cloud from "/assets/js/emojis/cloud.js";
import fairy from "/assets/js/emojis/fairy.js";
import shell from "/assets/js/emojis/shell.js";
import train from "/assets/js/emojis/train.js";
import label from "/assets/js/emojis/label.js";
import hippo from "/assets/js/emojis/hippo.js";
import robot from "/assets/js/emojis/robot.js";
import pinch from "/assets/js/emojis/pinch.js";
import snail from "/assets/js/emojis/snail.js";
import child from "/assets/js/emojis/child.js";
import alien from "/assets/js/emojis/alien.js";
import truck from "/assets/js/emojis/truck.js";
import banjo from "/assets/js/emojis/banjo.js";
import clamp from "/assets/js/emojis/clamp.js";
import punch from "/assets/js/emojis/punch.js";
import radio from "/assets/js/emojis/radio.js";
import weary from "/assets/js/emojis/weary.js";
import ramen from "/assets/js/emojis/ramen.js";
import tooth from "/assets/js/emojis/tooth.js";
import couch from "/assets/js/emojis/couch.js";
import tulip from "/assets/js/emojis/tulip.js";
import bread from "/assets/js/emojis/bread.js";
import curry from "/assets/js/emojis/curry.js";
import peach from "/assets/js/emojis/peach.js";
import dress from "/assets/js/emojis/dress.js";
import storm from "/assets/js/emojis/storm.js";
import rhino from "/assets/js/emojis/rhino.js";
import bagel from "/assets/js/emojis/bagel.js";
import salad from "/assets/js/emojis/salad.js";
import sloth from "/assets/js/emojis/sloth.js";
import woozy from "/assets/js/emojis/woozy.js";
import scarf from "/assets/js/emojis/scarf.js";
import broom from "/assets/js/emojis/broom.js";
import apple from "/assets/js/emojis/apple.js";
import snake from "/assets/js/emojis/snake.js";
import laugh from "/assets/js/emojis/laugh.js";
import skull from "/assets/js/emojis/skull.js";
import ferry from "/assets/js/emojis/ferry.js";
import upset from "/assets/js/emojis/upset.js";
import smirk from "/assets/js/emojis/smirk.js";
import pouch from "/assets/js/emojis/pouch.js";
import watch from "/assets/js/emojis/watch.js";
import canoe from "/assets/js/emojis/canoe.js";
import eagle from "/assets/js/emojis/eagle.js";
import razor from "/assets/js/emojis/razor.js";
import knife from "/assets/js/emojis/knife.js";
import horse from "/assets/js/emojis/horse.js";
import tools from "/assets/js/emojis/tools.js";
import genie from "/assets/js/emojis/genie.js";
import woman from "/assets/js/emojis/woman.js";
import squid from "/assets/js/emojis/squid.js";
import spoon from "/assets/js/emojis/spoon.js";
import ghost from "/assets/js/emojis/ghost.js";
import santa from "/assets/js/emojis/santa.js";
import homes from "/assets/js/emojis/homes.js";
import melon from "/assets/js/emojis/melon.js";
import camel from "/assets/js/emojis/camel.js";
import fries from "/assets/js/emojis/fries.js";
import bacon from "/assets/js/emojis/bacon.js";
import clock from "/assets/js/emojis/clock.js";
import shark from "/assets/js/emojis/shark.js";
import clown from "/assets/js/emojis/clown.js";
import spool from "/assets/js/emojis/spool.js";
import shirt from "/assets/js/emojis/shirt.js";
import house from "/assets/js/emojis/house.js";
import candy from "/assets/js/emojis/candy.js";
import blush from "/assets/js/emojis/blush.js";
import zebra from "/assets/js/emojis/zebra.js";
import tiger from "/assets/js/emojis/tiger.js";
import comet from "/assets/js/emojis/comet.js";
import onion from "/assets/js/emojis/onion.js";
import chair from "/assets/js/emojis/chair.js";
import brain from "/assets/js/emojis/brain.js";
import pizza from "/assets/js/emojis/pizza.js";
import heart from "/assets/js/emojis/heart.js";
import books from "/assets/js/emojis/books.js";
import timer from "/assets/js/emojis/timer.js";
import jeans from "/assets/js/emojis/jeans.js";
import crown from "/assets/js/emojis/crown.js";
import smile from "/assets/js/emojis/smile.js";
import party from "/assets/js/emojis/party.js";
import foggy from "/assets/js/emojis/foggy.js";

const emoji = {
	a: regional_indicator_a,
	b: regional_indicator_b,
	c: regional_indicator_c,
	d: regional_indicator_d,
	e: regional_indicator_e,
	f: regional_indicator_f,
	g: regional_indicator_g,
	h: regional_indicator_h,
	i: regional_indicator_i,
	j: regional_indicator_j,
	k: regional_indicator_k,
	l: regional_indicator_l,
	m: regional_indicator_m,
	n: regional_indicator_n,
	o: regional_indicator_o,
	p: regional_indicator_p,
	q: regional_indicator_q,
	r: regional_indicator_r,
	s: regional_indicator_s,
	t: regional_indicator_t,
	u: regional_indicator_u,
	v: regional_indicator_v,
	w: regional_indicator_w,
	x: regional_indicator_x,
	y: regional_indicator_y,
	z: regional_indicator_z,
	zero: zero,
	one: one,
	two: two,
	three: three,
	four: four,
	five: five,
	six: six,
	seven: seven,
	eight: eight,
	nine: nine,
	ten: ten,
	ski: ski,
	owl: owl,
	ant: ant,
	tea: tea,
	coy: coy,
	zap: zap,
	cry: cry,
	ice: ice,
	pen: pen,
	ear: ear,
	leg: leg,
	tie: tie,
	sad: sad,
	map: map,
	eye: eye,
	fog: fog,
	sun: sun,
	bed: bed,
	pie: pie,
	dvd: dvd,
	bus: bus,
	imp: imp,
	dog: dog,
	ram: ram,
	cat: cat,
	bat: bat,
	gem: gem,
	bee: bee,
	bug: bug,
	pig: pig,
	yum: yum,
	cow: cow,
	sob: sob,
	axe: axe,
	egg: egg,
	bow: bow,
	boy: boy,
	man: man,
	urn: urn,
	key: key,
	rat: rat,
	eyes: eyes,
	coat: coat,
	goat: goat,
	snow: snow,
	bird: bird,
	lock: lock,
	golf: golf,
	girl: girl,
	baby: baby,
	kiss: kiss,
	feet: feet,
	dart: dart,
	ship: ship,
	lips: lips,
	dove: dove,
	milk: milk,
	rain: rain,
	disk: disk,
	rose: rose,
	link: link,
	hole: hole,
	fish: fish,
	germ: germ,
	grin: grin,
	bald: bald,
	bulb: bulb,
	kite: kite,
	star: star,
	bone: bone,
	mask: mask,
	kiwi: kiwi,
	fire: fire,
	pick: pick,
	stew: stew,
	crab: crab,
	seat: seat,
	cake: cake,
	bell: bell,
	bike: bike,
	sick: sick,
	boom: boom,
	door: door,
	yawn: yawn,
	wink: wink,
	nose: nose,
	goal: goal,
	love: love,
	foot: foot,
	wave: wave,
	book: book,
	hero: hero,
	herb: herb,
	corn: corn,
	tent: tent,
	gift: gift,
	taco: taco,
	gear: gear,
	fist: fist,
	yoyo: yoyo,
	boar: boar,
	deer: deer,
	duck: duck,
	ring: ring,
	pill: pill,
	rice: rice,
	bath: bath,
	taxi: taxi,
	drum: drum,
	park: park,
	bank: bank,
	sled: sled,
	soap: soap,
	yarn: yarn,
	salt: salt,
	dusk: dusk,
	clap: clap,
	swan: swan,
	pear: pear,
	glad: glad,
	purse: purse,
	socks: socks,
	otter: otter,
	skier: skier,
	globe: globe,
	mango: mango,
	tired: tired,
	sheep: sheep,
	medal: medal,
	sushi: sushi,
	skunk: skunk,
	lemon: lemon,
	llama: llama,
	crazy: crazy,
	happy: happy,
	dolls: dolls,
	adult: adult,
	peace: peace,
	beach: beach,
	angry: angry,
	brick: brick,
	mouse: mouse,
	whale: whale,
	cloud: cloud,
	fairy: fairy,
	shell: shell,
	train: train,
	label: label,
	hippo: hippo,
	robot: robot,
	pinch: pinch,
	snail: snail,
	child: child,
	alien: alien,
	truck: truck,
	banjo: banjo,
	clamp: clamp,
	punch: punch,
	radio: radio,
	weary: weary,
	ramen: ramen,
	tooth: tooth,
	couch: couch,
	tulip: tulip,
	bread: bread,
	curry: curry,
	peach: peach,
	dress: dress,
	storm: storm,
	rhino: rhino,
	bagel: bagel,
	salad: salad,
	sloth: sloth,
	woozy: woozy,
	scarf: scarf,
	broom: broom,
	apple: apple,
	snake: snake,
	laugh: laugh,
	skull: skull,
	ferry: ferry,
	upset: upset,
	smirk: smirk,
	pouch: pouch,
	watch: watch,
	canoe: canoe,
	eagle: eagle,
	razor: razor,
	knife: knife,
	horse: horse,
	tools: tools,
	genie: genie,
	woman: woman,
	squid: squid,
	spoon: spoon,
	ghost: ghost,
	santa: santa,
	homes: homes,
	melon: melon,
	camel: camel,
	fries: fries,
	bacon: bacon,
	clock: clock,
	shark: shark,
	clown: clown,
	spool: spool,
	shirt: shirt,
	house: house,
	candy: candy,
	blush: blush,
	zebra: zebra,
	tiger: tiger,
	comet: comet,
	onion: onion,
	chair: chair,
	brain: brain,
	pizza: pizza,
	heart: heart,
	books: books,
	timer: timer,
	jeans: jeans,
	crown: crown,
	smile: smile,
	party: party,
	foggy: foggy,
};

const style = picostyle(h);

const state = {
	wordLength: 4,
};

const actions = {
	setLoading: val => () => ({ loading: val }),
	loadWords: words => (state, actions) => {
		setTimeout(actions.setWord, 0, state.wordLength);
		return { words, loading: undefined };
	},
	setWord: wordLength => (state, actions) => {
		const words = state.words[wordLength];
		const word = words[Math.floor(Math.random() * words.length)];

		const display = style("div")({
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",
		});

		const structure = display({}, [
			emoji[word]({
				id: "word", size: 8,
				["data-word"]: word,
				onclick: () => window.speak(word),
			}),
			style("ul")({ margin: "2.5rem 0", display: "flex", "> li:not(:first-child)": { marginLeft: "0.625rem" } })({ id: "dropzone" }),
			style("div")({ width: "100%", height: "100%", display: "flex", ["align-items"]: "center", ["justify-content"]: "center", position: "relative" })({ id: "dragzone" }),
		]);

		let [pic, dropareas, draggables] = structure.children;

		for (const c of word) {
			dropareas.children.push(h("li", {}, dropzone({ ["data-letter"]: c })));
			draggables.children.push(letter_gen(c));
		}

		for (let [i, n] = [0, Math.floor(Math.random() * word.length)]; i <= n; i++) {
			draggables.children.push(letter_gen());
		}

		return { structure };
	},
	handleDragStart: e => {
		const el = e.target;
		const info = JSON.stringify({
			uuid: el.dataset.uuid,
			letter: el.dataset.letter,
		});
		e.dataTransfer.setData("text/plain", info);
	},
	handleDrop: e => {
		e.preventDefault();
		const { uuid, letter } = JSON.parse(e.dataTransfer.getData("text/plain"));
		const drop = e.target;
		if (!drop.children.length && letter == drop.dataset.letter) {
			const tile = document.querySelector(`[data-uuid = "${uuid}"]`);
			tile.style.position = "relative";
			tile.style.top = 0;
			tile.style.left = 0;
			tile.removeAttribute("draggable");
			drop.appendChild(tile);
			const solution = Array.from(document.querySelectorAll("#dropzone svg"))
				.reduce((str, node) => str += node.dataset.letter, "");
			const word = document.getElementById("word").dataset.word;
			if (solution && word && solution == word) {
				[...solution].forEach((c,i) => setTimeout(window.speak, 250 * i, c));
				{
					const wait = (word.length + 1) * 250;
					setTimeout(window.speak, wait, word);
					setTimeout(window.speak,  wait + 1000, ["amazing", "wow", "great job"][Math.floor(Math.random() * 3)]);
				}
				document.getElementById("dragzone").innerHTML = "<h3>Great job!</h3>";
				const dragzone = document.getElementById("dragzone");
				const winScreen = (state, actions) => h("div", {
					style: {
						display: "flex",
						["flex-direction"]: "column",
						["justify-content"]: "center",
						["align-items"]: "center",
					}
				}, [
					h("h3", {}, "Great Job!"),
					h("button", {
						id: "new-word",
						style: {
							["margin-top"]: "1.25rem",
							padding: "1.25rem",
							["font-weight"]: 700,
							border: 0,
							["border-radius"]: "0.5rem",
							color: "var(--background-color)",
							backgroundColor: "var(--info-color)",
						}
					}, "New Word")
				]);
				dragzone.innerHTML = renderToString(winScreen(state, actions));
				document.getElementById("new-word").addEventListener("click", e => {
					e.preventDefault();
					window.main.setScene(null);
				});
			}
		}
	},
	handleDragEnter: e => {
		e.preventDefault();
	},
	handleDragOver: e => {
		e.preventDefault();
	},
};

const dropzone = style((props) => h("div", Object.assign({}, {
	ondragenter: actions.handleDragEnter,
	ondragover: actions.handleDragOver,
	ondrop: actions.handleDrop,
}, props)))({
	width: "4.3125rem",
	height: "4.3125rem",
	border: "0.125rem dotted #212121",
});

const letter_gen = (letter, props) => {
	const letterValue = letter || String.fromCharCode(97 + Math.floor(Math.random() * 26));
	return h("div", {
		ondragstart: e => actions.handleDragStart(e),
		draggable: true,
		["data-uuid"]: uuid(),
		["data-letter"]: letterValue,
		style: {
			position: "absolute",
			top: `calc(${Math.random()} * calc(100% - 4rem))`,
			left: `calc(${Math.random()} * calc(100% - 4rem))`,
		},
	}, [
		emoji[letterValue](Object.assign({}, {
			size: 4,
			["data-letter"]: letterValue,
			onmousedown: e => {
				const svg = e.target.tagName.toLowerCase() == "svg" ? e.target : e.target.closest("svg");
				window.speak(letterValue);
				setTimeout(() => {
					document.querySelectorAll(".letter").forEach(letter => { letter.style.zIndex = null; });
					svg.style.zIndex = 1;
					}, 0);
			},
			class: "letter",
			style: {
				filter: `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
			}
		}, props)),
	]);
}

const view = (state, actions) => props => {
	if (!state.words && !state.loading) {
		actions.setLoading(true);
		fetch("/assets/data/words.json")
			.then(res => res.json())
			.then(actions.loadWords);
	}

	const views = {};

	return state.structure;
};

export const spelling = { state, actions, view };
