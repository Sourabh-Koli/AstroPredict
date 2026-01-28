const ZodiacSigns = [
	{
		name: "Aries",
		symbol: "♈",
		element: "Fire",
		rulingPlanet: "Mars",
		startDate: "March 21",
		endDate: "April 19",
		traits: [ "Bold", "Confident", "Energetic" ]
	},
	{
		name: "Taurus",
		symbol: "♉",
		element: "Earth",
		rulingPlanet: "Venus",
		startDate: "April 20",
		endDate: "May 20",
		traits: [ "Reliable", "Patient", "Practical" ]
	},
	{
		name: "Gemini",
		symbol: "♊",
		element: "Air",
		rulingPlanet: "Mercury",
		startDate: "May 21",
		endDate: "June 20",
		traits: [ "Curious", "Adaptable", "Communicative" ]
	},
	{
		name: "Cancer",
		symbol: "♋",
		element: "Water",
		rulingPlanet: "Moon",
		startDate: "June 21",
		endDate: "July 22",
		traits: [ "Emotional", "Caring", "Protective" ]
	},
	{
		name: "Leo",
		symbol: "♌",
		element: "Fire",
		rulingPlanet: "Sun",
		startDate: "July 23",
		endDate: "August 22",
		traits: [ "Confident", "Leader", "Creative" ]
	},
	{
		name: "Virgo",
		symbol: "♍",
		element: "Earth",
		rulingPlanet: "Mercury",
		startDate: "August 23",
		endDate: "September 22",
		traits: [ "Analytical", "Practical", "Detail-oriented" ]
	},
	{
		name: "Libra",
		symbol: "♎",
		element: "Air",
		rulingPlanet: "Venus",
		startDate: "September 23",
		endDate: "October 22",
		traits: [ "Balanced", "Diplomatic", "Charming" ]
	},
	{
		name: "Scorpio",
		symbol: "♏",
		element: "Water",
		rulingPlanet: "Pluto",
		startDate: "October 23",
		endDate: "November 21",
		traits: [ "Intense", "Passionate", "Mysterious" ]
	},
	{
		name: "Sagittarius",
		symbol: "♐",
		element: "Fire",
		rulingPlanet: "Jupiter",
		startDate: "November 22",
		endDate: "December 21",
		traits: [ "Adventurous", "Optimistic", "Honest" ]
	},
	{
		name: "Capricorn",
		symbol: "♑",
		element: "Earth",
		rulingPlanet: "Saturn",
		startDate: "December 22",
		endDate: "January 19",
		traits: [ "Disciplined", "Responsible", "Ambitious" ]
	},
	{
		name: "Aquarius",
		symbol: "♒",
		element: "Air",
		rulingPlanet: "Uranus",
		startDate: "January 20",
		endDate: "February 18",
		traits: [ "Innovative", "Independent", "Humanitarian" ]
	},
	{
		name: "Pisces",
		symbol: "♓",
		element: "Water",
		rulingPlanet: "Neptune",
		startDate: "February 19",
		endDate: "March 20",
		traits: [ "Compassionate", "Artistic", "Intuitive" ]
	}
];

//size is 20
const compliments = [
	"You have a great sense of humor.",
	"You are more capable than you realize.",
	"Your positivity is contagious.",
	"You make people feel comfortable.",
	"You have a really kind heart.",
	"You’re doing better than you think.",
	"You bring out the best in others.",
	"You have an amazing work ethic.",
	"Your smile can light up a room.",
	"You are a fast learner.",
	"You handle challenges with grace.",
	"You’re incredibly thoughtful.",
	"You have a unique perspective.",
	"You inspire people around you.",
	"You’re someone people can rely on.",
	"You have excellent problem-solving skills.",
	"You’re growing every single day.",
	"You have a calming presence.",
	"You’re stronger than yesterday.",
	"You deserve all the good things coming your way."
];

//size is 15
const victimCardCompiments = [
	"After everything you’ve been through, you’re still standing strong.",
	"You didn’t deserve that, but you handled it like a champ.",
	"Life really tested you, and you still showed up.",
	"Anyone else would’ve given up by now—respect.",
	"You’ve been unfairly treated, yet you stayed kind.",
	"You carry pain with so much grace.",
	"You’ve suffered more than most, and it shows your strength.",
	"Not everyone could survive what you did.",
	"You stayed real even when life wasn’t fair.",
	"You’ve been through a lot, and you still care about others.",
	"The fact that you’re still trying says everything.",
	"You were the victim, but you never let it define you.",
	"You deserved better, honestly.",
	"Even after all that, you still shine.",
	"You’re proof that tough times don’t break strong people."
];

//size is 15
const recommendations = [
	"Take a short break and breathe deeply.",
	"Go for a walk to refresh your mind.",
	"Drink some water—you might be dehydrated.",
	"Listen to your favorite music for a mood boost.",
	"Write down your thoughts to clear your head.",
	"Get a good night’s sleep today.",
	"Talk to someone you trust.",
	"Do one small productive task right now.",
	"Stretch your body for a few minutes.",
	"Spend less time on your phone today.",
	"Read something inspiring.",
	"Organize your workspace.",
	"Be kind to yourself—you’re doing your best.",
	"Focus on what you can control.",
	"Celebrate even small wins."
];

//size is 15
const predictions = [
	"A pleasant surprise is coming your way soon.",
	"Today is a good day to start something new.",
	"Your hard work will soon pay off.",
	"An important conversation will bring clarity.",
	"You’ll feel more confident about a recent decision.",
	"A small opportunity may lead to something big.",
	"Someone will appreciate your efforts today.",
	"You’re moving in the right direction—trust it.",
	"Good news related to work or studies is on the way.",
	"You’ll find peace in letting go of something.",
	"Your patience will be rewarded.",
	"A positive change is closer than you think.",
	"You’ll reconnect with someone unexpectedly.",
	"Your creativity will shine today.",
	"Luck is quietly on your side."
];

const predict = document.getElementById( "submit" );
predict.addEventListener( 'click', ( e ) =>
{
	e.preventDefault();

	const userName = document.getElementById( "userName" ).value;
	const userSurName = document.getElementById( "userSurName" ).value;
	const userDay = parseInt( document.getElementById( "userDay" ).value );
	const userMonth = parseInt( document.getElementById( "userMonth" ).value );
	const userYear = parseInt( document.getElementById( "userYear" ).value );

	//Calculate zodiac sign by DOB
	let zodiacSign = 0;
	if ( userMonth == 3 )
	{
		zodiacSign = 0;
	}
	else if ( userMonth == 4 )
	{
		zodiacSign = 1;
	}
	else if ( userMonth == 5 )
	{
		zodiacSign = 2;
	}
	else if ( userMonth == 6 )
	{
		zodiacSign = 3;
	}
	else if ( userMonth == 7 )
	{
		zodiacSign = 4;
	}
	else if ( userMonth == 8 )
	{
		zodiacSign = 5;
	}
	else if ( userMonth == 9 )
	{
		zodiacSign = 6;
	}
	else if ( userMonth == 10 )
	{
		zodiacSign = 7;
	}
	else if ( userMonth == 11 )
	{
		zodiacSign = 8;
	}
	else if ( userMonth == 12 )
	{
		zodiacSign = 9;
	}
	else if ( userMonth == 1 )
	{
		zodiacSign = 10;
	}
	else
	{
		zodiacSign = 11
	}

	const uName = document.getElementById( "uName" );
	uName.textContent = `Hi ${ userName } ${ userSurName } `;

	const zSign = document.getElementById( "zodiacSign" );
	const symbol = document.getElementById( "symbol" );
	const element = document.getElementById( "element" );
	const rulingPlanet = document.getElementById( "rulingPlanet" );
	const traits = document.getElementById( "traits" );

	zSign.textContent = ZodiacSigns[ zodiacSign ].name;
	symbol.textContent = ZodiacSigns[ zodiacSign ].symbol;
	element.textContent = ZodiacSigns[ zodiacSign ].element;
	rulingPlanet.textContent = ZodiacSigns[ zodiacSign ].rulingPlanet;
	traits.textContent = ZodiacSigns[ zodiacSign ].traits[ 0 ] + ", " + ZodiacSigns[ zodiacSign ].traits[ 1 ] + ", " + ZodiacSigns[ zodiacSign ].traits[ 2 ];

	const para = document.getElementById( "para" );
	para.textContent = ` ${ compliments[ userDay % 20 ] } ${ victimCardCompiments[ userMonth % 15 ] } ${ recommendations[ userYear % 15 ] } ${ predictions[ ( userName.length + userSurName.length ) % 15 ] }`;

	const form = document.querySelector( "form" );
	form.style.display = "none";

	const yourAstro = document.getElementById( "yourAstro" );
	yourAstro.style.display = "block";


} );
// name: "Aries",
// 	symbol: "♈",
// 		element: "Fire",
// 			rulingPlanet: "Mars",
// 				startDate: "March 21",
// 					endDate: "April 19",
// 						traits: [ "Bold", "Confident", "Energetic" ]