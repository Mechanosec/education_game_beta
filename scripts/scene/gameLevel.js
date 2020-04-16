export default class GameLevel extends Phaser.Scene {
    constructor(type) {
        super(type);
        // this.mainObjects = [];
        this.loopHandler();
    }

    loopHandler() {

        $(() => {
            $('#run_script').click(() => {
                let cmd = $('#game_commands').val();
                // this.mainObjects.forEach(function (word) {
                    cmd = cmd.replace('this.', 'this.' + word);
                // });
                eval(cmd);
            });
        });
    }
}