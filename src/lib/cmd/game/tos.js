import CommandExecutor from '../CommandExecutor'

class ToS extends CommandExecutor {
  checkQueue (msg) {
    if (this.queue.includes(msg.author.id)) {
      if (this.checkExp(msg)) {
        // 동의한거임 데이터베이스에 넣어주고 성공메세지 띄워주자

        return true
      } else {
        // 거절한거임 거절했다고 메세지 보내주자
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
    if ('동의|agree|약관동의|tosagree|agreetos'.split('|').includes(msg.content.trim().toLowerCas())) {
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
