import CommandExecutor from '../CommandExecutor'
import DB from '../../db/Database'
import { error } from 'korean-logger'

class ToS extends CommandExecutor {
  checkQueue (msg) {
    if (this.queue.includes(msg.author.id)) {
      if (this.checkExp(msg)) {
        const vals = [msg.author.id]

        const presql = `SELECT * FROM user WHERE id=?`
        const sql = `INSERT INTO user VALUES (?, '{}', 0)`

        const sess = new DB()

        sess.query(presql, vals)
        .then(rows => {
          if(rows.length > 0) {
            // 중복 id 감지됨

            this.queue.forEach((q, i) => {
              if(q === msg.author.id) {
                this.queue.splice(i, 1)
              }
            })

            msg.reply('이미 동의한 계정입니다.')
            return
          }

          sess.query(sql, vals).then(rows => {
            msg.reply('정상적으로 처리되었습니다.')

            return sess.close()
          }, err => {
            msg.reply('오류가 발생했습니다 Starlight#7528로 문의 바랍니다.')


            return sess.close().then(() => {
              throw err
            })
          })
        }, err => {
          msg.reply('오류가 발생했습니다 Starlight#7528로 문의 바랍니다.')


          return sess.close().then(() => {
            throw err
          })
        }).catch(err => {
          error(err.stack)
        })

        return true
      } else {
        // 거절한거임 거절했다고 메세지 보내주자
        this.queue.forEach((q, i) => {
          if(q === msg.author.id) {
            this.queue.splice(i, 1)
          }
        })

        msg.reply('약관에 거부하셨습니다. 봇의 모든 기능을 정상적으로 이용하실 수 없습니다.')

        return true
      }
    } else {
      if (this.checkExp(msg)) {
        // 약관 읽지도 않고 동의부터 한거임 싸우자
        return false
      } else {
        // 그냥 헛수고 한거임
        return false
      }
    }
  }

  checkExp(msg) {
    if ('동의|agree|약관동의|tosagree|agreetos'.split('|').includes(msg.content.trim().toLowerCase())) {
      return true
    } else {
      return false
    }
  }

  run (bot, msg, args) {
    msg.channel.send(this.tos)

    this.queue.push(msg.author.id)
  }

  constructor () {
    super()

    this.queue = []
    this.tos = `
에스터로이드 이용약관

본 약관에 동의하지 않으면 봇을 정상적으로 이용하실 수 없습니다.
약관에 동의하시려면 \`동의\`를 동의하지 않으시려면 아무 글이나 써 주시면 됩니다.

  1. 본 봇을 이용하는 모든 유저는 이 약관에 동의했다고 간주한다.
  2. 게임 데이터 처리를 위해 사용자의 디스코드 id 를 수집하며 제 3자에게 공개하지 않는다.
  3. 유저가 탈퇴를 요청할시 관리자는 데이터를 완전 삭제한다.
  4. 이 봇을 이용한 사기 등의 행위는 관리자에 의해 계정이 삭제되거나 차단될 수 있다.

최초 작성일 [2019.09.29]
마지막 수정일 [2019.09.29]
    `
    this.cmd = 'tos'
    this.aliases = ['이용약관', '약관', '조약', '늑약', '체결']
    this.description = '이용약관을 보여줍니다.'
    this.category = 'game'
  }
}

export default ToS
