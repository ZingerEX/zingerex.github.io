var dates = ["2017-10-19", "2017-10-27", "2017-10-29", "2017-11-9", "2017-11-24", "2017-12-08", "2017-12-15", "2017-12-27", "2018-1-6", "2018-1-23", "2018-2-1", "2018-2-2", "2018-2-8", "2018-2-25", "2018-3-7", "2018-3-21", "2018-3-23", "2018-4-7", "2018-4-14", "2018-4-15", "2018-5-1", "2018-5-19", "2018-6-10", "2018-7-2", "2018-7-9", "2018-7-13", "2018-7-15", "2018-8-2", "2018-8-13", "2018-8-25", "2018-9-1", "2018-9-23", "2018-9-26", "2018-10-26", "2018-11-5", "2018-11-21", "2018-11-24", "2018-12-2", "2018-12-9", "2018-12-22", "2019-1-28", "2019-2-12", "2019-3-12", "2019-5-5", "2019-5-19", "2019-5-25", "2019-6-26", "2019-7-1", "2019-7-13", "2019-8-7", "2019-8-8", "2019-8-30", "2019-9-14", "2019-10-17", "2019-10-30", "2019-11-30", "2019-12-08", "2020-2-26", "2020-3-1", "2020-4-3", "2020-5-15", "2020-6-12", "2020-6-16", "2020-6-17", "2020-7-7", "2020-8-26", "2020-9-24", "2020-11-10", "2020-11-27", "2020-11-28", "2020-12-8", "2020-12-14", "2020-12-25", "2020-12-31", "2021-2-20", "2021-2-28", "2021-4-5", "2021-6-24", "2021-7-30", "2021-9-24", "2021-12-3", "2021-12-29", "2022-4-6", "2022-6-24", "2022-8-30", "2022-10-23"];

// Add all placements with the highest numbers first

var JSON = {
	"2017-10-19": {
		"levels": ["The Ultimate Phase", "Cataclysm (old)", "ICE Carbon Diablo X", "Retention", "Hypersonic", "Pursuit", "Old Hell Factory", "Crimson Clutter", "Cyber Chaos", "Duelo Maestro (solo)", "Creeper Force", "The JanuS Miracle", "Quest For Perfection", "Catastrophic", "Future Circles", "Fexty (nerfed)", "Kurumi City", "hi", "Planet Circles (Unnerfed)", "X Adventure", "Down Bass (old)", "Flat Major (old)", "Asymmetry", "Ultraviolet", "Light Years", "Elements X", "Galatic Fragility", "9Theory", "Entwined Room (old)", "Plasma Pulse II", "Landect", "Critical Fusion", "Night Terrors", "Ultrasonic", "Lunatic Doom Machine", "Necropolis", "Ruined Journey", "Chaotic Machine", "unknown", "Luminum", "Lezicuv?", "unknown2", "Effot", "Sequence", "Sparklic Ocean", "Pyromaniac", "Endorphin", "Future Demoness", "8o", "Alphabet X"],

		"placements": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
	},
	"2017-10-27": {
		"levels": ["Excessive Compliment"],

		"placements": [5]
	},
	"2017-10-29": {
		"levels": ["Demonic Bass"],

		"placements": [39]
	},
	"2017-11-9": {
		"levels": ["Right In"],

		"placements": [42]
	},
	"2017-11-24": {
		"levels": ["Subversive"],

		"placements": [3]
	},
	"2017-12-08": {
		"levels": ["Temple of Destiny", "Fearless"],

		"placements": [10, 46]
	},
	"2017-12-15": {
		"levels": ["Niflheim", "Hyperio Technia"],

		"placements": [1, 46]
	},
	"2017-12-27": {
		"levels": ["Twisted Tranquility"],

		"placements": [1]
	},
	"2018-1-6": {
		"levels": ["Theory of Alchemy", "Temple of Destiny"],

		"placements": [15, 32]
	},
	"2018-1-23": {
		"levels": ["Novalis", "Old Hell Factory"],

		"placements": [2, 1000]
	},
	"2018-2-1": {
		"levels": ["Spectral Tentation", "Love Baba", "Ice Cream", "Temple of Destiny"],

		"placements": [10, 45, 48, 21]
	},
	"2018-2-2": {
		"levels": ["Allegiance"],

		"placements": [4]
	},
	"2018-2-8": {
		"levels": ["Novalis"],

		"placements": [1]
	},
	"2018-2-25": {
		"levels": ["Plasma Pulse III", "Deception Dive"],

		"placements": [1, 6]
	},
	"2018-3-7": {
		"levels": ["Audio Extraction"],

		"placements": [1]
	},
	"2018-3-21": {
		"levels": ["Artificial Dream", "Falling Up"],

		"placements": [11, 13]
	},
	"2018-3-23": {
		"levels": ["Cosmorush 21"],

		"placements": [6]
	},
	"2018-4-7": {
		"levels": ["Niflheim", "Incipient", "Artificial Dream"],

		"placements": [4, 6, 8]
	},
	"2018-4-14": {
		"levels": ["Matilda the Machine"],

		"placements": [21]
	},
	"2018-4-15": {
		"levels": ["Rewind"],

		"placements": [35]
	},
	"2018-5-1": {
		"levels": ["Incipient"],

		"placements": [12]
	},
	"2018-5-19": {
		"levels": ["Cosmic Calamity"],

		"placements": [11]
	},
	"2018-6-10": {
		"levels": ["Plasma Pulse III", "Underground"],

		"placements": [1, 16]
	},
	"2018-7-2": {
		"levels": ["Excessive Compliment"],

		"placements": [17]
	},
	"2018-7-9": {
		"levels": ["Aurora"],

		"placements": [2]
	},
	"2018-7-13": {
		"levels": ["Torrential Storm (old)", "Final Epilogue", "Es Dilar Nos", "Photovoltaic"],

		"placements": [12, 19, 26, 28]
	},
	"2018-7-15": {
		"levels": ["Torrential Storm (old)"],

		"placements": [16]
	},
	"2018-8-2": {
		"levels": ["Night Party", "NecroDynamix"],

		"placements": [11, 38]
	},
	"2018-8-13": {
		"levels": ["Fabrication (old)"],

		"placements": [6]
	},
	"2018-8-25": {
		"levels": ["Galaxy Breaker"],

		"placements": [29]
	},
	"2018-9-1": {
		"levels": ["Awakening Horus"],

		"placements": [19]
	},
	"2018-9-23": {
		"levels": ["Torrential Storm (old)", "TG"],

		"placements": [26, 43]
	},
	"2018-9-26": {
		"levels": ["prismatic"],

		"placements": [30]
	},
	"2018-10-26": {
		"levels": ["Retention", "Intricate", "X Adventure"],

		"placements": [20, 27, 44]
	},
	"2018-11-5": {
		"levels": ["Celestial Force"],

		"placements": [1]
	},
	"2018-11-21": {
		"levels": ["Heat Wave"],

		"placements": [16]
	},
	"2018-11-24": {
		"levels": ["Uprise"],

		"placements": [13]
	},
	"2018-12-2": {
		"levels": ["CholeriX"],

		"placements": [18]
	},
	"2018-12-9": {
		"levels": ["Atmosphere", "Magnetum"],

		"placements": [4, 48]
	},
	"2018-12-22": {
		"levels": ["Sky Tech", "Electrosonic"],

		"placements": [25, 31]
	},
	"2019-1-28": {
		"levels": ["AAAAAAAAAAAAAAAAAAAA"],

		"placements": [20]
	},
	"2019-2-12": {
		"levels": ["Super Probably Level"],

		"placements": [2]
	},
	"2019-3-12": {
		"levels": ["Cataclysm", "Achondrite"],

		"placements": [3, 39]
	},
	"2019-5-5": {
		"levels": ["The Hell Dignity"],

		"placements": [7]
	},
	"2019-5-19": {
		"levels": ["Galaxy Breaker"],

		"placements": [39]
	},
	"2019-5-25": {
		"levels": ["ATMarbl", "Esencia"],

		"placements": [3, 10]
	},
	"2019-6-26": {
		"levels": ["Cadrega Mode", "Artificial Dream", "ICE Carbon Diablo X", "Astronomical Alchemy", "Pursuit"],

		"placements": [3, 19, 24, 43, 44]
	},
	"2019-7-1": {
		"levels": ["MELTDOWN", "Achondrite"],

		"placements": [41, 43]
	},
	"2019-7-13": {
		"levels": ["CYCLONE", "Gammaray", "Superstrike"],

		"placements": [24, 28, 40]
	},
	"2019-8-7": {
		"levels": ["Bloodbath", "Ultrasans", "Penombre", "CYCLONE"],

		"placements": [1, 23, 38, 31]
	},
	"2019-8-8": {
		"levels": ["Unearthed"],

		"placements": [13]
	},
	"2019-8-30": {
		"levels": ["A Bizarre Phantasm", "Raindance", "Zettabyte"],

		"placements": [6, 24, 44]
	},
	"2019-9-14": {
		"levels": ["Aftermath", "Idols", "Esencia"],

		"placements": [3, 13, 27]
	},
	"2019-10-17": {
		"levels": ["Epsilon", "Marathon", "Concaved Memories", "Tech Manifestation", "Polish Alphabet"],

		"placements": [6, 18, 24, 25, 50]
	},
	"2019-10-30": {
		"levels": ["Frizzantino Vibes"],

		"placements": [43]
	},
	"2019-11-30": {
		"levels": ["Belloq", "Triple Six", "Glide", "AcropoliX"],

		"placements": [5, 18, 36, 40]
	},
	"2019-12-08": {
		"levels": ["Digital Disarray", "Triple Six"],

		"placements": [18, 20]
	},
	"2020-2-26": {
		"levels": ["Conical Depression", "The Hell Zone", "Skrrah", "Elliptic Curve", "Glide", "Niflheim", "Triple Six"],

		"placements": [9, 10, 23, 34, 30, 22, 1000]
	},
	"2020-3-1": {
		"levels": ["Heat Wave"],

		"placements": [35]
	},
	"2020-4-3": {
		"levels": ["Betrayal of Fate", "Artifice", "Atmosphere", "The Flawless", "WaveBreaker", "Novalis", "Unearthed", "Violently X"],

		"placements": [9, 11, 16, 21, 23, 26, 27, 40]
	},
	"2020-5-15": {
		"levels": ["Grill Kill", "HURRICANE", "WaveBreaker"],

		"placements": [37, 43, 17]
	},
	"2020-6-12": {
		"levels": ["Super Probably Level", "Epsilon", "Red World Rebirth", "Void Wave", "The Hell World", "The Hell Zone", "ElectroLux", "Idols", "The Flawless", "Triple Six", "Heartbeat", "Concaved Memories", "Heat Wave", "Unearthed", "Artificial Dream"],

		"placements": [4, 7, 8, 9, 12, 13, 18, 22, 25, 30, 35, 36, 41, 47, 51]
	},
	"2020-6-16": {
		"levels": ["Black Blizzard", "Marathon"],

		"placements": [4, 30]
	},
	"2020-6-17": {
		"levels": ["Penultimate Phase", "Zenith"],

		"placements": [39, 44]
	},
	"2020-7-7": {
		"levels": ["Breakout", "Maybe Possibly Thing", "ElectroLux"],

		"placements": [23, 39, 28]
	},
	"2020-8-26": {
		"levels": ["Sunset Sandstorm", "Disentombed", "The Hell Origin", "The Hell Factory"],

		"placements": [1, 7, 16, 18]
	},
	"2020-9-24": {
		"levels": ["SubSonic", "Prismatic Haze", "Aftermath", "Betrayal of Fate"],

		"placements": [7, 16, 12, 14]
	},
	"2020-11-10": {
		"levels": ["The Hell Field", "Reverence", "Cataclysm", "The Hell Dignity"],

		"placements": [6, 40, 33, 42]
	},
	"2020-11-27": {
		"levels": ["Glacial Torrent"],

		"placements": [25]
	},
	"2020-11-28": {
		"levels": ["Glacial Torrent"],

		"placements": [28]
	},
	"2020-12-8": {
		"levels": ["Novalis"],

		"placements": [41]
	},
	"2020-12-14": {
		"levels": ["Athanatos"],

		"placements": [2]
},
	"2020-12-25": {
		"levels": ["Penultimate Phase", "Cosmorush 21", "Allegiance", "Glide", "Heat Wave", "Zenith", "Tech Manifestation", "Mandragora", "Grill Kill", "Deception Dive", "Elliptic Curve", "Violently X", "Unearthed", "HURRICANE", "NecropoliX", "Uprise", "Raindance", "Fingerdash v3", "The Lost Existence", "Artificial Dream", "Mirage", "Night Party", "8o X", "Esencia", "Ultrasans", "The Ultimate Phase", "Falling Up", "Cataclysm(old)", "ICE Carbon Diablo X", "MELTDOWN", "AcropoliX", "CholeriX", "Gammaray", "Diligence", "Arcadelocked", "Faith", "Penombre", "Misty Mountains", "Napalm", "Corrosion", "FinKor", "CYCLONE", "Polish Alphabet", "Thunder Alphabet", "Virtual Collapse", "SUBVERSIVE", "AAAAAAAAAAAAAAAAAAAA", "Incipient", "Frizzantino Vibes", "Sky Tech"],

		"placements": [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
	},
	"2020-12-31": {
		"levels": ["Artificial Ascent", "Audio Expulsion", "Want Me", "Frightful Melody", "Arcadelocked"],

		"placements": [1, 7, 26, 72, 101]
	},
	"2021-2-20": {
		"levels": ["Hatred", "Fusion Z", "Just DANCE", "Fexty", "Evangelion", "Doop"],

		"placements": [14, 40, 49, 57, 74, 80]
	},
	"2021-2-28": {
		"levels": ["Sunset Sandstorm", "Audio Extraction", "ICE Carbon Diablo X"],

		"placements": [1, 42, 88]
	},
	"2021-4-5": {
		"levels": ["Blade of Justice", "The Hell Inferno", "Killbot", "Phobos", "Freedom08", "Artificial Ideology", "SHATTER", "GridLocked", "Golden Shade"],

		"placements": [6, 8, 12, 14, 16, 30, 36, 70, 81]
	},
	"2021-6-24": {
		"levels": ["xo", "Quantum Processing", "Blade of Justice", "Subsonic", "Hatred", "Black Blizzard", "Void Wave", "Under Lavaland", "Caution", "Sigma Interface", "Inflective", "Removed Submission", "Armageddon", "Panasonic", "Arcane16", "Multition", "Brimtanic Paradise", "Alcatraz", "Galactus", "Our Fountain", "Evangelion", "Omorfia", "Daydream", "NecropoliX"],

		"placements": [1, 5, 9, 10, 15, 17, 24, 35, 37, 45, 48, 51, 53, 58, 60, 61, 67, 69, 87, 91, 95, 96, 99, 100]
	},
	"2021-7-30": {
		"levels": ["Distraught", "The Hell Bird", "RASH", "Endless Dream", "Want Me", "Concaved Memories", "Niflheim", "Heartbeat", "Omorfia", "reverence", "Violently X", "Deception Dive"],

		"placements": [16, 26, 34, 46, 49, 69, 72, 73, 78, 79, 91, 97]
	},
	"2021-9-24": {
		"levels": ["Aronia", "Plasma Pulse Finale", "SPEEDRUN", "Hateful Reflection", "Falcon16", "EnvY", "Kinetic Bypass", "Azure Fiesta", "Insaction", "Karma", "Cromulent"],

		"placements": [1, 2, 22, 26, 33, 34, 46, 50, 81, 84, 99]
	},
	"2021-12-3": {
		"levels": ["Sonic Wave", "Erebus", "kowareta", "SubSonic", "Hateful Reflection", "Annihilation Nation", "Hatred", "Red World Rebirth", "Endless Dream", "Arctic Arena", "Artifice", "Breakout", "The Antimatter", "OOPZ", "Extinction", "SHATTER", "Daydream"],

		"placements": [1, 2, 4, 13, 18, 19, 24, 30, 44, 45, 48, 57, 58, 65, 76, 78, 87]
	},
	"2021-12-29": {
		"levels": ["Dolos", "EXPLICIT", "INNARDS", "Lonely Lights", "Deflective", "Cadrega Mode", "Azure Fiesta", "Freedom19", "Fusion Z", "Glacial Torrent", "Daydream", "Broken Signal", "Myocardia"],

		"placements": [18, 20, 37, 38, 41, 52, 56, 67, 69, 70, 88, 90, 96]
	},
	"2022-4-6": {
		"levels": ["Sigma", "Frozen Cave", "Freedom08", "Belloq", "Audio Expulsion", "Falcon16", "Silentium Gradas", "INNARDS", "doradura", "Colorful Corruption", "GewErbiX", "Worse Trip", "Mystic", "Betrayal of Fate", "Volume", "Night Rider", "Untitled", "Sigma Interface", "Tempest Tornado", "moment", "PanaSonic", "Instant Execution"],

		"placements": [2, 3, 23, 29, 30, 32, 35, 37, 38, 40, 43, 46, 50, 54, 55, 56, 62, 65, 70, 78, 88, 96]
	},
	"2022-6-24": {
		"levels": ["Anoxysm", "Carnage Mode", "Bausha Vortex", "Omicron", "BuTiTi III", "Black Flag", "Ziroikabi", "Carcano", "Ecstasy", "Boogie", "Tempest Tornado", "Quaoar", "doradura", "Never Beat It"],

		"placements": [15, 16, 18, 22, 27, 29, 34, 37, 55, 64, 72, 83, 98, 99]
	},
	"2022-8-30": {
		"levels": ["Digital Disarray", "Dole Damos"],

		"placements": [97, 99]
	},
	"2022-10-23": {
		"levels": ["Yatagarasu", "RUST", "xo", "Digital Descent", "The Reaper", "Auditory Breaker", "Infernal Abyss", "Athanatos", "Bausha Vortex", "Missing Benefits", "Furious Flames", "Polygonal Paradox", "Colorful Corruption", "Prisma ", "Endless Dream", "Galactic Shift", "lodin da fish washer", "Apollo 11", "Fabricated Thoughts", "OPSM1", "Artifice", "NeRUaL", "Ikaros"],

		"placements": [1, 4, 8, 11, 13, 16, 17, 20, 21, 32, 37, 47, 52, 54, 60, 62, 65, 69, 71, 77, 82, 89, 93]
	},
};