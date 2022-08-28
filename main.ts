namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-1)
    }
    if_touched4()
})
function if_touched4 () {
    if (if_touched_4 == false) {
        game.splash("you discoverd a new object!")
        info.changeScoreBy(1)
        if_touched_4 = true
    } else {
        info.changeScoreBy(0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
    if_touched5()
})
function if_touched2 () {
    if (if_touched_2 == false) {
        game.splash("you discoverd a new object!")
        info.changeScoreBy(1)
        if_touched_2 = true
    } else {
        info.changeScoreBy(0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
function if_touched5 () {
    if (if_touched_5 == false) {
        game.splash("you discoverd a new object!")
        info.changeScoreBy(1)
        if_touched_5 = true
    } else {
        info.changeScoreBy(0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
    if_touched3()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if_touched()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . . 3 1 1 1 1 1 1 1 1 3 . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 3 3 1 1 2 . . . . 
        . . . . 3 3 3 2 2 2 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `,img`
        . . 3 3 . . . 3 3 . . . . . . . 
        . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
        . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
        . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
        . 3 3 . . . . . 2 2 . 2 2 2 . . 
        3 1 1 2 2 . . . . . . . 3 3 . . 
        3 1 1 1 2 . . . . . . 2 1 1 3 3 
        3 1 1 2 . . . . . . 3 1 1 1 1 3 
        . 3 2 2 . . . . . . . 2 1 1 3 . 
        . . . . . . . 2 . . . . 3 3 . . 
        . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
        . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
        3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
        3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
        3 3 3 . . . . 3 3 . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
        . . . 3 1 1 1 1 1 1 1 1 3 . . . 
        . . . . 3 1 1 1 1 1 1 3 . . . . 
        . . . . 2 1 1 1 1 1 1 2 . . . . 
        . . . . 2 1 1 3 3 1 1 2 . . . . 
        . . . . 3 3 3 2 2 2 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 50)
    if_touched2()
})
function if_touched () {
    if (firstTouched == false) {
        game.splash("you discoverd a new object!")
        info.changeScoreBy(1)
        firstTouched = true
    } else {
        info.changeScoreBy(0)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
function if_touched3 () {
    if (if_touched_3 == false) {
        game.splash("you discoverd a new object!")
        info.changeScoreBy(1)
        if_touched_3 = true
    } else {
        info.changeScoreBy(0)
    }
}
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    } else if (current_level == 3) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
        if (info.score() >= 50) {
            game.setDialogFrame(img`
                8888.....88....888....888...8888.
                867788..8768..86768..8678.887768.
                8767768.877788676768877788677678.
                87767768676778776778776786776778.
                .877876667767877677876778678778..
                .867786686766867676866766687768..
                ..8666868867688686886768686668...
                .88866688888888888888888866688...
                8777768866666666666666668886688..
                86767768666666666666666688677778.
                .8776678666666666666666686776768.
                ..87766866666666666666668766778..
                ..8888886666666666666666866778...
                .86776886666666666666666888888...
                8677776866666666666666668867768..
                87666688666666666666666686777768.
                86777768666666666666666688666678.
                .8677688666666666666666686777768.
                ..88888866666666666666668867768..
                ..8776686666666666666666888888...
                .87766786666666666666666866778...
                8676776866666666666666668766778..
                87777688666666666666666686776768.
                .8866888666666666666666688677778.
                ..88666888888888888888888666888..
                ..8666868676886868867688686668...
                .867786667668676768667686687768..
                .877876877678776778767766678778..
                87767768767787767787767686776778.
                876776887778867676887778.8677678.
                867788.8768..86768..8678..887768.
                8888...888....888....88.....8888.
                .................................
                `)
            game.showLongText("YOU SURVIVED! And you gave wonderfull data. the leader of the CatShip said the data teached us to make new buldings and objects.", DialogLayout.Full)
            game.over(true, effects.starField)
        } else {
            game.showLongText("you didn't send enough data. the leader argued that you only did that to survive and the crew agreed", DialogLayout.Full)
            game.over(false, effects.blizzard)
        }
    }
    info.setLife(5)
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    scene.cameraFollowSprite(Hops_and_Paw)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flower)) {
        value4.destroy()
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 4 4 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . f 2 4 4 4 4 4 2 2 2 f . . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 4 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 4 4 4 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 4 4 4 4 4 f . . . . . 
            . . . f 4 5 5 5 5 4 4 f . . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 5 4 4 4 4 4 4 4 f . . . 
            . . f 4 4 4 4 4 4 4 4 4 f . . . 
            . . . f 4 4 5 5 4 4 4 f . . . . 
            . . . . f 4 4 4 4 4 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 7 7 5 5 f . . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 7 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 7 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 7 f . . . . . . . 
            . . . . . f 7 9 7 f . . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 9 7 7 7 f . . . . . 
            . . . . f 7 7 7 7 7 f . . . . . 
            . . . . . f 7 7 7 f . . . . . . 
            . . . . . . f 7 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 9 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . f 9 9 9 f . . . . . . 
            . . . . . . f 9 f . . . . . . . 
            . . . . . . f 9 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 8 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . f 6 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 8 f . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . . f 8 f . . . . . . . 
            . . . . . . f 8 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . f a 3 a f . . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a 3 a a a f . . . . . 
            . . . . f a a a a a f . . . . . 
            . . . . . f a a a f . . . . . . 
            . . . . . . f a f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . f 3 2 2 3 3 f . . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 2 3 3 3 3 3 f . . . . 
            . . . f 3 3 3 3 3 3 3 f . . . . 
            . . . . f 3 3 2 3 3 f . . . . . 
            . . . . . f 3 3 3 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(flower, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile5`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 2 . . . . . 
            . . 4 . . . . . . . . e . . . . 
            . . . . . 1 . . . 5 . . . 8 . . 
            . . . . . . . . . . . . . . . . 
            . 6 . . 3 a . . a 3 . . . 3 . . 
            . . . . a 3 2 2 3 a . . d . . . 
            . . 7 7 . a 3 3 a . . . . . f . 
            . . 7 7 7 . c c . 7 7 . . 9 . . 
            . 7 . 8 7 7 7 . 7 7 7 . . . . . 
            . . . 8 8 7 7 7 7 8 . . . a . . 
            . . . . . 8 7 7 8 . . . b . . . 
            . c . . . . 7 8 . . . . . . . . 
            `, SpriteKind.Flower)
        tiles.placeOnTile(flower, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`tile11`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            . . . . . . . 5 . . . . . 2 . . 
            . . 3 . 5 5 2 5 5 4 5 5 . . . . 
            . . . . . 4 4 4 4 2 4 . . . . . 
            . . . 5 4 4 2 2 2 2 4 5 . . . . 
            . . . 5 4 . 2 8 2 8 4 2 . . . . 
            . . . 5 5 . 2 8 8 2 4 5 . . . . 
            . . . 2 5 2 2 8 2 4 4 5 . . 4 . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . . 4 . 4 4 5 . . . . . 
            . . . 5 . 5 5 5 4 5 5 . . . . . 
            . . . . . . . 2 5 5 . . . . . . 
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value7)
        tiles.setTileAt(value7, assets.tile`tile0`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire)
    }
}
let fireball: Sprite = null
let flower: Sprite = null
let if_touched_3 = false
let firstTouched = false
let bee: Sprite = null
let if_touched_5 = false
let if_touched_2 = false
let if_touched_4 = false
let Hops_and_Paw: Sprite = null
let current_level = 0
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
    `)
game.showLongText("one day there was a cat on the CatShip. you were an expert explorer but this place was one of the most dangerous place in the world. can you survive and gather information about this place?", DialogLayout.Full)
game.showLongText("controls are: a = left, d = right, spacebar = jump", DialogLayout.Full)
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999f9ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999fffffffffffffffffffffffff1ffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1fffffffffff999999999999999ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999f1ffffffffffff1fffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffff1ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffff
    ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffff999999999999999fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffff1fffffffff99999999999999ffffffffffff1fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9ffffffffffffffffffff999999999999fffffffffffffffffffffffffffffffff
    fffffffffffffffff2222222fffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffff9999999999ffffffffffffffffffffffffffffffffff
    fffffffffffffff2222222fffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff22222222fffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff222222222ffffffffffffffff1fffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff2222222222ffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff1ffffffffff2222222222fffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffff222222222ffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff222222ffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9fffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9ffffffffffffffffffffffffffffffffffffffffff1ffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffffff1ffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1ffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffff1fffffffffffff
    ffffffffffffff1ffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffff1fff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffff55ffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869fffffffffffffffffffffffffffffffffff55fffffffff
    fffffffffffff1ffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9fffffffffffffffffffffffffffffffffff555ffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9f1ffffffffffffffffffffffffffffffff5555ffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffff1ffffff55555ffffffff
    fffffffffffffffffffffffffffffffffff1ffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869fffffffffffffffffffffffffffffffff55555ffffffff
    fffffffffffffffffffffffffffff99fffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869fffffffffffffffffffffffffffffffff55555ffffffff
    ffffffffffffffffffffffffffff999fffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886ffffffffffffffffff1fffffffffffffff55555ffffffff
    fffffffffffffffffffffffffff9999fffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886ffffffffffffffffffffffffffffffffff55555f1ffffff
    fffffffffffffffffffffffffff9999ffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869ffffffffffffffffffffffffffffffffff55555ffffffff
    fffffffffffffffffffff1ffff99999ffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffff5555ffffffff
    ffffffffff1fffffffffffffff99999ffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886fffffffffffffffffffffffffffffffffffff555ffffffff
    ffffffffffffffffffffffffff99999ffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886fffffffffff1ffffffffffffffffffffffffff55ffffffff
    ffffffffffffffffffffffffff99999fffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869fffffffffffffffffffffffffffffffffffffff5ffffffff
    ffffffffffffffffffffffffff99999fffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff99999ff1fffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869ffffffffffffffffffffffffffffff1ffffffffff1fffffff
    fffffffffffffffffffffffff99999fffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffff99ffffffffffffffffffffff
    fffffffffffffffffffffffff99999fffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869fffffffffffffffffffffffff999ffffffffffffffffffffff
    fffffffffffffffffffffffff9999fffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffff99999fffffffffffffffffffff
    fffffffffffffffffffffffffff9fffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffffffffffffffffffffff999999fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6fffffffffffffffffffff1ff9999999999ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffff1fff999999999999ffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffffffff1ffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffff1fffffffffffffffffff9999999999999fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869fffffffffffffffffffffffff9999999999999999fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866ffffffffffffffffffffffffff9999999999999999fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669ffffffffffffffffffffffffff9999999999999999fffffffffffff
    fffffffffff1fffffffffffffffffffffffff1ffffffffffffff96ccc66699669dddd888868888888888888888888888be888669fffffffffffffffffffffffffff9999999999999999fffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffff999999999999999ffffffff1ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffff999999999919999fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1ffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffff999999999999999fffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffff1ffffff99999999999999fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffff9999999999999fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffff9999999999999fffffffffffff
    ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff996999666688881818888888881886669fffffffffffffffffffffff1fffffffffffffffff999999999999fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffff1ffffffff999999999999f1fffffffffff
    fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffff9999999999ffffffffffffff
    fffffff1ffffffffffffffffffffff88888fffffffffffffffffffffff1ffffffff1ff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffff9999999fffffffffffffff
    fffffffffffffffffffffffffffff8888888ffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff8888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff888888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    ffffffffffffffffffffffffffff888888888888ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffff1ffffffff88888888888ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff888888fffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
    fffffffffff1fffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1fffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffff1ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff1fffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff22222222ff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff2222222fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1ffffffff222fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffff1fffffffffffffff1ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff1ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
    fffffffffffffffffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff4444444444ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444ffffffffffffffffffffffffffff1fffffff
    fffffff1ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444444444ffffffffffff1fffffff1ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444444444444ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffff1fffffffffffffffffffffff4444444444444fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff4444444444fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffff1fff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
current_level = 0
Hops_and_Paw = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . c c c c . 
    . . . . . . . . . . . . c 1 4 d d 
    . . . . . . . . . . . . c 4 5 4 d 
    c c c c c c c c c c c c c 1 4 1 d 
    . . . . c c c c c c c c c c c c c 
    . . . . c c c c c c c c c . . . . 
    . . . . c . c . . . c . c . . . . 
    . . . . c . c . . . c . c . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setLife(5)
controller.moveSprite(Hops_and_Paw, 80, 0)
startLevel()
game.onUpdate(function () {
    if (Hops_and_Paw.vy < 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 . . . . 
            . . . . . . . . . . . 4 1 4 . . 
            . . . . . . . . . . . 4 4 5 4 . 
            . . . 4 . . . . . . 4 4 1 4 1 . 
            . . . 4 . . . . . . 4 4 4 4 . . 
            . . 4 4 . . . . . 4 4 4 . . . . 
            . . 4 . . . . . . 4 4 1 4 4 4 4 
            . . 4 . . . . . 4 4 4 4 . . . . 
            . . 4 4 . . . 4 4 4 4 1 4 4 4 . 
            . . . 4 4 4 1 4 4 4 . . . . . . 
            . . . . . . 1 4 1 . . . . . . . 
            . . . . . 4 4 . 4 . . . . . . . 
            . . . . . 4 . . 4 . . . . . . . 
            . . . . . 4 . . . . . . . . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . 4 . . . . . . . . 
            . . . . . . 4 . . . . . . . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . 4 . . . . . . . . . . 
            . . . . . 4 . . . . . . . . . . 
            . . . . . 1 4 . . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . . . 1 4 1 4 4 . . . . . . . 
            . . . . 4 . 4 4 4 4 . . 4 . . . 
            . . . . 4 . 4 4 4 4 4 4 4 1 4 . 
            . . . . 4 . 4 . 4 4 4 4 4 4 5 4 
            . . . . . . . . 1 4 1 4 4 1 4 1 
            . . . . . . . . 4 . 4 . . . . . 
            . . . . . . . . 4 . 4 . . . . . 
            . . . . . . . . 4 . 4 4 . . . . 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . . 4 1 4 . 
            . . . . . . . . . . . . 4 4 5 4 
            4 4 4 4 1 4 4 4 4 4 4 4 4 1 4 1 
            . . . . 4 4 4 4 4 4 4 4 4 4 . . 
            . . . . 1 1 4 4 4 4 4 1 1 . . . 
            . . . . 4 4 . . . . . 4 4 . . . 
            . . . . 4 4 . . . . . 4 4 . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 . . . 
            . . . . . . . . . . . . 4 1 4 . 
            . . . . . . . . . . . . 4 4 5 4 
            4 4 4 4 1 4 4 4 4 4 4 4 4 1 4 1 
            . . . . 4 4 4 4 4 4 4 4 4 4 . . 
            . . . . 1 4 1 4 4 4 1 4 1 . . . 
            . . . . 4 . 4 . . . 4 . 4 . . . 
            . . . . 4 . 4 . . . 4 . 4 . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 4 1 . . 
            . . . . . . . . . . . 4 5 4 . . 
            . . . . . . . . . . . 1 4 1 . . 
            . . . . . . . . . . 4 4 4 4 . . 
            . . . . . . . . . . . . 4 1 4 4 
            . . . . . . . . . . . . 4 4 . . 
            . . . . . . . . . . . . 4 1 4 4 
            . . . . . . . 4 . . . . 4 4 . . 
            . . . . . . . 4 . . . . 4 4 . . 
            . . . . . . . 4 . . . . 4 4 . . 
            . . . . . . . 4 . . . . 4 1 4 4 
            . . . . . . . 4 4 . . . 4 4 . . 
            . . . . . . . . 4 4 4 1 4 1 4 4 
            `)
    } else {
        Hops_and_Paw.ay = 210
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
forever(function () {
	
})
forever(function () {
    music.playMelody("A E B G E G - A ", 300)
    music.playMelody("G F G A B A G A ", 300)
})
