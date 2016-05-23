//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;
var iniOff = 0;
var selection = [];
$(document).ready(function() {
    /*WHEEL SPIN FUNCTION*/
    $('#spin').click(function() {
        selection[0] = myJokes[Math.floor(Math.random() * (
            myJokes.length))];
        selection[1] = myGames[Math.floor(Math.random() * (
            myGames.length))];
        selection[2] = myVideos[Math.floor(Math.random() * (
            myVideos.length))];
        selection[3] = myWouldYouRathers[Math.floor(Math.random() *
            (myWouldYouRathers.length))];
        selection[4] = myTrivias[Math.floor(Math.random() * (
            myTrivias.length))];
        selection[5] = mySongs[Math.floor(Math.random() * (
            mySongs.length))];
        //add 1 every click
        clicks++;
        /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
        var newDegree = degree * clicks;
        var extraDegree = Math.floor(Math.random() * (360 - 1 +
            1)) + 1;
        totalDegree = newDegree + extraDegree;
        console.log("my total degree:" + Math.floor(((
            totalDegree + 30) % 360) / 60));
        var myVar = Math.floor(((totalDegree + 23.7) % 360) /
            60);
        /*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
        $('#wheel .sec').each(function() {
            var t = $(this);
            var noY = 0;
            var prevAOY = 0;
            var c = 0;
            var n = 700;
            var interval = setInterval(function() {
                c++;
                $("#txt").html("");
                if (c === n) {
                    clearInterval(interval);
                    var color = "Joke<hr><br>"; //red
                    if (myVar == 1) color =
                        "Game<hr><br>"; //Orange
                    if (myVar == 2) color =
                        "Video<hr><br>"; //Yellow
                    if (myVar == 3) color =
                        "Would You Rather<hr><br>"; //Navy
                    if (myVar == 4) color =
                        "Trivia<hr><br>"; //Blue
                    if (myVar == 5) color =
                        "Song<hr><br>"; //Green
                    $("#txt").html(color +
                        selection[myVar]);
                }
                var aoY = t.offset().top;
                //var myVar = Math.floor((aoY + iniOff + 90)/60);
                //console.log(myVar);
                //console.log(aoY);
                //var myVar = Math.floor(((aoY+30)%360)/60);
                var color = "Joke"; //red
                if (myVar == 1) color = "Game"; //Orange
                if (myVar == 2) color = "Video"; //Yellow
                if (myVar == 3) color =
                    "Would You Rather"; //Navy
                if (myVar == 4) color =
                    "Trivia"; //Blue
                if (myVar == 5) color = "Song"; //Green
                // $("#txt").html(color);
                /*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
                if (aoY < 23.89) {
                    console.log('<<<<<<<<');
                    $('#spin').addClass('spin');
                    setTimeout(function() {
                        $('#spin').removeClass(
                            'spin');
                    }, 100);
                }
            }, 10);
            $('#inner-wheel').css({
                'transform': 'rotate(' +
                    totalDegree + 'deg)'
            });
            noY = t.offset().top;
        });
    });
    var myJokes = [
        'Yo mamas forehead looks so big, people mistake it for the "Great Wall of China."',
        'What did one computer say to the other? 010101101010101010101',
        'Q:Whats it called when a blonde blows in another blondes ear? A:Data transfer.',
        'Yo momma teeth so yellow that when she looked up at the sun the sun said hey cuz!',
        'Yo mama & daddy so black the dark side of the moon got jealous.',
        'Yo mama so fat, I took a picture of her last Christmas and its still printing.',
        'Yo mamma is so ugly when she tried to join an ugly contest they said, "Sorry, no professionals." ', 
        'Yo momma is so fat and old when God said, "Let there be light," he asked your mother to move out of the way.'
    ];
    var joke = myJokes[Math.floor(Math.random() * (myJokes.length))];
    var myWouldYouRathers = [
        'Everyone in the world gets all their wishes fulfilled for the rest of their lives, but Everyone is being mind-controlled, its all happening inside a simulation which one cannot escape from alive, and you are the only one aware of this.',
        'You gain a million dollars right here and now, but have to kill 2 people before gaining anything (untraceable).',
        'You make the greatest work of art in history, but Nobody will appreciate it until after youre dead and you die broke and alone.',
        'Would you rather wake up naked and sore without any memory of the night before next to the burger king telling you “you had it your way” or wake up next to Ronald McDonald telling you that “you were loving it”?',
        'Would you rather be half your height or double your weight?',
        'Would you rather have a rewind button in your life or have a pause button in your life ?',
        'Would you rather use eye drops made of vinegar or toilet paper made from sandpaper?',
        'Would you rather wear a snow suit in the desert or be naked in Antarctica?'
        
    ];
    var wouldYouRather = myWouldYouRathers[Math.floor(Math.random() * (
        myWouldYouRathers.length))];
    var mySongs = [
        '<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aprithudasgupta%3Aplaylist%3A7nhDzDr6NuiLV2AbWiu5ea" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2lCM0giF5meapslmQwWsrh" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A0G1ffjfFuTUTVjDrVdLimH" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A0WAuEfa5Lmg72xfydLVcca" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3Aspotify%3Aplaylist%3A5yolys8XG4q7YfjYGl5Lff" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2gKQvajkEEaDtkqJ8FJ4uw" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>','<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A7viNUmZZ8ztn2UB4XB3jIL" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    ];
    var song = mySongs[Math.floor(Math.random() * (mySongs.length))];
    var myVideos = [
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/MP1Q8R8VDFw" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/8zhR7IzccWQ" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/MtGpo2JFUls" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/4qBHfd2NtJs" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/wWXRU1DugYg" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/fjtaSLFL2B8" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="http://www.youtube.com/embed/SZ_ugV2n-oo" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="https://www.youtube.com/embed/ofV_iFBw2YE" frameborder="0"></iframe>',
        '<iframe width="500" height="315" src="https://www.youtube.com/embed/njos57IJf-0" frameborder="0"></iframe>'
    ];
    var video = myVideos[Math.floor(Math.random() * (myVideos.length))];
    var myTrivias = ['Who was Tom Brady’s first wife?',
        'What female singer had an embarrassing wardrobe malfunction during the Super Bowl XXXVIII halftime show?',
        'Who is next in line to succeed the President, after the Vice President?',
        'What French sculptor created the statue of liberty?',
        'When adjusted for inflation, which is the highest grossing film of all time?',
        'Which animal has the largest brain?'
    ];
    var trivia = myTrivias[Math.floor(Math.random() * (myTrivias.length))];
    var myGames = [
        '<iframe src="http://www.gameflare.com/embed/agario/" frameborder="0" scrolling="no" width="1100" height="680"></iframe>',
        '<iframe src="http://www.gameflare.com/embed/8-ball-pool-multiplayer/" frameborder="0" scrolling="no" width="750" height="550"></iframe>', '<iframe src="http://www.gameflare.com/embed/slitherio/" frameborder="0" scrolling="no" width="900" height="630"></iframe>' 
    ];
    var game = myGames[Math.floor(Math.random() * (myGames.length))];
}); //DOCUMENT READY
