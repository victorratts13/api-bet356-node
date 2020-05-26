// 'use strict'
// const axios = require('axios').default;

// const api = axios.create({
//     headers: {
//         'Accept': '*/*',
//         'X-Requested-With': 'XMLHttpRequest',
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
//         'Cache-Control': 'no-cache',
//         'Connection': 'keep-alive',
//         'Content-Length': 178,
//         'Content-type': 'application/x-www-form-urlencoded',
//         //'Cookie': 'aps03=lng=33&tzi=16&ct=28&cst=0&cg=1; usdi=uqid=3E3B841B-0B4C-4467-B8B4-088B7A2D4821; platform=1; aaat=di=d3c8b3df-004d-4aae-bf9c-160db12475fb&un=ratts13&ts=08-05-2020 06:35:04&v=2&am=0&at=cfd9b478-34dc-449b-9dc6-a64122edadc9; session=processform=0; __RequestVerificationToken_L21lbWJlcnMvc2VydmljZXMvTm90aWZpY2F0aW9ucw2=1pDvMXqni2-jBxefBp4n1TyfphTSh02wkS2_9X_nzEDBD9ypgBqAaV84ke9LvxbELIseazEAp7W9X-kKZGoCAw42uOI1; pstk=B6FA1D473E474D3B8ECE443FA5105659000003',
//         'Host': 'members.bet365.com',
//         'Origin': 'https://www.bet365.com',
//         'Pragma': 'no-cache',
//         'Referer': 'https://www.bet365.com/',
//         'Sec-Fetch-Dest': 'empty',
//         'Sec-Fetch-Mode': 'cors',
//         'Sec-Fetch-Site': 'same-site',
//         'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
//     },
//     baseURL: 'https://mobile.bet365.com/'

// })

// class inPlays {
//     async in() {
//         return new Promise((resolve, reject) => {
//             api.get('inplaydiaryapi/schedule?timezone=16&lid=33&zid=0').then((inPlay) => {
//                 let data = inPlay.data;
//                 data = data.split('EV')
//                 let x, format = {}, setArray = [], inPlayNg, CL, CI, NA, SM, CB, C1, C2, C3, T1, T2, T3;
//                 for (x = 0; x < data.length; x++) {
//                     let go = data[x].indexOf('Futebol', 'Ao-Vivo')
//                     if (go == 4) {
//                         inPlayNg = data[x];
//                         let aCL = inPlayNg.indexOf('CL'), aCI = inPlayNg.indexOf('CI')

//                         CL = inPlayNg.substring(aCL + 3, aCI - 1)

//                         format = {
//                             CL: CL
//                         }


//                         return resolve(format);
//                     }
//                 }
//             }).catch((err) => {
//                 return reject(err)
//             })
//         })
//     }
// }

// module.exports = inPlays;

'use strict'

const axios = require('axios');

let api = axios.create({
    headers: {
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': 178,
        'Content-type': 'application/x-www-form-urlencoded',
        'Host': 'members.bet365.com',
        'Origin': 'https://www.bet365.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.bet365.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    },
    baseURL: 'https://mobile.bet365.com/'
})

let x, setArray = [], format = {};

class inPlays {
    on() {
        return new Promise((resolve, reject) => {
            api.get('inplaydiaryapi/schedule?timezone=16&lid=33&zid=0').then((inPlay) => {
                let data = inPlay.data;
                data = data.split('EV')
                for (x = 0; x < data.length; x++) {
                    let go = data[x].indexOf('Futebol', 'Ao-Vivo')
                    if (go == 4) {
                        let twixCL = data[x].indexOf('CL')
                        let twixCI = data[x].indexOf('CI')
                        let twixNA = data[x].indexOf('NA')
                        let twixVI = data[x].indexOf('VI')
                        let twixSM = data[x].indexOf('SM')
                        let twixCN = data[x].indexOf('CN')
                        let twixCB = data[x].indexOf('CB')
                        let twixC1 = data[x].indexOf('C1')
                        let twixC2 = data[x].indexOf('C2')
                        let twixC3 = data[x].indexOf('C3')
                        let twixT1 = data[x].indexOf('T1')
                        let twixT2 = data[x].indexOf('T2')
                        let twixT3 = data[x].indexOf('T3')
                        let twixCR = data[x].indexOf('CR')

                        let CL = data[x].substring(twixCL + 3, twixCI - 1)
                        let CI = data[x].substring(twixCI + 3, twixNA - 1)
                        let NA = data[x].substring(twixNA + 3, twixVI - 1)
                        let SM = data[x].substring(twixSM + 3, twixCN - 1)
                        let CB = data[x].substring(twixCB + 3, twixC1 - 1)
                        let C1 = data[x].substring(twixC1 + 3, twixC2 - 1)
                        let C2 = data[x].substring(twixC2 + 3, twixC3 - 1)
                        let C3 = data[x].substring(twixC3 + 3, twixT1 - 1)
                        let T1 = data[x].substring(twixT1 + 3, twixT2 - 1)
                        let T2 = data[x].substring(twixT2 + 3, twixT3 - 1)
                        let T3 = data[x].substring(twixT3 + 3, twixCR - 1)

                        format = {
                            CL: CL,
                            CI: CI,
                            NA: NA,
                            SM: SM,
                            CB: CB,
                            C1: C1,
                            C2: C2,
                            C3: C3,
                            T1: T1,
                            T2: T2,
                            T3: T3,
                        }

                        setArray.push(format)
                    }
                    resolve(setArray);
                }
            }).catch((err) => {
                reject('Err: ' + err)
            })
        })
    }
}

module.exports = inPlays;

// new inPlays().on().then((rest) => {
//     console.log(rest)
// }).catch((err) => {
//     console.log('Err: ' + err)
// })