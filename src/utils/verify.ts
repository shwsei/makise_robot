//Gambiarra a frente, cuidado
export default function (messageData: any) {
  if (messageData.animation) {
    return messageData.animation.thumb.file_id;
  }

  if (messageData.photo) {
    return messageData.photo[1].file_id;
  }

  if (messageData.sticker) {
    return messageData.sticker.thumb.fie_id;
  }

  if (messageData.video) {
    return messageData.video.thumb.file_id
  }

}
