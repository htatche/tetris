/*global Phaser*/

import Game             from './lib/Game.es6';
import Block            from './lib/Block.es6';
import Position         from './lib/Position.es6';

var game;

var printMessage = function() {
    console.log('Done !');
};

var start = function() {
    var block = new Block(game.phaser, game.table);

    block.newBrick(new Position(0, 0));
    block.newBrick(new Position(0, 1));
    block.newBrick(new Position(0, 2));

    setTimeout(function() {
        game.table.row(0).clear();
    }, 2000);
};

game = new Game(10, 20, 35, start);
window.game = game;