angular.module("sah", [{
        name: "webService",
        files: ["js/service.js",]
    },
        {
            name: "ui.select",
            files: ["bower_components/angular-ui-select/dist/select.css", "bower_components/angular-ui-select/dist/select.js"]
        },
        {
            name: "slick",
            files: ["bower_components/angular-slick/dist/slick.js"]
        }]
)
    .controller("SahCtrl", function ($scope, service, inform) {
        console.log(service);
        var store = this;

        store.reportLevels = service.getReportLevels();
        store.regionList = service.regionList();
        store.marketList = service.marketList();
        store.timeZone = service.timeZone();
        store.mmePools = service.getAllMmePools();
        store.cellGroups = service.cgList();
        store.mmeSgwPgws = [];
        store.eNodeBs = [];
        store.hours = service.getHours();
        store.EUTranCells = service.getEUTrancellList();
        store.carriers = service.getCarrierList();
        store.reportContents = service.getContent();

        $scope.model = {

        };
        $scope.model.userInfo = service.userInfo();

        $scope.refresh = function () {
            console.log($scope.model);
        };

        $scope.init = function () {
            $scope.model.region = [store.regionList[0]];
            console.log($scope.model);
        };

        $scope.updateCarrier = function() {
            console.log($scope.model.carrier);

        }

        $scope.getMmeSgwPgw = function () {
            console.log("here...");
            store.mmeSgwPgws = service.mmeSgwPgwList();
        };

        $scope.getEnodeB = function () {
            service.getEnodeByUser('xx').then(function (result) {
                store.eNodeBs = result.data;
                //setTimeout(function(){ store.eNodeBs = result.data }, 3000);
            });
        };

        $scope.setSlidePosition = function (pos) {
            $(".slider").slickGoTo(pos);
        };

        // todo: create a directive
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {

            $(".slider")
                .slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 5,
                    width: '250px',
                    height: '250px',
                    autoplay: false,
                    autplaySpeed: 2000
                });
        });

        $scope.submitForm = function () {
            inform.add("Report request has been submitted!", {
                "ttl": 4993,
                "type": "primary",
                "html": true
            });
        }
    });
	
	
