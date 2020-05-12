jest.mock('expo', () => {
    return {
      Notifications: jest.fn(() => ({
        cancelScheduledNotificationAsync: jest.fn(),
        scheduleLocalNotificationAsync: jest.fn(),
      })),
    }
})

jest.mock('./data/SQLite', () => {
  return {
    updateFavoriteOrRemind: jest.fn(),
    getTaggedWord: jest.fn(()=> [
      {
        picture:'https://icdn.dantri.com.vn/thumb_w/640/2018/10/23/nhap-truong-10-15402675676881839197893.jpg',
        eng:'School',
        vie:'Trường học',
        category: 'Education',
        favorite: 0,
        remind: 0,
        pronounce:'sko͞ol',
        type:'[noun]',
        example:'My school is near my home.'
      },
      {
        picture:'https://cdn.mos.cms.futurecdn.net/xYiTisbsp2HZPVupAZoNYQ-320-80.jpg',
        eng:'Math',
        vie:'Môn toán',
        category: 'Education',
        favorite: 0,
        remind: 0,
        pronounce:'maTH',
        type:'[noun]',
        example:'My favorite subject is math.'
      }
    ]),
    getNotificationID: jest.fn(),
    setNotificationID: jest.fn(),
  }
})