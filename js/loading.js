var insult = 'an igg'
var insultArray = [
  'a nincompoop',
  'simply lovely',
  'a bloody drongo',
  'pure excellence',
  'a butterdove',
  'a tasty piece',
  'hungry',
  'a little ripper',
  'an apple turnover',
  'a passionate F1 fan',
  'sweet as your Nanna',
  'an angel in pants',
  'a whispy wormwatcher',
  'spotted prancer',
  'loose bladdered antiquarian',
  'bucktoothed uphill gardener',
  'great at cooking',
  'utterly charming',
  'eine lustiges Frau',
  'Andrew\'s favourite person in the world'
]
var insultFirstArray = [
  'artless',
  'bawdy',
  'beslubbering',
  'bootless',
  'churlish',
  'cockered',
  'clouted',
  'craven',
  'currish',
  'dankish',
  'dissembling',
  'droning',
  'errant',
  'fawning',
  'fobbing',
  'froward',
  'frothy',
  'gleeking',
  'goatish',
  'gorbellied',
  'impertinent',
  'infectious',
  'jarring',
  'loggerheaded',
  'lumpish',
  'mammering',
  'mangled',
  'mewling',
  'paunchy',
  'pribbling',
  'puking',
  'puny',
  'qualling',
  'rank',
  'reeky',
  'roguish',
  'ruttish'
]
var insultSecondArray = [
  'apple-john',
  'baggage',
  'barnacle',
  'bladder',
  'boar-pig',
  'bugbear',
  'bum-bailey',
  'canker-blossom',
  'clack-dish',
  'clotpole',
  'coxcomb',
  'codpiece',
  'death-token',
  'dewberry',
  'flap-dragon',
  'flax-wench',
  'flirt-gill',
  'foot-licker',
  'fustilarian',
  'giglet',
  'gudgeon',
  'haggard',
  'harpy',
  'hedge-pig',
  'horn-beast',
  'hugger-mugger',
  'joithead',
  'lewdster',
  'lout',
  'maggot-pie',
  'malt-worm',
  'mammet',
  'measle',
  'minnow',
  'miscreant',
  'moldwarp',
  'mumble-news'
]

// loading
var $load = $('.loading')

if (Math.random() <= 0.5) {
  insultFirstNum = Math.floor(Math.random() * insultFirstArray.length)
  insultSecondNum = Math.floor(Math.random() * insultSecondArray.length)
  insult = 'a ' + insultFirstArray[insultFirstNum] + ' ' + insultSecondArray[insultSecondNum]
} else {
  insultNum = Math.floor(Math.random() * insultArray.length)
  insult = insultArray[insultNum]
}
$load.append('<p>Maria is ' + insult + '.</p>')
