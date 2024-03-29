﻿var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var mapLat;
var mapLong;
var mapDistrict;

var mapResource;

function setAll(a, b, c) {
    mapLat = a;
    mapLong = b;
    mapDistrict = c;
}

function getAll() {
    if (mapLat != null && mapLong != null) {
        return [
            mapLat,
            mapLong,
            mapDistrict,
        ];
    } else {
        return null
    }
}

function setAllData(v) {
    mapResource = v;
}

function getAllData() {
    return mapResource;
}


var mapProvide = 0;

function getProvide() {
    return mapProvide;
}

function setProvide(value) {
    var temp = 0;
    if (value == 1) {
        mapProvide = 1;
    } else {
        mapProvide = temp;
    }
}




var CustomItems;
(function (CustomItems) {
    function getDefaultCustomLocalization() {
        return {
            // Binding Panel
            'DashboardWebCustomItemStringId.DefaultNameOnlineMap': "Online Map",
            'DashboardWebCustomItemStringId.Latitude': "Latitude",
            'DashboardWebCustomItemStringId.Binding.SetLatitude': "Set Latitude",
            'DashboardWebCustomItemStringId.Binding.ConfigureLatitude': "Configure Latitude",
            'DashboardWebCustomItemStringId.Longitude': "Longitude",
            'DashboardWebCustomItemStringId.Binding.SetLongitude': "Set Longitude",
            'DashboardWebCustomItemStringId.Binding.ConfigureLongitude': "Configure Longitude",
            // Options
            'DashboardWebCustomItemStringId.OnlineMapProvider': "Provider",
            'DashboardWebCustomItemStringId.OnlineMapType': "Type",
            'DashboardWebCustomItemStringId.OnlineMapProviderGoogle': "Google",
            'DashboardWebCustomItemStringId.OnlineMapProviderBing': "Bing",
            'DashboardWebCustomItemStringId.OnlineMapTypeRoadMap': "RoadMap",
            'DashboardWebCustomItemStringId.OnlineMapTypeSatellite': "Satellite",
            'DashboardWebCustomItemStringId.OnlineMapTypeHybrid': "Hybrid",
            'DashboardWebCustomItemStringId.OnlineMapDisplayMode': "Display Mode",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkers': "Markers",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeRoutes': "Routes",
            'DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkersAndRoutes': "All",
            'DashboardWebCustomItemStringId.OnlineMapSectionName': "Custom Options"
        };
    }
    DevExpress.Localization.addCultureInfo({ messages: getDefaultCustomLocalization() });
})(CustomItems || (CustomItems = {}));
/// <reference path="localization.ts" />
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.ONLINE_MAP_EXTENSION_NAME = 'OnlineMap';
    CustomItems.onlineMapMeta = {
        bindings: [{
            propertyName: 'Latitude',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: true,
            displayName: "DashboardWebCustomItemStringId.Latitude",
            emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetLatitude',
            selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureLatitude",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        }, {
            propertyName: 'Longitude',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: true,
            displayName: "DashboardWebCustomItemStringId.Longitude",
            emptyPlaceholder: 'DashboardWebCustomItemStringId.Binding.SetLongitude',
            selectedPlaceholder: "DashboardWebCustomItemStringId.Binding.ConfigureLongitude",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        }, {
            propertyName: 'ProblemDate',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "ProblemDate",
            emptyPlaceholder: 'Add ProblemDate',
            selectedPlaceholder: "ConfigureProblemDate",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        }, {

            propertyName: 'CallPhoneNo',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "CallPhoneNo",
            emptyPlaceholder: 'Add CallPhoneNo',
            selectedPlaceholder: "ConfigureCallPhoneNo",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        },
        {

            propertyName: 'problemphoneno',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: " problemphoneno",
            emptyPlaceholder: 'Add problemphoneno',
            selectedPlaceholder: "Configure problemphoneno",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            }
        },

        {
            propertyName: 'cat1',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "cat1",
            emptyPlaceholder: 'Add cat1',
            selectedPlaceholder: "Configure cat1",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            },
        },

        {
            propertyName: 'cat2',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "cat2",
            emptyPlaceholder: 'Add cat2',
            selectedPlaceholder: "Configure cat2",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            },
        },

        {
            propertyName: 'cat3',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "cat3",
            emptyPlaceholder: 'Add cat3',
            selectedPlaceholder: "Configure cat3",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            },
        },

        {
            propertyName: 'cat4',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "cat4",
            emptyPlaceholder: 'Add cat4',
            selectedPlaceholder: "Configure cat4",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            },
        },

        {
            propertyName: 'cat5',
            dataItemType: 'Dimension',
            array: false,
            enableInteractivity: false,
            displayName: "cat5",
            emptyPlaceholder: 'Add cat5',
            selectedPlaceholder: "Configure cat5",
            constraints: {
                allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
            },
        },

        ],
        properties: [{
            propertyName: 'Provider',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapProvider",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                Google: "DashboardWebCustomItemStringId.OnlineMapProviderGoogle",
                Bing: "DashboardWebCustomItemStringId.OnlineMapProviderBing"
            },
            defaultVal: 'Bing'
        }, {
            propertyName: 'Type',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapType",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                RoadMap: "DashboardWebCustomItemStringId.OnlineMapTypeRoadMap",
                Satellite: "DashboardWebCustomItemStringId.OnlineMapTypeSatellite",
                Hybrid: "DashboardWebCustomItemStringId.OnlineMapTypeHybrid"
            },
            defaultVal: 'RoadMap'
        }, {
            propertyName: 'DisplayMode',
            editor: { header: "dx-dashboard-button-group" },
            displayName: "DashboardWebCustomItemStringId.OnlineMapDisplayMode",
            sectionName: "DashboardWebCustomItemStringId.OnlineMapSectionName",
            values: {
                Markers: "DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkers",
                Routes: "DashboardWebCustomItemStringId.OnlineMapDisplayModeRoutes",
                MarkersAndRoutes: "DashboardWebCustomItemStringId.OnlineMapDisplayModeMarkersAndRoutes"
            },
            defaultVal: 'Markers'
        }],
        interactivity: {
            filter: true,
            drillDown: false
        },
        icon: CustomItems.ONLINE_MAP_EXTENSION_NAME,
        title: "DashboardWebCustomItemStringId.DefaultNameOnlineMap",
        index: 1
    };
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.ONLINE_MAP_ICON = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"" + CustomItems.onlineMapMeta.icon + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n<path class=\"dx_darkgray\" d=\"M12,1C8.1,1,5,4.1,5,8c0,3.9,3,10,7,15c4-5,7-11.1,7-15C19,4.1,15.9,1,12,1z M12,12c-2.2,0-4-1.8-4-4\n\tc0-2.2,1.8-4,4-4s4,1.8,4,4C16,10.2,14.2,12,12,12z\"/>\n<circle class=\"dx_red\" cx=\"12\" cy=\"8\" r=\"2\"/>\n</svg>";
})(CustomItems || (CustomItems = {}));
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
/// <reference path="localization.ts" />
/// <reference path="meta.ts" />
/// See the DevExtreme documentation to learn more about the Map UI widget settings.
/// https://js.devexpress.com/Documentation/16_2/ApiReference/UI_Widgets/dxMap/
var CustomItems;
(function (CustomItems) {
    var onlineMapItem = (function (_super) {
        __extends(onlineMapItem, _super);
        function onlineMapItem(model, $container, options) {
            var _this = _super.call(this, model, $container, options) || this;
            _this.mapViewer = null;
            return _this;
        }

        onlineMapItem.prototype.setSize = function (width, height) {
            _super.prototype.setSize.call(this, width, height);
            var contentWidth = this.contentWidth(), contentHeight = this.contentHeight();
            this.mapViewer.option('width', contentWidth);
            this.mapViewer.option('height', contentHeight);
        };
        onlineMapItem.prototype.clearSelection = function () {
            _super.prototype.clearSelection.call(this);
            this._updateSelection();
        };
        onlineMapItem.prototype.renderContent = function ($element, changeExisting, afterRenderCallback) {
            var _this = this;
            var markers = [], routes = [], mode = this.getPropertyValue('DisplayMode'), showMarkers = mode === 'Markers' || mode === 'MarkersAndRoutes' || this.canMasterFilter(), showRoutes = mode === 'Routes' || mode === 'MarkersAndRoutes';
            if (this.getBindingValue('Latitude').length > 0 && this.getBindingValue('Longitude').length > 0) {

                this.iterateData(function (row) {
                    var latitude = row.getValue('Latitude')[0];
                    var longitude = row.getValue('Longitude')[0];

                    if (latitude && longitude) {
                        if (showMarkers) {
                            markers.push({
                                location: { lat: latitude, lng: longitude },
                                iconSrc: _this.isSelected(row) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null,
                                onClick: function (args) {
                                    _this._onClick(row);

                                },
                                tag: row
                            });
                        }
                        if (showRoutes) {
                            routes.push([latitude, longitude]);
                        }
                    }

                });

            }
            var autoAdjust = markers.length > 1 || routes.length > 1, options = {
                provider: this.getPropertyValue('Provider').toLowerCase(),
                type: this.getPropertyValue('Type').toLowerCase(),
                controls: true,
                zoom: autoAdjust ? 1000 : 1,
                autoAdjust: autoAdjust,
                width: this.contentWidth(),
                height: this.contentHeight(),
                // Use the template below to authenticate the application within the required map provider.
                key: {
                    bing: 'BINGAPIKEY',
                    google: 'https://maps.googleapis.com/maps/api/js?language=mn&key=AIzaSyBrWI903B2w7JS4dJ-ME85lg6JCOGlVukI'
                },
                markers: markers,
                routes: routes.length > 0 ? [{
                    weight: 6,
                    color: 'blue',
                    opacity: 0.5,
                    mode: '',
                    locations: routes
                }] : []
            };
            if (changeExisting && this.mapViewer) {
                this.mapViewer.option(options);
            }
            else {
                this.mapViewer = new DevExpress.ui.dxMap($element, options);
            }
        };
        onlineMapItem.prototype._onClick = function (row) {
            this.setMasterFilter(row);
            this._updateSelection();

            var lat = row.getValue('Latitude')[0];
            var lng = row.getValue('Longitude')[0];
            var cat3 = row.getValue('cat3')[0];

            setAll(lat, lng, cat3);

            var m_data = [];

            this.iterateData(function (row) {

                var problemDate = row.getValue('ProblemDate')[0];
                var callphoneno = row.getValue('CallPhoneNo')[0];
                var problemphoneno = row.getValue('problemphoneno')[0];

                var cat1 = row.getValue('cat1')[0];
                var cat2 = row.getValue('cat2')[0];
                var cat3 = row.getValue('cat3')[0];
                var cat4 = row.getValue('cat4')[0];
                var cat5 = row.getValue('cat5')[0];

                m_data.push({
                    p_date: problemDate,
                    p_callphoneno: callphoneno,
                    p_problemphoneno: problemphoneno,
                    category1: cat1,
                    category2: cat2,
                    category3: cat3,
                    category4: cat4,
                    category5: cat5,
                });

            });

            setAllData(m_data);

            showModal();



        };

        onlineMapItem.prototype._updateSelection = function () {
            var _this = this;
            var markers = this.mapViewer.option('markers');
            markers.forEach(function (marker) {
                marker.iconSrc = _this.isSelected(marker.tag) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null;
            });
            this.mapViewer.option('autoAdjust', false);
            this.mapViewer.option('markers', markers);
        };

        return onlineMapItem;
    }(DevExpress.Dashboard.customViewerItem));
    CustomItems.onlineMapItem = onlineMapItem;
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
/// <reference path="icon.ts" />
/// <reference path="localization.ts" />
/// <reference path="online-map-viewer.ts" />
var CustomItems;
(function (CustomItems) {
    var OnlineMapItemExtension = (function () {
        function OnlineMapItemExtension(dashboardControl) {
            this.name = CustomItems.ONLINE_MAP_EXTENSION_NAME;
            this.metaData = CustomItems.onlineMapMeta;

            this.createViewerItem = function (model, $element, content) {
                return new CustomItems.onlineMapItem(model, $element, content);
            };
            dashboardControl.registerIcon(CustomItems.ONLINE_MAP_ICON);
        }
        return OnlineMapItemExtension;
    }());
    CustomItems.OnlineMapItemExtension = OnlineMapItemExtension;
})(CustomItems || (CustomItems = {}));
