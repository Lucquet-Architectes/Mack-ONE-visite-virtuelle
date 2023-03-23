var APP_DATA = {
  "scenes": [
    {
      "id": "0-mackone-vue-schopf",
      "name": "MackONE vue Schopf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.791906543775891,
          "pitch": 0.014562241763288242,
          "rotation": 3.141592653589793,
          "target": "1-mackone-vue-golf"
        },
        {
          "yaw": 0.9379829489715803,
          "pitch": 0.010204167967820865,
          "rotation": 3.141592653589793,
          "target": "2-mackone-vue-ponton"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-mackone-vue-golf",
      "name": "MackONE vue golf",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33078669621371226,
          "pitch": 0.016715063910055505,
          "rotation": 3.141592653589793,
          "target": "0-mackone-vue-schopf"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mackone-vue-ponton",
      "name": "MackONE vue ponton",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3278391388019486,
          "pitch": -0.025336976059556093,
          "rotation": 3.141592653589793,
          "target": "0-mackone-vue-schopf"
        },
        {
          "yaw": 3.037776343368778,
          "pitch": -0.43760806027323795,
          "rotation": 3.141592653589793,
          "target": "3-mackone-vue-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mackone-vue-terrasse",
      "name": "MackONE vue terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": 0.03141592653589598,
        "pitch": 0.17451957592603762,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.020491178896280715,
          "pitch": 0.5272819749976403,
          "rotation": 3.141592653589793,
          "target": "2-mackone-vue-ponton"
        },
        {
          "yaw": -0.17693854208229176,
          "pitch": 0.11055411952031236,
          "rotation": 2.356194490192345,
          "target": "0-mackone-vue-schopf"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mack ONE Visite virtuelle",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
