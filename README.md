# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Robert Murphy

Time spent: 5 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [X] User can change how many buttons are in each game
* [X] Patterns now have a length of 200, to let people see how far they can go each time
* [X] High scores are implemented for each difficulty
* [X] Users can see high scores whenever they want
* [X] Three difficulties that change how fast the game takes to speed up the playback

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X]https://s4.gifyu.com/images/murphyPreWork.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/js/js_arrays.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A big challenge that I had was that, being new to JavaScript, I really did not know how to do a lot of the more specific things, such
as coding the sound files, and it's even been a while since I had to use CSS. So, instead of making more complex sounds for each
button (which I did not believe would add much to the game itself) or adding a time limit, both of which seemed to be really hard
and not really necessary for the game to be the best it could be for a beginner project, I added new features. I added buttons to
let the player choose how many buttons they would want, from four to six (six being the most buttons that could comfortably fit)
and it would affect the game accordingly, which worked out really well, and not only added to the game but it was something
that I learned how to do and let me apply what I learned about writing functions in JavaScript. The other main feature I made
was a fundamental change to the game, where patterns do not just cap at 8, but keep going to 200, so I could implement high scores
in a way that made sense. I realized that adding high scores adds much more to the game than other features, and I was able to even
make it so that there were different high scores for each difficulty. The difficulties were also something fun I realized I could do,
as the player could see how far they could go on each difficulty with the high scores. So, I overcame weakness in my knowledge of
JavaScript with creative new features.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I think my main questions would be about web development for mobile. This game could easily be done on mobile as it is all buttons,
but things would have to be resized. I wonder that, for larger applications or games, how does having to develop for mobile
affect development and the end product? It seems like the whole UI would have to be redesigned several times, so how does that
matter during development? Also, some games might not use only buttons, some may require typing, which is usually much harder
to do on a phone than a computer keyboard, and so how do mobile versions compensate for that weakness? Overall, mobile development
just seems really complex, and I would love to learn more about it given how prevalant mobile web browsers are.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would likely spend some of them on making the game look better, through perhaps centering the buttons and text, and possibly
adding an image to the background, or even adding textures (disguised as images) to the buttons. I think that with a game like
this it can be hard to develop a lot more features without really overhauling how a lot of the game works, so going over the 
graphics and looking at how it can be improved visually would be the next big step into making it work better. Perhaps a time
limit would be the first feature I would add, maybe as a toggleable option via a button, however that would be the only other main
feature I would add, besides maybe also add a series of tones once the game begins, but otherwise, I think I added the major features
that I could think of.



## License

    Copyright Robert Murphy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.