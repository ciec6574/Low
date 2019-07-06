// League of Wings/GameData/GameData.js
const app = getApp()

Page({
  data: {
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
        WT: '7',
        LT: '0',
        score: '7',
      },
      {
        NO: '2',
        name: 'RNG',
        url: '/image/teamimg/RNG.png',
        WT: '5',
        LT: '1',
        score: '5',
      },
      {
        NO: '3',
        name: 'TES',
        url: '/image/teamimg/TES.png',
        WT: '5',
        LT: '1',
        score: '5',
      },
      {
        NO: '4',
        name: 'LNG',
        url: '/image/teamimg/LNG.png',
        WT: '5',
        LT: '1',
        score: '5',
      },
      {
        NO: '5',
        name: 'SN',
        url: '/image/teamimg/SN.png',
        WT: '4',
        LT: '3',
        score: '4',
      },
      {
        NO: '6',
        name: 'EDG',
        url: '/image/teamimg/EDG.png',
        WT: '4',
        LT: '3',
        score: '4',
      },
      {
        NO: '7',
        name: 'IG',
        url: '/image/teamimg/IG.png',
        WT: '4',
        LT: '3',
        score: '4',
      },
      {
        NO: '8',
        name: 'BLG',
        url: '/image/teamimg/BLG.png',
        WT: '4',
        LT: '3',
        score: '4',
      },
      {
        NO: '9',
        name: 'JDG',
        url: '/image/teamimg/JDG.png',
        WT: '3',
        LT: '3',
        score: '3',
      },
      {
        NO: '10',
        name: 'V5',
        url: '/image/teamimg/V5.png',
        WT: '3',
        LT: '3',
        score: '3',
      },
      {
        NO: '11',
        name: 'OMG',
        url: '/image/teamimg/OMG.png',
        WT: '2',
        LT: '4',
        score: '2',
      },
      {
        NO: '12',
        name: 'RW',
        url: '/image/teamimg/RW.png',
        WT: '2',
        LT: '4',
        score: '2',
      },
      {
        NO: '13',
        name: 'LGD',
        url: '/image/teamimg/LGD.png',
        WT: '2',
        LT: '4',
        score: '2',
      },
      {
        NO: '14',
        name: 'DMO',
        url: '/image/teamimg/DMO.png',
        WT: '1',
        LT: '5',
        score: '1',
      },
      {
        NO: '15',
        name: 'WE',
        url: '/image/teamimg/WE.png',
        WT: '1',
        LT: '6',
        score: '1',
      },
      {
        NO: '16',
        name: 'VG',
        url: '/image/teamimg/VG.png',
        WT: '0',
        LT: '6',
        score: '0',
      },
      
    ],
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,  
    
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },  
  swichNav: function (e) {

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
