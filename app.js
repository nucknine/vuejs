var vm = new Vue({
    el: "#app",
    data: {
        started: false,
        myHp: 100,
        monsterHp: 100,
        dmgToPlayer: 0,
        dmgToMonster: 0,
        logs: []
    },
    methods: {
        start() {
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
            this.logs.push(log)
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
            this.logs.push(log)
        },
        heal() {
            this.dmgToPlayer = Math.floor(Math.random() * 20) + 1;
            this.dmgToMonster = Math.floor(Math.random() * 20) + 1;
            this.myHp += this.dmgToPlayer;
            this.myHp -= this.dmgToMonster;
            let log = {
                me: this.dmgToPlayer,
                monster: this.dmgToMonster
            }
            this.logs.push(log)
        },
        giveUp() {
            this.started = false;
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