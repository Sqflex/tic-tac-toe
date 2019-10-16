class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null], [null, null, null], [null, null, null]];
        this.player_move = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.player_move;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.matrix[rowIndex][columnIndex]){
            this.matrix[rowIndex][columnIndex] = this.player_move;
            if(this.player_move === 'x'){
                this.player_move = 'o';
            }
            else{
                this.player_move = 'x';
            }
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true;
        }
        else{
            return false;
        }
    }

    getWinner() {
        let winner = null;
            for(var i = 0; i < this.matrix.length; i++){
                if(this.matrix[i][0]==this.matrix[i][1] && this.matrix[i][1] == this.matrix[i][2]){
                    winner = this.matrix[i][0];
                }
            }
            for (let j = 0; j < this.matrix.length; j++) {
                if (this.matrix[0][j] === this.matrix[1][j] && this.matrix[1][j] === this.matrix[2][j]) {
                    winner = this.matrix[0][j];
                }
            }
            if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
                winner = this.matrix[0][0];
            }
            if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
                winner = this.matrix[0][2];
            }
            return winner;
        }

    noMoreTurns() {
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.matrix.length; j++){
                if(this.matrix[i][j] === null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(!this.matrix[rowIndex][colIndex]){
            return null;
        }
        else{
            return this.matrix[rowIndex][colIndex];
        }
    }
}

module.exports = TicTacToe;
