// League of Wings/GameData/GameData.js
const app = getApp()

Page({
  data: {
    season: 'LPL2019',
    itemname: '战队',
    grouptitle: [
      {
        name: '胜',
        width: '75rpx'
      },
      {
        name: '负',
        width: '75rpx'
      },
      {
        name: '积分',
        width: '50rpx'
      },
    ],
    NOlist: [
      { NO: '1' }, { NO: '2' }, { NO: '3' }, { NO: '4' }, { NO: '5' }, { NO: '6' }, { NO: '7' }, { NO: '8' }, { NO: '9' }, { NO: '10' }, { NO: '11' }, { NO: '12' }, { NO: '13' }, { NO: '14' }, { NO: '15' }, { NO: '16' }
    ],
    grouplist: [
      {
        NO: '1',
        name: 'FPX',
        url: '/image/teamimg/FPX.png',
        WT: '1',
        LT: '0',
        score: '0',
      },
      {
        NO: '2',
        name: 'LNG',
        url: '/image/teamimg/LNG.png',
        WT: '1',
        LT: '0',
        score: '0',
      },
      {
        NO: '3',
        name: 'TES',
        url: '/image/teamimg/TES.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '4',
        name: 'RNG',
        url: '/image/teamimg/RNG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '5',
        name: 'SN',
        url: '/image/teamimg/SN.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '6',
        name: 'IG',
        url: '/image/teamimg/IG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '7',
        name: 'EDG',
        url: '/image/teamimg/EDG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '8',
        name: 'V5',
        url: '/image/teamimg/V5.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '9',
        name: 'BLG',
        url: '/image/teamimg/BLG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '10',
        name: 'JDG',
        url: '/image/teamimg/JDG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '11',
        name: 'OMG',
        url: '/image/teamimg/OMG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '12',
        name: 'LGD',
        url: '/image/teamimg/LGD.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '13',
        name: 'RW',
        url: '/image/teamimg/RW.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '14',
        name: 'WE',
        url: '/image/teamimg/WE.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '15',
        name: 'DMO',
        url: '/image/teamimg/DMO.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      {
        NO: '16',
        name: 'VG',
        url: '/image/teamimg/VG.png',
        WT: '0',
        LT: '0',
        score: '0',
      },
      
    ],
    
  }
,swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })  
  }
}  
})  
