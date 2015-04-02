angular.module('webService', [])
	.factory('service', function($http) {
     
		var factory = {}; 
		
		factory.getUserReportsPerRegion = function() {
                   return $http.get('static/report.json', { cache: true }).then(function(result) {
                       return result;
                   });
        },
		
		factory.getReportsByUser = function(userid) {
			var url = 'static/user_report.json';
			if (userid != "Alimoh5") {
				url = 'static/user_report1.json';
			}
				
			return $http.get(url, { cache: true }).then(function(result) {
			   return result;
			});
        }
		
		factory.getEnodeByUser = function(userid) {
			var url = 'static/enodeb.json';

			return $http.get(url, { cache: true }).then(function(result) {
			   return result;
			});
        }

		
		factory.getAllMmePools = function() {
			return  [{value:"15", text: "Central Texas[64132]"},
					{value:"13", text: "Houston/Gulf Coast[64120]"},
					{value:"6", text: "Mountain[64010]"},
					{value:"18", text: "New England[64056]"},
					{value:"2", text: "New York Metro[64078]"},
					{value:"10", text: "Ohio/Pennsylvania[64240]"},
					{value:"12", text: "Philadelphia Tri-State[64096]"},
					{value:"9", text: "South Central[64180]"},
					{value:"1", text: "Southwest[64020]"},
					{value:"25", text: "Upstate New York[64070]"},
					{value:"3", text: "Washington/Baltimore/Virginia[64106]"}];

		}
		
		factory.getStatus = function() {
				return ["Complete", "Failed", "Running"];
			}
			
		factory.getReportLevels = function() {
				return ["MME Pool", "MME", "MME Service", "MME Service Member", "MME Cabinet", "MME Shelf"];
			}
	 
		factory.regionList = function() {
				return ["S. California"];
			}
	 
		factory.marketList = function() {
				return ["AK Alaska", "CA Bakersfield", "CA Central LA", "CA Downtown LA Newhall"]
		}
		
		factory.cgList = function() {
				return ["pleasanton_test", "sf_test", "tampa_hq_dum_700_tampa"]
		}
			
		factory.mmeSgwPgwList = function() {
			return ["MMEAZUSCA21MME_L_EC_01", "MMEAZUSCA21MME_L_EC_02", "MMEONTRCAOYMME_L_EC_01", "MMEONTRCAOYMME_L_EC_02", "MMEVISTCA65MME_L_EC_01", "SGWAZUSCA2191A_L_EC_SGWp_02", "SGWAZUSCA2191A_L_EC_SGWp_03", "SGWAZUSCA2191A_L_EC_SGWp_11", "SGWAZUSCA2191A_L_EC_SGWs_01", "SGWAZUSCA2191A_L_EC_SGWs_05", "SGWAZUSCA2191A_L_EC_SGWs_12", "SGWLSAOCAGX91A_L_EC_SGWp_01", "SGWLSAOCAGX91A_L_EC_SGWs_02", "SGWONTRCAOY91A_L_EC_SGWp_04", "SGWONTRCAOY91A_L_EC_SGWs_05", "SGWONTRCAOY91A_L_EC_SGWx_01", "SGWVISTCA6591A_L_EC_SGWp_05", "SGWVISTCA6591A_L_EC_SGWp_12", "SGWVISTCA6591A_L_EC_SGWs_03", "SGWVISTCA6591A_L_EC_SGWs_04", "SGWVISTCA6591A_L_EC_SGWs_11", "SGWVISTCA6591A_L_EC_SGWx_01", "SGWVISTCA6591A_L_EC_SGWx_02", "PGWAZUSCA21PNC_L_CI_PGW_00", "PGWAZUSCA21PNC_PGW", "PGWAZUSCA21PND_L_CI_PGW_00", "PGWAZUSCA21PNR_DXGW", "PGWAZUSCA21PNR_L_CI_DXGW_00", "PGWAZUSCA21PNS_L_CI_DXGW_00", "PGWLSAOCAGXPND_PGW", "PGWLSAOCAGXPNS_XGW", "PGWONTRCAOYPNC_PGW", "PGWONTRCAOYPND_PGW", "PGWONTRCAOYPND_PGW_ICSR", "PGWONTRCAOYPNR_DXGW", "PGWVISTCA65PNC_L_CI_PGW_00", "PGWVISTCA65PND_L_CI_PGW_00", "PGWVISTCA65PND_PGW", "PGWVISTCA65PNR_L_CI_DXGW_00", "PGWVISTCA65PNS_ICSR", "PGWVISTCA65PNS_L_CI_DXGW_00"]
		}
		
		factory.getEnodeB = function() {
			 return $http.get('http://alpt.vh.eng.vzwcorp.com:8181/elte/getElementList.htm?userName=11&type=enodeb&subType=markets&sortBy=', { cache: true }).then(function(result) {
                       return result;
                   });
		}
			
		factory.timeZone = function() {
				return ["Hawaiian", "Alaskan", "Pacific", "Mountain", "Central", "Eastern"]
			}
			
		factory.userInfo = function() {
				return {"firstName": "Jayson",
						"lastName": "Gundayao",
						"mobileNumber": "9255961383",
						"maxNo": "5",
						"currentDiskUsage": "0",
						"maxDiskUsage": "100",
						"purgeLimit": "20",						
						"accessLevel": "USER",
						"status": "Active",
						"emailAddress": "Jayson.Gundayao@vzw.com",
						"regionId" : "Central Texas",
						"marketId":"TX Austin"
						}
			}
			
		factory.getListOfNews = function() {
			return [{"area":160,"areaName":"Alaska","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":5,"areaName":"Carolinas/Tennessee","class":"bus.home.NewsModel","highlightFlag":"Y","news":[]},{"area":4,"areaName":"Florida","class":"bus.home.NewsModel","highlightFlag":"Y","news":["Test.","Test"]},{"area":6,"areaName":"Georgia/Alabama","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":7,"areaName":"Great Plains","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":8,"areaName":"Illinois/Wisconsin","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":21,"areaName":"Kansas/Missouri","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":9,"areaName":"Michigan/Indiana/Kentucky","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":44,"areaName":"MidWest IL/WI LRA","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":2,"areaName":"N. California","class":"bus.home.NewsModel","highlightFlag":"N","news":["This is line1.","This is line2.","This is line3."]},{"area":1,"areaName":"Pacific Northwest","class":"bus.home.NewsModel","highlightFlag":"N","news":["This is line1.","This is line2.","This is line3."]},{"area":3,"areaName":"S. California","class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":42,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":[]},{"area":-9999,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":["Irisview exports are delayed by 4 hours to maintain data integrity and are imported at the ENB level. Irisview pegs can only be reported at the ENB level or higher."]},{"area":61,"areaName":null,"class":"bus.home.NewsModel","highlightFlag":"N","news":[]}]
		}
		
		// Returns report types for scan trend
		factory.getScanTrendTypes = function() {
			return ["Enodeb Perf", "UL Noise Heat Map", "RSSI_Delta"];
		}

		factory.getEUTrancellList = function() {
			return [1, 2, 3, 4, 5, 6]
		}

		factory.getCarrierList = function() {
			return [1, 2, 3, 4]
		}

		factory.getHours = function() {
			return ['All', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', 23 ];
		}

		factory.getContent = function() {
			return ["HQ LTE KPIs", "HQ eNodeB KPIs", "HQ MME KPIs", "HQ SGW KPIs", "eNodeB VoLTE FOA KPIs", "eNodeB Irisview VoLTE QOS", "eNodeB Irisview VoLTE SIP", "eNodeB Venue Performance", "eNodeB Perf", "eNodeB Engineering Detail", "EuTranCell Engineering Detail", "eNodeB CQI Perf", "eNodeB_Mobility_Report", "eNodeB_Integrity_Report", "eNodeB Retainability Report", "eNodeB Accessibility Perf", "eNodeB VSWR Report", "eNodeB Capacity Licenses ConnUsers", "eNodeB Capacity Planning Report", "eNodeB Geographic Info", "eNodeB Handover Perf", "eNodeB Handover Perf by Neighbor", "eNodeB PUSCH Interference Report", "eNodeB PUCCH Interference Report", "eNodeB Total Rec Interference Report", "eNodeB Radio Interfernce by PRB", "eNodeB IP Protocol Layer Perf", "enodeB Ethernetlink Performance", "eNodeB Backhaul Tranport KPIs", "eNodeB Transport Detail", "eNodeB Configuration Parameters", "EuTranCell Configuration Parameters", "eNodeB Power Supply Parameters", "eNodeB Carrier Aggregation Perf", "Irisview VoLTE Handset SIP", "MME KPIs", "MME Adaptive Paging Report", "MME Security/Auth Report", "MME_Subscriber_Capacity", "MME System Resource by Slot", "MME IP Interface Report", "MME Ethernet Port Report", "MME Network Interface Report", "MME BGP PEER IP Report", "MME SCT CPU Util", "MME AP CPU Util", "MME NCB CPU Util", "MME SCXB CPU Util", "SGW BHCA KPIs", "SGW KPIs", "SGW ASE2 Card Stats", "SGW PPA Card Stats", "EPG SSR SGW CPU Board Stats", "SGW Port Level Stats", "Cisco PGW Handover Report", "Cisco PGW CPU Memory by Slot", "Cisco PGW Port Level Stats", "Cisco PGW Bearers by APN Report", "Cisco PGW per QCI by APN Report", "Cisco PGW Bearers Report", "Cisco PGW Tput KPIs by APN Report", "Cisco PGW Sessions Report", "Cisco PGW QCI Report", "Cisco SGW KPI Report"];
		}

		return factory;
	})
	
	.directive('myDomDirective', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    }
})



