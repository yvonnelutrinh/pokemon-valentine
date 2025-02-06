// arrays for fighter jokes, fairy jokes, and generic jokes if name isnt specified

const fighterJokes = [
  {
    name: "mankey",
    joke: "You make my heart go bananas - will you be my primate valentine?",
  },
  { name: "primeape", joke: "I'm APE-solutely crazy about you!" },
  { name: "poliwrath", joke: "Let's FIGHT for love together!" },
  { name: "machop", joke: "I'll MUSCLE my way into your heart!" },
  { name: "machoke", joke: "You're STRONG enough to lift my spirits!" },
  { name: "machamp", joke: "Four arms, infinite love for you!" },
  {
    name: "hitmonlee",
    joke: "I'd KICK myself if I didn't ask you to be my valentine!",
  },
  { name: "hitmonchan", joke: "PUNCH-ing above my weight in love with you!" },
  {
    name: "heracross",
    joke: "You’ve bugged my heart! Let’s cross paths this Valentine’s Day!",
  },
  { name: "tyrogue", joke: "Training my heart to love you!" },
  { name: "hitmontop", joke: "Spinning into your heart this Valentine's!" },
  { name: "combusken", joke: "You set my heart on FIRE, valentine!" },
  { name: "blaziken", joke: "BLAZE-ing a trail straight to your heart!" },
  { name: "breloom", joke: "I SPORE you more than anyone!" },
  { name: "makuhita", joke: "HITTING on you with all my love!" },
  { name: "hariyama", joke: "You're SUMO-thing special!" },
  { name: "meditite", joke: "Meditat-ing on how much I love you!" },
  { name: "medicham", joke: "Channel-ing all my love your way!" },
  { name: "monferno", joke: "MONKEY-ing around with my heart!" },
  { name: "infernape", joke: "Flame of my heart, be my valentine!" },
  { name: "riolu", joke: "Aura you ready to be my valentine?" },
  { name: "lucario", joke: "I SENSE we're meant to be!" },
  { name: "croagunk", joke: "Toxic-ally in love with you!" },
  { name: "toxicroak", joke: "My heart CROAK-s for you!" },
  { name: "gallade", joke: "I'll SLICE through my feelings for you!" },
  { name: "pignite", joke: "You FIRE up my heart!" },
  { name: "emboar", joke: "BOAR-ing into my valentine's heart!" },
  { name: "timburr", joke: "I'd TIMBER for you any day!" },
  { name: "gurdurr", joke: "DURR-ing my best to win your heart!" },
  { name: "conkeldurr", joke: "Concrete proof of my love!" },
  { name: "throh", joke: "I THROW all my love your way!" },
  { name: "sawk", joke: "SOCK-ing it to you with love!" },
  { name: "scraggy", joke: "Pants down, heart open!" },
  { name: "scrafty", joke: "Too CRAFTY to let you go!" },
  { name: "mienfoo", joke: "FOO-nally found my valentine!" },
  { name: "mienshao", joke: "SHAO-king up my heart for you!" },
  { name: "cobalion", joke: "Noble love, just for you!" },
  { name: "terrakion", joke: "ROCK-solid valentine!" },
  { name: "virizion", joke: "GREEN with love for you!" },
  {
    name: "keldeo-ordinary",
    joke: "Ordinary? Nah, our love is extraordinary!",
  },
  { name: "chesnaught", joke: "I'll DEFEND our love!" },
  { name: "pancham", joke: "PANDAMONIUM of love!" },
  { name: "pangoro", joke: "Tough love, panda style!" },
  { name: "hawlucha", joke: "FLYING into your heart!" },
  { name: "crabrawler", joke: "CRAB-bing your attention this Valentine's!" },
  { name: "crabominable", joke: "Snow much love for you!" },
  { name: "stufful", joke: "STUFF-ed with love!" },
  { name: "bewear", joke: "I'd BEAR-y much like to be your valentine!" },
  { name: "passimian", joke: "PASS-ing my heart to you!" },
  { name: "hakamo-o", joke: "SCALES of love tip in your favor!" },
  { name: "kommo-o", joke: "SCALES of my heart belong to you!" },
  { name: "buzzwole", joke: "SWOLE lot of love coming your way!" },
  { name: "pheromosa", joke: "Pheromone-al valentine!" },
  { name: "marshadow", joke: "SHADOW-ing you with love!" },
  { name: "clobbopus", joke: "CLOBBER-ing my way to your heart!" },
  { name: "grapploct", joke: "GRAPPL-ing with my feelings!" },
  { name: "sirfetchd", joke: "FETCH-ing the perfect valentine!" },
  { name: "falinks", joke: "ALIGNED in love!" },
  { name: "zamazenta", joke: "SHIELD-ing you with my love!" },
  { name: "kubfu", joke: "KUB-ootiful valentine!" },
  { name: "urshifu-single-strike", joke: "SINGLE and striking with love!" },
  { name: "sneasler", joke: "SNEAKY valentine!" },
  { name: "quaquaval", joke: "DANCING into your heart!" },
  { name: "pawmo", joke: "PAW-some valentine!" },
  { name: "pawmot", joke: "Electri-CUTE love!" },
  { name: "flamigo", joke: "FLAMIN' hot valentine!" },
  { name: "annihilape", joke: "APE-ocalyptic love!" },
  { name: "great-tusk", joke: "TUSK-ing you to be my valentine!" },
  { name: "slither-wing", joke: "WING-ing my way to your heart!" },
  { name: "iron-hands", joke: "IRON-clad love!" },
  { name: "iron-valiant", joke: "Valiant love, steel-strong!" },
  { name: "koraidon", joke: "RACE-ing to be your valentine!" },
  { name: "okidogi", joke: "DOG-gone in love with you!" },
  { name: "meloetta-pirouette", joke: "DANCE-ing into your heart!" },
  { name: "keldeo-resolute", joke: "RESOLUTE in my love!" },
  { name: "mewtwo-mega-x", joke: "Mega love, just for you!" },
  { name: "heracross-mega", joke: "MEGA-horn of love!" },
  { name: "blaziken-mega", joke: "MEGA-flame of passion!" },
  { name: "medicham-mega", joke: "MEGA-zen love!" },
  { name: "lucario-mega", joke: "MEGA-sensing our connection!" },
  { name: "gallade-mega", joke: "MEGA-slice of my heart!" },
  { name: "lopunny-mega", joke: "MEGA-cute valentine!" },
  { name: "kommo-o-totem", joke: "TOTEM-ally in love!" },
  { name: "farfetchd-galar", joke: "FETCH-ing your heart!" },
  { name: "zapdos-galar", joke: "SHOCKING valentine!" },
  { name: "zamazenta-crowned", joke: "CROWNED in love!" },
  { name: "urshifu-rapid-strike", joke: "RAPID love strike!" },
  { name: "machamp-gmax", joke: "GIANT love for you!" },
  { name: "urshifu-single-strike-gmax", joke: "MEGA single and loving it!" },
  { name: "urshifu-rapid-strike-gmax", joke: "MEGA rapid heartbeat!" },
  { name: "sneasel-hisui", joke: "HISUI-cal valentine!" },
  { name: "lilligant-hisui", joke: "HISUI-nally found love!" },
  { name: "decidueye-hisui", joke: "HISUI-ng my heart!" },
  { name: "tauros-paldea-combat-breed", joke: "COMBAT-ive love!" },
  { name: "tauros-paldea-blaze-breed", joke: "BLAZING with passion!" },
  { name: "tauros-paldea-aqua-breed", joke: "AQUA-mazing love!" },
  { name: "koraidon-limited-build", joke: "Limited edition love!" },
  { name: "koraidon-sprinting-build", joke: "SPRINT-ing to your heart!" },
  { name: "koraidon-swimming-build", joke: "SWIMMING in love!" },
  { name: "koraidon-gliding-build", joke: "GLIDING into your heart!" },
];

const fairyJokes = [
    { name: "clefairy", joke: "STAR-struck with love!" },
    { name: "clefable", joke: "WISH-ing you'd be my Valentine!" },
    { name: "jigglypuff", joke: "SINGING my heart out to you!" },
    { name: "wigglytuff", joke: "PUFFING up with love!" },
    { name: "mr-mime", joke: "MIME-ing my feelings!" },
    { name: "cleffa", joke: "WISH upon a Valentine!" },
    { name: "igglybuff", joke: "TINY but LOVING!" },
    { name: "togepi", joke: "TOGETH-er forever!" },
    { name: "togetic", joke: "SPREADING joy this Valentine's!" },
    { name: "marill", joke: "AQUA-lutely in love with you!" },
    { name: "azumarill", joke: "BLUE-tiful Valentine!" },
    { name: "snubbull", joke: "PINK and LOVING it!" },
    { name: "granbull", joke: "FIERCE love incoming!" },
    { name: "ralts", joke: "SENSING our connection!" },
    { name: "kirlia", joke: "DANCING into your heart!" },
    { name: "gardevoir", joke: "GUARDING your heart!" },
    { name: "azurill", joke: "BOUNCING with love!" },
    { name: "mawile", joke: "TRAP-ped in love with you!" },
    { name: "mime-jr", joke: "MINI-mally adorable!" },
    { name: "togekiss", joke: "KISS of pure love!" },
    { name: "cottonee", joke: "SOFT and SWEET Valentine!" },
    { name: "whimsicott", joke: "FLOATING into your heart!" },
    { name: "flabebe", joke: "TINY flower of love!" },
    { name: "floette", joke: "PETAL-ing my affection!" },
    { name: "florges", joke: "BLOOMING with love!" },
    { name: "spritzee", joke: "SPRITZ of romance!" },
    { name: "aromatisse", joke: "FRAGRANT feelings!" },
    { name: "swirlix", joke: "SWEET on you!" },
    { name: "slurpuff", joke: "WHIPPED up some love!" },
    { name: "sylveon", joke: "RIBBONS of love!" },
    { name: "dedenne", joke: "CHEEKS full of love!" },
    { name: "carbink", joke: "ROCK-solid affection!" },
    { name: "klefki", joke: "UNLOCKING my heart!" },
    { name: "xerneas", joke: "LEGENDARY love!" },
    { name: "diancie", joke: "PRECIOUS Valentine!" },
    { name: "primarina", joke: "SINGING my love song!" },
    { name: "cutiefly", joke: "BUZZ-ing with affection!" },
    { name: "ribombee", joke: "POLLINATING love!" },
    { name: "morelull", joke: "GLOWING with love!" },
    { name: "shiinotic", joke: "MAGIC-al romance!" },
    { name: "comfey", joke: "GARLAND of love!" },
    { name: "mimikyu-disguised", joke: "HIDING my true feelings!" },
    { name: "tapu-koko", joke: "ELECTRIC love!" },
    { name: "tapu-lele", joke: "PSYCHIC connection!" },
    { name: "tapu-bulu", joke: "NATURE of my love!" },
    { name: "tapu-fini", joke: "WATER you waiting for?" },
    { name: "magearna", joke: "MECHANICAL heart!" },
    { name: "hatterene", joke: "MAGICAL attraction!" },
    { name: "impidimp", joke: "MISCHIEVOUS love!" },
    { name: "morgrem", joke: "DARK but LOVING!" },
    { name: "grimmsnarl", joke: "TANGLED up in you!" },
    { name: "milcery", joke: "SWEET as can be!" },
    { name: "alcremie", joke: "WHIPPED into love!" },
    { name: "zacian", joke: "LEGENDARY romance!" },
    { name: "enamorus-incarnate", joke: "LOVE is my power!" },
    { name: "fidough", joke: "KNEADING your heart!" },
    { name: "dachsbun", joke: "BAKED with love!" },
    { name: "tinkatink", joke: "TINY but MIGHTY love!" },
    { name: "tinkatuff", joke: "HAMMER home my feelings!" },
    { name: "tinkaton", joke: "CRAFTING our love!" },
    { name: "scream-tail", joke: "SCREAMING my love!" },
    { name: "flutter-mane", joke: "FLOATING my heart to you!" },
    { name: "iron-valiant", joke: "MECHANICALLY romantic!" },
    { name: "fezandipiti", joke: "FEATHERED feelings!" },
    { name: "gardevoir-mega", joke: "MEGA love power!" },
    { name: "mawile-mega", joke: "MEGA CHOMP of affection!" },
    { name: "floette-eternal", joke: "ETERNAL love!" },
    { name: "altaria-mega", joke: "CLOUD of romance!" },
    { name: "audino-mega", joke: "HEALING your heart!" },
    { name: "diancie-mega", joke: "MEGA PRECIOUS!" },
    { name: "ninetales-alola", joke: "FROSTY but LOVING!" },
    { name: "mimikyu-busted", joke: "TRUE feelings revealed!" },
    { name: "mimikyu-totem-disguised", joke: "TOTEM-ally in love!" },
    { name: "mimikyu-totem-busted", joke: "UNMASKED affection!" },
    { name: "magearna-original", joke: "ORIGINAL love!" },
    { name: "ribombee-totem", joke: "TOTEM of love!" },
    { name: "rapidash-galar", joke: "MAGICAL ride of love!" },
    { name: "weezing-galar", joke: "TOXIC but LOVING!" },
    { name: "zacian-crowned", joke: "CROWNED with love!" },
    { name: "hatterene-gmax", joke: "MEGA MAGICAL Valentine!" },
    { name: "grimmsnarl-gmax", joke: "GIANT love tangle!" },
    { name: "alcremie-gmax", joke: "SWEET giant love!" },
    { name: "enamorus-therian", joke: "WILD love!" }
];


const fighterGenericJokes = [
    { joke: "FIGHTING for your heart!" },
    { joke: "Punch-drunk in love with you!" },
    { joke: "Let's KNOCK OUT Valentine's Day together!" },
    { joke: "My love PACKS A PUNCH!" },
    { joke: "Training my heart to love you!" },
    { joke: "STRIKING distance of my heart!" },
    { joke: "Want to WRESTLE with my feelings?" },
    { joke: "CRUSHING on you big time!" },
    { joke: "My love is STRONGER than any attack!" },
    { joke: "BLOCKING out all other valentines!" },
    { joke: "GRAPPLING with how much I love you!" },
    { joke: "You're my KNOCKOUT valentine!" },
    { joke: "BATTLING to win your heart!" },
    { joke: "My love is a CRITICAL HIT!" },
    { joke: "DEFENDING my love for you!" },
    { joke: "COMBO of love coming your way!" },
    { joke: "Strength training my heart muscles!" },
    { joke: "SPARRING for your affection!" },
    { joke: "THROWING all my love at you!" },
    { joke: "POWERFUL love, no contest!" }
];

const fairyGenericJokes = [
    { joke: "Sprinkling some FAIRY DUST of love!" },
    { joke: "Magically in love with you!" },
    { joke: "ENCHANTING my way to your heart!" },
    { joke: "Casting a love SPELL on you!" },
    { joke: "CHARMED by your valentine!" },
    { joke: "Sparkling with love!" },
    { joke: "MOONLIGHT magic of love!" },
    { joke: "Wish-granting my way to your heart!" },
    { joke: "GLITTERING with affection!" },
    { joke: "Fairy tale romance incoming!" },
    { joke: "TWINKLING love just for you!" },
    { joke: "Magical connection!" },
    { joke: "PIXIE-perfect valentine!" },
    { joke: "Spreading love like fairy wings!" },
    { joke: "MYSTICAL feelings for you!" },
    { joke: "Enchantment level: MAXIMUM!" },
    { joke: "WHIMSICAL love potion!" },
    { joke: "Sprinkle of romance!" },
    { joke: "MAGICAL moments together!" },
    { joke: "Fairy-tale love story!" }
];

const cardMessageContainer = document.querySelector(".letter__message");

class JokePrinter {
  // function to pull random string from joke arrays and modify html value
  pullJoke(type, name) {
    if (type === "fighter" && !name) {
        const randomJokeIndex = Math.floor(Math.random() * fighterGenericJokes.length);
      cardMessageContainer.textContent = fighterGenericJokes[randomJokeIndex].joke;
      return fighterGenericJokes[randomJokeIndex];
    }
    if (type === "fighter" && name) {
        const fighterNameJokeIndex = fighterJokes.findIndex((joke) => joke.name === name);
      cardMessageContainer.textContent = fighterJokes[fighterNameJokeIndex].joke;
      return fighterJokes[fighterNameJokeIndex];
    }
    if (type === "fairy" && !name) {
      const randomJokeIndex = Math.floor(Math.random() * fairyGenericJokes.length);
      cardMessageContainer.textContent = fairyGenericJokes[randomJokeIndex].joke;
      return fairyGenericJokes[randomJokeIndex];
    } 
    if (type === "fairy" && name) {
        const fairyNameJokeIndex = fairyJokes.findIndex((joke) => joke.name === name);
      cardMessageContainer.textContent = fairyJokes[fairyNameJokeIndex].joke;
      return fairyJokes[fairyNameJokeIndex];
    }
    else {
      console.log("Please pick a Pokemon type");
    }
  }
}

const generator = new JokePrinter();

export { generator }; // import to index.js

// add event listeners to buttons and call joke generator
// TODO: move lines below to index.js to clean up code readability

// const fighterButton = document.querySelector("#fighterButton");
// const fairyButton = document.querySelector("#fairyButton");

// function clickFighterButton() {
//   const newFighterJoke = generator.pullJoke("fighter"); // add variable for name response from api
//   console.log("New fighter joke:", newFighterJoke);
// }

// function clickFairyButton() {
//   const newFairyJoke = generator.pullJoke("fairy"); // add variable for name response from api
//   console.log("New fairy joke:", newFairyJoke);
// }

// fighterButton.addEventListener("click", clickFighterButton);
// fairyButton.addEventListener("click", clickFairyButton);
