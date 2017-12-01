import { Component, Input, SimpleChange, OnInit } from '@angular/core';
import { Game, AUTO } from 'phaser-ce';
import { IBlipperPage } from '../../interfaces/IBlipperPage';
import { TopicProvider } from '../../providers/topic/topic';
import { PopularTopic } from '../../models/popular-topic';
import { SlidesProvider } from '../../providers/slides/slides';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'bubbles',
  templateUrl: 'bubbles.html'
})
export class BubblesComponent implements IBlipperPage, OnInit, OnDestroy {

  @Input() public enclosingWidth: number;
  @Input() public enclosingHeight: number;

  public pageTitle: string = "Blipper Feed";

  private topics: PopularTopic[];
  private topicsSubscription: Subscription;

  constructor(
    private topicProvider: TopicProvider,
    private slidesProvider: SlidesProvider
  ) {
    console.log('Hello BubblesComponent Component');
  }

  ngOnInit() {
    console.log('ngOnInit BubblesComponent');

    this.topics = new Array<PopularTopic>();

    this.topicProvider.getTop().subscribe(x => {
      this.topics = x;
      console.log(this.topics);
    });

    this.topicsSubscription = this.slidesProvider.onSlideChanged().subscribe(x => {
      if (x.slideIndex == 0) {
        this.topicProvider.getTop().subscribe(x => {
          this.topics = x;
          console.log(this.topics);
        });
      }
    });

  }

  ngOnDestroy() {
    console.log('ngOnDestroy BubblesComponent');

    if (this.topicsSubscription || this.topicsSubscription === null) {
      this.topicsSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['enclosingWidth'] && changes['enclosingWidth'].currentValue > 0
      && changes['enclosingHeight'] && changes['enclosingHeight'].currentValue > 0) {
      this.createGame();
    }
  }

  private createGame() {
    console.log("In createGame()");
    console.log(this.enclosingWidth + ", " + this.enclosingHeight);

    var game = new Phaser.Game(this.enclosingWidth, this.enclosingHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

    var bubbleGroup;
    var speed;
    var bubble;
    var centerBubble;
    var ship;
    var cursors;
    var bubbles: { bubble: any, dragged: boolean }[] = [];

    function preload() {

      //Image Preload
      game.load.image('bubble', 'Logos/bubble.png');
      game.load.image('background', 'Logos/background.png');

      game.load.crossOrigin = 'anonymous';
    }

    function create() {
      //Background Color or Picture
      game.stage.backgroundColor = '000000';

      //Starts P2 Physics
      game.physics.startSystem(Phaser.Physics.P2JS);

      //Ship declaration
      ship = game.add.sprite(10, 50, 'bubble');
      game.physics.p2.enable(ship, true);
      ship.body.setRectangle(this.enclosingWidth / 10, this.enclosingWidth / 10);

      //Cursor for ship
      cursors = game.input.keyboard.createCursorKeys();

      // Center-Bubble
      centerBubble = game.add.sprite(game.world.centerX, game.world.centerY, 'bubble');
      game.physics.p2.enable(centerBubble);
      centerBubble.body.setCircle(0.01);
      centerBubble.body.static = true;

      //Bubblegroup
      bubbleGroup = game.add.group();

      for (let i = 0; i < 20; i++) {
        bubble = bubbleGroup.create(game.rnd.integerInRange(-100, 100), game.rnd.integerInRange(-100, 100), 'bubble');
        game.physics.p2.enable(bubble, true);
        bubble.body.setCircle(2 + i * 3);
        bubble.body.fixedRotation = true;
        let bubbleInArray = { bubble: bubble, dragged: false };

        bubbles.push(bubbleInArray);
      }
      bubbleGroup.setAll('inputEnabled', true);
    }

    function update() {
      function accelerationToObject(obj1, obj2, speed) {
        if (typeof speed === 'undefined') {
          speed = 50;
        }
        var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
        //obj1.body.rotation = angle + game.math.degToRad(180);  // correct angle if wanted
        obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject 
        obj1.body.force.y = Math.sin(angle) * speed;
      }

      function distanceBetween(spriteA, spriteB) {
        var dx = spriteA.body.x - spriteB.body.x;  //distance ship X to planet X
        var dy = spriteA.body.y - spriteB.body.y;  //distance ship Y to planet Y
        var dist = Math.sqrt(dx * dx + dy * dy);     //pythagoras ^^  (get the distance to each other)
        return dist;
      }

      if (distanceBetween(bubble, centerBubble) < 100) {
        speed = 100;
      }
      else if (distanceBetween(bubble, centerBubble) < 300) {
        speed = 80;
      }
      else if (distanceBetween(bubble, centerBubble) < 500) {
        speed = 60;
      }
      else {
        speed = 0;
      }

      for (let i = 0; i < bubbles.length; i++) {

        accelerationToObject(bubbles[i].bubble, centerBubble, speed);
      }

      if (cursors.left.isDown) {
        ship.body.force.x = -300;
      }
      else if (cursors.right.isDown) {
        ship.body.force.x = 300;
      }
      else if (cursors.up.isDown) {
        ship.body.force.y = -300;
      }
      else if (cursors.down.isDown) {
        ship.body.force.y = 300;
      }
    }

    function render() {
    }
  }
}
