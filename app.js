var vm = new Vue({
    el: "#app",
    data: {
        started: false,
        myHp: 100,
        monsterHp: 100,
        dmgToPlayer: 0,
        dmgToMonster: 0,
        healAmount: 10,
        logs: []
    },
    methods: {
        start() {
            this.logs = [];
            this.myHp = 100;
            this.monsterHp = 100;
            this.started = true;
        },
        attack() {
            this.dmgToPlayer = Math.floor(Math.random() * 20) + 1;
            this.dmgToMonster = Math.floor(Math.random() * 20) + 1;
            this.myHp -= this.dmgToPlayer;
            this.monsterHp -= this.dmgToMonster;
            let log = {
                me: this.dmgToPlayer,
                monster: this.dmgToMonster
            }
            this.logs.push(log);
            this.checkHp();
        },
        specialAttack(){
            this.dmgToPlayer = Math.floor(Math.random() * 40) + 1;
            this.dmgToMonster = Math.floor(Math.random() * 40) + 1;
            this.myHp -= this.dmgToPlayer;
            this.monsterHp -= this.dmgToMonster;
            let log = {
                me: this.dmgToPlayer,
                monster: this.dmgToMonster
            }
            this.logs.push(log);
            this.checkHp();
        },
        heal() {
            this.dmgToPlayer = Math.floor(Math.random() * 20) + 1;
            this.dmgToMonster = 0;
            this.myHp += this.healAmount;
            this.myHp -= this.dmgToPlayer;
            let log = {
                meHeal: this.healAmount,
                me: this.dmgToPlayer,
                monster: false
            }
            this.logs.push(log)
            this.checkHp();
        },
        giveUp() {
            this.started = false;
            this.myHp = 100;
            this.monsterHp = 100;
            this.logs = [];
        },
        checkHp(){
            if(this.myHp <= 0 ) {
                if(window.confirm('You have lost! Wanna play Again?')) {
                    this.start();
                } else {
                    this.giveUp()
                };
            } else if (this.myHp > 100 ){
                this.myHp = 100;
            }
            if( this.monsterHp <= 0 ) {
                if(window.confirm('Congrats, pal, you have won! Wanna play Again?')) {
                    this.start();
                } else {
                    this.giveUp();
                };
            } else if (this.myHp > 100 ){
                this.monsterHp = 100;
            }
        }
    },
    computed: {
        getMyHP: function() {
            return {
                width: this.myHp + '%'
            }
        },
        getMonsterHP: function() {
            return {
                width: this.monsterHp + '%'
            }
        }
    }
})