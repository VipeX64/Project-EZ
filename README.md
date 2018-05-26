# Project "EZMAT"

For the last few weeks I've been working on this project of mine. The goal of the whole project was to help students with their school preparation. I wanted to ensure, that those people in need of assistance get their help by any means. 

I've developed a free app, where people can learn and improve in their subjects. The whole idea behind this is simple. It's like playing a game or filling out a quiz. 

In year 1651 Jan Ámos Komenský, one of the most important figures in history, released a schoolbook called "__Škola hrou__" (raw translation = Learning by playing). This book explained how it's easy to learn something, just by making it more fun for the one whose learning it. The exact principle is used in my idea. 

Making learning stuff easy, and fun. 

Ladies and gentleman, I present you... __EZMAT__.


# Methods used in EZMAT

| Function / method | General usage, data type |
|----------------------------------|:---------|
|muteUnmute| toggles if the sounds is on or not, boolean|
|checkWidth| checks if the device used by the user has inner width smaller or greater than 800|
|detectCorr| returns an argument based on the correct answer of current question|
|chooseQ| rolls a different random number, if the number of question has already been chosen before
|rollrandomQ| chooses a random number between 0 and a number of questions stored in the database; number |
|next| allows the user to click on 4 predefined answer buttons|
|renderAns| decides whether user answer correctly or not|
|renderPercentage| calculates the percentage of correctly answered questions|
|setBarSize| sets the correct width of progress bar according to the number of already answered questions|
|scotWork| shortens the code, repetitive function|
|correctFont| based on function checkWidth corrects the font-size of all Q&As
|thx| thanks the user for helping us fill out the database|

# How it all works?

The core of is the question database.
``` javascript
const database = [{questionInput:"..question..", answerA:"..answer", answerB:"string", answerC:"string", answerD:"string", corr:number from 1-4, used:false},{questionIn...}];

```
This database is an array of objects, where every object holds 7 keys and values (questionInput, answers A - D, position of the correct answer and a boolean used which changes to true whenever the question has been used in the game. One database holds about 20 - 40 questions (objects).

User sees a randomly generated question and 4 prescripted answers. User chooses which one he thinks might be the correct one, sound plays and color of text changes based on what answer did the user choose. 

This goes on and on until the user answer the last question. Then a modal window pops out, where the user can see his "percentage score" and either play the quiz again or quit the quiz.

# Changelog

Detailed changes for each release are documented in the [release notes](https://omnifio.cz/sandbox/ezmat/o-tomto-projektu).

# Licence

Project **EZMAT** was and still is under the supervision of Thomas Lacina, passionate czech web designer, developer and programmer.

# Special thanks
I'd like to give out a special thanks to all of my supporters throughout the years (Daniel Garcia Fifoot, Marianne Stavik Eggen, Michael Neuwirth). Very, very special thanks to one of my biggest supporters Philip Faktor, former director of Omnifio, Inc., who has been an incredible support throughout the last year. This project wouldn't even be possible without his help. And of course big thanks to my family, you've been supporting me since the day I was born and I love you so much for that!  

Thanks again!!
