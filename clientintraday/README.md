

 i want to make a angular project with api data.
 it should have the following table of content :-
table of  contents:
SYMBOL:-ALKYLAMINE (O=L) 
LTP:-1981.8 15.1 (0.77 %)
Momentum:-538 530
OPEN:-1965 
Deviation from Pivots:-PP R1
TODAYS RANGE:-1965 2013.45 
OHL:- Open=Low

 this data give in intraday api https://intradayscreener.com/api/openhighlow/cash.
 {
        "symbol": "ALKYLAMINE",
        "ltp": 1981.8,
        "open": 1965,
        "high": 2013.45,
        "low": 1965,
        "close": 0,
        "change": 15.1,
        "pctChange": 0.77,
        "openHighLowSignal": "Open=Low",
        "allScans": {
            "symbol": "ALKYLAMINE",
            "intradayScans": [
                {
                    "symbol": "ALKYLAMINE",
                    "timeframe": "ohl",
                    "scanName": "Open=Low",
                    "scanFullName": null,
                    "scanShortcode": "O=L",
                    "isBoBd": "BO",
                    "level": 2013.45,
                    "time": null
                }
            ],
            "eodScans": null
        },
        "volumePctChange": 0,
        "oiPctChange": 0,
        "stockOutperformanceRank": 530,
        "stockMomentumRank": 538,
        "negativeSectorMomentumFlag": null,
        "sectorMomentumRank": 0,
        "sectorTodayRank": 0,
        "negativeMomentumFlag": false,
        "positiveFnoMomentumRank": 0,
        "negativeFnoMomentumRank": 0,
        "negativeMomentumRank": 0,
        "positiveMomentumRank": 0,
        "nifty": false,
        "fno": false,
        "nifty500": false,
        "prb": false,
        "banknifty": false
    },



give me code in step by step manner .dont give all code at once.note i use angular 17 ,it include standalone :true


