## Extended Rock Paper Scissors Game - Javascript

Rock Paper Scissors (plus spock and lizard) game in Javascript (AngularJS framework).

![Picture 1](public/img/screenshot1.png)  ![Picture 2](public/img/screenshot2.png)  ![Picture 3](public/img/screenshot3.png)

##Implemented features:

```
* Player can choose rock, paper, scissors, lizard or spock.
* Player can choose to play with random computer, tactical computer or other player.
* Random computer player choose randomly between rock, paper, scissors, lizard or spock.
* Tactical computer makes first choice randomly but in 2nd and 3rd round selects shapes which would beat his previous choice.
* Game consist of 3 rounds.
* Player can see his choice when playing with computer.
* Player can see computer choice.
* Player can see round result.
* Player can see final game result.
* Player can start new game.
```

##Approach:

Following challenge specification I have decided to use Javascript(Angular framework) language and Karma(with stubbing computer random choices) for unit testing.

Angular allowed me to implement MVC principles with logic located in the factory and controller being responsible for binding the view interaction with the model.

I have designed three types of players: human, random computer and tactical computer player. However, the app can be extended to other types of players if necessary.

Although, it was not part of specification I've decided to include 'spock' and 'lizard' moves to prove that application can be extended.

Also, in my opinion, longer matches could be implemented by changing 'turns' variable assignment in the factory from 3 to 5.

Further improvements could include:
- feature testing of the app with Protractor,
- Node and Express as a server,
- creating more factories when the app grow further.

##To run the app:

```
git clone git@github.com:AnnaKL/RPS-Javascript.git
cd RPS-Javascript
open index.html
```

##To run the tests:

```
karma start test/karma.conf.js
```
