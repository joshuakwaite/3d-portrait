var app = angular.module("3dportraitApp");

app.controller("productController", ["$scope", "$location", function ($scope, $location) {


    // var feed = new Instafeed({
    //     get: 'user',
    //     userId: 4794233868,
    //     accessToken:  '4794233868.911d299.3d42fceb8414437a8e3d6f098b6d163a',
    //     resolution: 'standard_resolution',
    //     limit: 8
    // });
    //
    // feed.run();

    $scope.calculatePrice = function (feet, inches, scale) {

        if (scale === 16) {
            scale = 1/16
        } else if (scale === 14) {
            scale = 1/14
        } else if (scale === 13) {
            scale = 1/13
        } else if (scale === 12) {
            scale = 1/12
        } else if (scale === 10) {
            scale = 1/10
        } else if (scale === 9) {
            scale = 1/9
        } else if (scale === 8) {
            scale = 1/8
        } else if (scale === 7) {
            scale = 1/7
        } else if (scale === 6) {
            scale = 1/6
        } else if (scale === 5) {
            scale = 1/5
        } else if (scale === 4) {
            scale = 1/4
        } else if (scale === 3) {
            scale = 1/3
        }

        if (feet > 0) {

        var feetInInches = (feet * 12);

        inches = feetInInches + inches;
        }

        $scope.price = calculate(inches, scale)
    };

    var calculate = function (inches, scale) {
        var printHeight = (scale)*(inches);

        $scope.size = printHeight;

        if (printHeight < 3.49999) {
            return 59.95
        } else if (printHeight < 4.499999) {
            return 69.95
        } else if (printHeight < 5.499999) {
            return 79.95
        } else if (printHeight < 6.499999) {
            return 89.95
        } else if (printHeight < 7.499999) {
            return 114.95
        } else if (printHeight < 8.499999) {
            return 134.95
        } else if (printHeight < 9.499999) {
            return 159.95
        } else if (printHeight < 10.499999) {
            return 179.95
        } else if (printHeight < 11.499999) {
            return 199.95
        } else if (printHeight > 11.499999) {
            return "Please contact us for prices on an item this large"
        }

    };


    $scope.priceList = [
        // {
        //     Size: 2,
        //     Price: 54.95,
        //     Additional: 34.95,
        //     Under: 0
        // },
        // {
        //     Size: 3,
        //     Price: 64.95,
        //     Additional: 44.95,
        //     Under: 0
        // },
        {
            Size: 4,
            Price: 74.95,
            Additional: 54.95,
            Under: 37.95
        },
        // {
        //     Size: 5,
        //     Price: 84.95,
        //     Additional: 64.95,
        //     Under: 42.95
        // },
        {
            Size: 6,
            Price: 99.95,
            Additional: 79.95,
            Under: 49.95
        },
        // {
        //     Size: 7,
        //     Price: 114.95,
        //     Additional: 89.95,
        //     Under: 57.95
        // },
        {
            Size: 8,
            Price: 129.95,
            Additional: 104.95,
            Under: 64.95
        },
        // {
        //     Size: 9,
        //     Price: 149.95,
        //     Additional: 124.95,
        //     Under: 74.95
        // },
        {
            Size: 10,
            Price: 174.95,
            Additional: 149.95,
            Under: 87.95
        }
        // {
        //     Size: 11,
        //     Price: 204.95,
        //     Additional: 174.95,
        //     Under: 102.95
        // },
        // {
        //     Size: 12,
        //     Price: 244.95,
        //     Additional: 214.95,
        //     Under: 122.95
        // },
        // {
        //     Size: 13,
        //     Price: 294.95,
        //     Additional: 264.95,
        //     Under: 147.95
        // },
        // {
        //     Size: 14,
        //     Price: 349.95,
        //     Additional: 309.95,
        //     Under: 174.95
        // },
        // {
        //     Size: 15,
        //     Price: 409.95,
        //     Additional: 359.95,
        //     Under: 204.95
        // },
        // {
        //     Size: 16,
        //     Price: 474.95,
        //     Additional: 419.95,
        //     Under: 239.95
        // },
        // {
        //     Size: 17,
        //     Price: 544.95,
        //     Additional: 484.95,
        //     Under: 272.95
        // },
        // {
        //     Size: 18,
        //     Price: 619.95,
        //     Additional: 554.95,
        //     Under: 309.95
        // },
        // {
        //     Size: 19,
        //     Price: 699.95,
        //     Additional: 629.95,
        //     Under: 339.95
        // }
    ];

}]);

//
// function calculateStuff(inches, scale) {
//     var printHeight = (scale)*(inches)
//     console.log(printHeight)
//
//     if (printHeight < 3.49999) {
//         return 59.95
//     } else if (printHeight < 4.499999) {
//         return 69.95
//     } else if (printHeight < 5.499999) {
//         return 79.95
//     } else if (printHeight < 6.499999) {
//         return 89.95
//     } else if (printHeight < 7.499999) {
//         return 99.95
//     } else if (printHeight < 8.499999) {
//         return 134.95
//     } else if (printHeight < 9.499999) {
//         return 159.95
//     } else if (printHeight < 10.499999) {
//         return 179.95
//     } else if (printHeight < 11.499999) {
//         return 199.95
//     }
//
// }
//
// console.log(calculateStuff(76, 1/9))