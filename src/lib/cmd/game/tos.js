import CommandExecutor from '../CommandExecutor'
import { RichEmbed } from 'discord.js'

class ToS extends CommandExecutor {
  run (bot, msg, args) {
    msg.channel.send(this.tos)
  }

  constructor () {
    super()

    this.queue = []
    this.tos = `
에스터로이드 이용약관

본 약관에 동의하지 않으면 봇을 정상적으로 이용하실 수 없습니다.

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
