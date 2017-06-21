/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.theme.components')
            .controller('BaSidebarCtrl', BaSidebarCtrl);

    /** @ngInject */
    function BaSidebarCtrl($scope, baSidebarService) {

//        $scope.menuItems = baSidebarService.getMenuItems();
        $scope.menuItems = [
            {
                "name": "master", 
                "title": "Master", 
                "level": 0, "order": 100, 
                "icon": "ion-compose", 
                "stateRef": "master", 
                "subMenu": [
                    {
                        "name": "master.item", 
                        "title": "Item", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": 
                        "master.item"
                    }, 
                    {
                        "name": "master.kontainer", 
                        "title": "Kontainer", 
                        "level": 1, 
                        "order": 100, 
                        "stateRef": "master.kontainer"
                    }, 
                    {
                        "name": "master.jenisItem", 
                        "title": "Jenis Item", 
                        "level": 1, 
                        "order": 200, 
                        "stateRef": "master.jenisItem"
                    }, 
                    {
                        "name": "master.kapal", 
                        "title": "Kapal", 
                        "level": 1, 
                        "order": 300, 
                        "stateRef": "master.kapal"
                    }, 
                    {
                        "name": "master.kota", 
                        "title": "Kota", 
                        "level": 1, 
                        "order": 400, 
                        "stateRef": "master.kota"
                    }, 
                    {
                        "name": "master.satuanKirim", 
                        "title": "Satuan Kirim", 
                        "level": 1, 
                        "order": 500, 
                        "stateRef": "master.satuanKirim"
                    }, 
                    {
                        "name": "master.kondisi", 
                        "title": "Kondisi", 
                        "level": 1, 
                        "order": 600, 
                        "stateRef": "master.kondisi"
                    }, 
                    {
                        "name": "master.toko", 
                        "title": "Toko", 
                        "level": 1, 
                        "order": 700, 
                        "stateRef": "master.toko"
                    }, 
                    {
                        "name": "master.emkl", 
                        "title": "Emkl", 
                        "level": 1, 
                        "order": 800, 
                        "stateRef": "master.emkl"
                    }, 
                    {
                        "name": "master.kapalBerangkat", 
                        "title": "Kapal Berangkat", 
                        "level": 1, 
                        "order": 900, 
                        "stateRef": "master.kapalBerangkat"
                    }
                ]
            }, 
            {
                "name": "transaksi", 
                "title": "Transaksi", 
                "level": 0, 
                "order": 200, 
                "icon": "ion-map", 
                "stateRef": "transaksi", 
                "subMenu": [
                    {
                        "name": "transaksi.stuffing", 
                        "title": "Stuffing", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "transaksi.stuffing"
                    }, 
                    {
                        "name": "transaksi.listsuratjalan", 
                        "title": "List Surat Jalan", 
                        "level": 1, 
                        "order": 100, 
                        "stateRef": "transaksi.listsuratjalan"
                    }, 
                    {
                        "name": "transaksi.suratjalan", 
                        "title": "Surat Jalan", 
                        "level": 1, 
                        "order": 100, 
                        "stateRef": "transaksi.suratjalan"
                    }
                ]
            }, 
            {
                "name": "laporan", 
                "title": "Laporan", 
                "level": 0, 
                "order": 300, 
                "icon": "ion-compose", 
                "stateRef": "laporan", 
                "subMenu": [
                    {
                        "name": "laporan.dashboard", 
                        "title": "Dashboard", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "laporan.dashboard"
                    }, 
                    {
                        "name": "laporan.pertoko", 
                        "title": "Per Toko", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "laporan.pertoko"
                    },
                    {
                        "name": "laporan.perkapal", 
                        "title": "Stuffing / Kapal", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "laporan.perkapal"
                    },
                    {
                        "name": "laporan.infoitem", 
                        "title": "Info Item", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "laporan.infoitem"
                    },
                    {
                        "name": "laporan.container", 
                        "title": "Jml Container Bulanan", 
                        "level": 1, 
                        "order": 0, 
                        "stateRef": "laporan.container"
                    }
                ]
            }
        ];
        console.log('$scope.menuItems', $scope.menuItems);
        $scope.defaultSidebarState = $scope.menuItems[0].stateRef;

        $scope.hoverItem = function ($event) {
            $scope.showHoverElem = true;
            $scope.hoverElemHeight = $event.currentTarget.clientHeight;
            var menuTopValue = 66;
            $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - menuTopValue;
        };

        $scope.$on('$stateChangeSuccess', function () {
            if (baSidebarService.canSidebarBeHidden()) {
                baSidebarService.setMenuCollapsed(true);
            }
        });
    }
})();