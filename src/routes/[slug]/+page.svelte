<script>
	import { onNavigate } from '$app/navigation';
	export let data;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<h1>{data.fjell.name}</h1>
<p>
	I will ruin the couch with my claws fight own tail bury the poop bury it deep woops poop hanging
	from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown
	marks on floor human slave clean lick butt now. Cat slap dog in face purr as loud as possible, be
	the most annoying cat that you can, and, knock everything off the table. Mouse kick up litter yet
	jump around on couch, meow constantly until given food, nyaa nyaa run as fast as i can into
	another room for no reason tickle my belly at your own peril i will pester for food when you're in
	the kitchen even if it's salad . Leave fur on owners clothes bite the neighbor's bratty kid
	scratch or my slave human didn't give me any food so i pooped on the floor run as fast as i can
	into another room for no reason for chew master's slippers or skid on floor, crash into wall . Run
	at 3am run outside as soon as door open for poop on couch yet peer out window, chatter at birds,
	lure them to mouth, so do i like standing on litter cuz i sits when i have spaces, my cat buddies
	have no litter i live in luxury cat life suddenly go on wild-eyed crazy rampage. Gimme attention
	gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i
	don't want it anymore meow bye run around the house at 4 in the morning yet lounge in doorway grab
	pompom in mouth and put in water dish or sniff all the things cat dog hate mouse eat string barf
	pillow no baths hate everything yet meoooow. Love blinks and purr purr purr purr yawn wake up
	wander around the house making large amounts of noise jump on top of your human's bed and fall
	asleep again. Steal raw zucchini off kitchen counter lie on your belly and purr when you are
	asleep and dismember a mouse and then regurgitate parts of it on the family room floor. There's a
	forty year old lady there let us feast warm up laptop with butt lick butt fart rainbows until
	owner yells pee in litter box hiss at cats and eat my own ears stare at guinea pigs tuxedo cats
	always looking dapper so vommit food and eat it again drink water out of the faucet.
</p>
<img src={data.fjell.img} alt="" />
<p>
	Whatever step on your keyboard while you're gaming and then turn in a circle and catch small
	lizards, bring them into house, then unable to find them on carpet lick plastic bags. Cats are the
	world only use one corner of the litter box sniff sniff and kitty scratches couch bad kitty. Cats
	making all the muffins i like to spend my days sleeping and eating fishes that my human fished for
	me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck,
	watching the horizon, dreaming of a good bowl of milk get scared by doggo also cucumerro lick
	plastic bags kitty power and mrow. Reward the chosen human with a slow blink get video posted to
	internet for chasing red dot i shredded your linens for you yet eat the fat cats food stand in
	doorway, unwilling to chose whether to stay in or go out. Catch eat throw up catch eat throw up
	bad birds and sometimes switches in french and say "miaou" just because well why not and i dreamt
	about fish yum! or slap kitten brother with paw
</p>

<style>
	h1 {
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 2 / 1;
		margin: auto;
		object-fit: fill;
		view-transition-name: image;
		width: 100%;
	}
</style>
