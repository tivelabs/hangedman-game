# PACKAGE hangedman-game

## How to install

```
npm i @tive-labs/hangedman-game;

```

## How to use

### Init play, call this method for get the aleatory word
### Send two parameters (category, level)
### Categories: 1 - animals, 2 - numbers
### Levels: 1 - low, 2 - medium, 3 - hard

```
const word = initHangedMan('1', '1');

```

### Play, sending a letter
### This funcion will return this values
### Win - When you win
### Lost - When you lost
### _ A _ - The word with the correct position of your letter, for continue.


```
const writeLetter = play('A');

```



# HANGEDMAN GAME

## Installation

```
npm install
```

## Run

```
npm start
```

## Test

```
npm test
```

## How to play
1. Select a category option
2. Select a level option
3. Write letter until fill al underscore spaces
4. You can fail only three times.