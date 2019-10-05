import CommandExecutor from '../CommandExecutor'
import Database from '../../db/Database'

class Black extends CommandExecutor {
  run (bot, msg, args) {
    const checkBlacked = `SELECT * FROM black WHERE id=?`

    const db = new Database()

    db.query(db, [msg.author.id])
      .then(rows => {
        if(rows.length > 0) {
          // 유저가 이미 블랙먹음 언밴 하자
        } else {
          // 나쁜놈이다 밴먹이자
        }
      })
  }

  constructor () {
    super()

    this.cmd = 'black'
    this.aliases = ['블랙', '블랙리스트', '박근혜', '문화계블랙리스트', '검은리스트']
    this.description = '해당 유저의 이용을 정지시킵니다.'
    this.category = 'game'
  }
}

export default Black
