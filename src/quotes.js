const quotes = [
    {
        "quote": "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
        "author": "Michael Scott"
    },
    {
        "quote": "I talk a lot, so I've learned to just tune myself out...",
        "author": "Kelly Kapoor"
    },
    {
        "quote": "I am Beyonce always.",
        "author": "Michael Scott"
    },
    {
        "quote": "Oh, it is on, like a prawn who yawns at dawn.",
        "author": "Andy Bernard"
    },
    {
        "quote": "Should have burned this place down when I had the chance.",
        "author": "Michael Scott"
    },
    {
        "quote": "Mini cupcakes? As in the mini version of regular cupcakes? Which is already a mini version of cake? Honestly, where does it end with you people?",
        "author": "Kevin Malone"
    },
    {
        "quote": "I want people to be afraid of how much they love me.",
        "author": "Michael Scott"
    },
    {
        "quote": "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.",
        "author": "Dwight Schrute"
    },
    {
        "quote": "I'm not superstitious, but I am a little stitious.",
        "author": "Michael Scott"
    },
    {
        "quote": "I wish there was a way to know you're in the good old days before you've actually left them.",
        "author": "Andy Bernard"
    },
    {
        "quote": "If I don't have some cake soon, I might die.",
        "author": "Stanley Hudson"
    },
    {
        "quote": "Sorry I annoyed you with my friendship.",
        "author": "Andy Bernard"
    },
    {
        "quote": "I just wanna lie on the beach and eat hot dogs. That's all I've ever wanted.",
        "author": "Kevin Malone"
    },
    {
        "quote": "And I feel God in this Chili's tonight.",
        "author": "Pam Beesly"
    },
    {
        "quote": "Me think, why waste time say lot word, when few word do trick.",
        "author": "Kevin Malone"
    },
    {
        "quote": "I wanna do a cartwheel. But real casual like. Not enough to make a big deal out of it, but I know everyone saw it. One stunning, gorgeous cartwheel.",
        "author": "Creed Bratton"
    },
    {
        "quote": "Sometimes the clothes at Gap Kids are just too flashy.",
        "author": "Angela Martin"
    },
    {
        "quote": "The man is wearing sandals. I don’t need to see Oscar’s toes at work. Gross! I mean he looks like he just got off the boat.",
        "author": "Angela Martin"
    },
    {
        "quote": "The worst thing about prison was the dementors.",
        "author": "Prison Mike"
    },
    {
        "quote": "Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.",
        "author": "Michael Scott"
    },
    {
        "quote": "I don’t care what they say about me. I just want to eat. Which I realize is a lot to ask for. At a dinner party.",
        "author": "Pam Beesly"
    },
    {
        "quote": "Life is short. Drive fast and leave a sexy corpse. That’s one of my mottos.",
        "author": "Stanley Hudson"
    },
    {
        "quote": "Oh you’re paying way too much for worms. Who’s your worm guy?",
        "author": "Creed Bratton"
    },
    {
        "quote": "I guess I’ve been working so hard, I forgot what it’s like to be hardly working.",
        "author": "Michael Scott"
    },
    {
        "quote": "Who says exactly what they’re thinking? What kind of a game is that?",
        "author": "Kelly Kapoor"
    },
    {
        "quote": "I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.",
        "author": "Creed Bratton"
    },
    {
        "quote": "If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.",
        "author": "Dwight Schrute"
    },
    {
        "quote": "If I had to, I could clean out my desk in five seconds, and nobody would ever know that I’d ever been here. And I’d forget, too.",
        "author": "Ryan Howard"
    },
    {
        "quote": "You guys I’m like really smart now. You don’t even know. You could ask me, Kelly what’s the biggest company in the world? And I’d be like, ‘blah blah blah, blah blah blah blah blah blah.’ Giving you the exact right answer.",
        "author": "Kelly Kapoor"
    },
    {
        "quote": "Who is Justice Beaver?",
        "author": "Dwight Schrute"
    },
    {
        "quote": "When you’re a kid, you assume your parents are soulmates. My kids are going to be right about that.",
        "author": "Pam Beesly"
    },
    {
        "quote": "If I can’t scuba, then what’s this all been about? What am I working toward?",
        "author": "Creed Bratton"
    },
    {
        "quote": "I say dance, they say ‘How high?",
        "author": "Michael Scott"
    },
    {
        "quote": "I wanted to eat a pig in a blanket, in a blanket.",
        "author": "Kevin Malone"
    },
    {
        "quote": "I hate the idea that someone out there hates me. I even hate thinking that Al-Qaeda hates me. I think if they got to know me, they wouldn’t hate me.",
        "author": "Pam Beesly"
    },
    {
        "quote": "I love inside jokes. I’d love to be a part of one someday.",
        "author": "Michael Scott"
    },
    {
        "quote": "I already won the lottery. I was born in the US of A baby. And as backup I have a Swiss passport.",
        "author": "Creed Bratton"
    },
    {
        "quote": "It’s like I used to tell my wife. I do not apologize unless I think I’m wrong, and if you don’t like it, you can leave. And I say the same thing to my current wife, and I’ll say it to my next one, too.",
        "author": "Stanley Hudson"
    },
    {
        "quote": "Close your mouth, sweetie. You look like a trout.",
        "author": "Phyllis Lapin-Vance"
    },
    {
        "quote": "I wake up every morning in a bed that’s too small, drive my daughter to a school that’s too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day.",
        "author": "Stanley Hudson"
    },
    {
        "quote": "Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name? Creed Bratton.",
        "author": "Creed Bratton"
    },
    {
        "quote": "There’s a lot of beauty in ordinary things. Isn’t that kind of the point?",
        "author": "Pam Beesly"
    },
    {
        "quote": "I’m fast. To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther.",
        "author": "Dwight Schrute"
    },
    {
        "quote": "God, this is so sad, this is the smallest amount of power I’ve ever seen go to someone’s head.",
        "author": "Jim Halpert"
    },
    {
        "quote": "Stanley just drank OJ out of my mug and didn’t seem to realize that it wasn’t his hot coffee. So the question has to be asked, is there no limit to what he won’t notice?",
        "author": "Jim Halpert"
    },
    {
        "quote": "I miss Dwight. Congratulations, universe. You win.",
        "author": "Jim Halpert"
    },
    {
        "quote": "Last week, Dwight found half a joint in the parking lot. And as it turns out, Dwight finding drugs is more dangerous than most people using drugs.",
        "author": "Jim Halpert"
    },
    {
        "quote": "Through concentration, I can raise and lower my cholesterol at will.",
        "author": "Dwight Schrute"
    },
    {
        "quote": "And I did not become a Lackawanna County volunteer sheriff’s deputy to make friends. And by the way, I haven’t.",
        "author": "Dwight Schrute"
    },
    {
        "quote": "All morning I look forward to my afternoon cigar and I'm not stopping for anybody.",
        "author": "Meredith Palmer"
    },
    {
        "quote": "Don't fall in love with me, kid.",
        "author": "Meredith Palmer"
    },
    {
        "quote": "We have a gym at home. It's called the bedroom.",
        "author": "Phyllis Lapin-Vance"
    },
    {
        "quote": "I like being in the same building as Bob. It keeps me honest.",
        "author": "Phyllis Lapin-Vance"
    },
    {
        "quote": "This isn't a toast. You're just thinking out loud.",
        "author": "Phyllis Lapin-Vance"
    }
]