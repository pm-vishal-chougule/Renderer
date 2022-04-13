/*!*********************************************************************
 * This Source Code Form is copyright of 51 Degrees Mobile Experts Limited.
 * Copyright 2019 51 Degrees Mobile Experts Limited, 9 Greyfriars Rd,
 * Reading, Berkshire, RG1 1NU.
 *
 * This Source Code Form is the subject of the following patents and patent
 * applications, owned by 51 Degrees Mobile Experts Limited of 9 Greyfriars
 * Rd, Reading, Berkshire, RG1 1NU:
 * GB1905888.2 and EP19192975.1.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0.
 *
 * If a copy of the MPL was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 *
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 ********************************************************************** */
  
'use strict';

// Interogates the device using JavaScript to work out the renderer.
// The takUrl parameter provides the URL of the tak.js file in a location that
// supports same-orgin operation with web workers. If the parameter is not 
// provided then CPU benchmarking will not be available to the detection 
// process.
// @param complete the function to call with the renderer.
// @param takUrl the full URL of the tak.js file (optional).
function getRenderer(complete, takUrl) {
	/*! VERSION = 1.620628 */ 
	var nodes = 
		[
		  {
		    "x": "Unknown",
		    "m": function(n){return family(n);},
		    "n": [
		      4,
		      2,
		      1,
		      3
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      12,
		      11,
		      10,
		      15,
		      14,
		      7,
		      6,
		      8,
		      5,
		      13,
		      9
		    ],
		    "v": [
		      "iPhone"
		      /*862203*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A14 GPU|Apple A12Z GPU|Apple A15 GPU|Apple A13 GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      22,
		      18,
		      21,
		      20,
		      19,
		      17,
		      16
		    ],
		    "v": [
		      "iPad"
		      /*309311*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU|Apple A14 GPU|Apple M1 GPU|Apple A12Z GPU|Apple A15 GPU",
		    "m": function(n){return height(n);},
		    "n": [
		      22,
		      18,
		      21,
		      12,
		      11,
		      10,
		      15,
		      20,
		      19,
		      24,
		      27,
		      14,
		      17,
		      25,
		      26,
		      13,
		      9,
		      23
		    ],
		    "v": [
		      "Macintosh"
		      /*1080938*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      "iPod Touch"
		      /*100*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A8 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      28,
		      29
		    ],
		    "v": [
		      1136
		      /*38330*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      30,
		      31
		    ],
		    "v": [
		      2001
		      /*11275*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      32,
		      33
		    ],
		    "v": [
		      2208
		      /*21422*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      34,
		      35
		    ],
		    "v": [
		      1334
		      /*44384*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU|Apple A12 GPU|Apple A13 GPU|Apple A14 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      37,
		      38,
		      39,
		      40,
		      36,
		      41
		    ],
		    "v": [
		      2436
		      /*260480*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      42,
		      36
		    ],
		    "v": [
		      2688
		      /*89377*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      44,
		      43
		    ],
		    "v": [
		      1624
		      /*88128*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      44,
		      43
		    ],
		    "v": [
		      1792
		      /*85322*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU|Apple A12 GPU|Apple A14 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      47,
		      45,
		      36,
		      46,
		      41
		    ],
		    "v": [
		      2079
		      /*122275*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      48,
		      39,
		      40
		    ],
		    "v": [
		      2532
		      /*74236*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      39,
		      49
		    ],
		    "v": [
		      2778
		      /*26974*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      51,
		      50
		    ],
		    "v": [
		      2048
		      /*253888*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      52,
		      53
		    ],
		    "v": [
		      2732
		      /*39907*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A12 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      55,
		      54
		    ],
		    "v": [
		      2224
		      /*12536*/
		    ]
		  },
		  {
		    "x": "Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      57,
		      56
		    ],
		    "v": [
		      2388
		      /*1046*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      58,
		      59,
		      60
		    ],
		    "v": [
		      2160
		      /*1575*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU|Apple M1 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      39,
		      62,
		      61
		    ],
		    "v": [
		      2360
		      /*77*/
		    ]
		  },
		  {
		    "x": "Apple A15 GPU",
		    "v": [
		      2266
		      /*282*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A12X GPU|Apple A10 GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      63,
		      51
		    ],
		    "v": [
		      2048
		      /*178364*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      64,
		      33
		    ],
		    "v": [
		      2208
		      /*19074*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      64,
		      35
		    ],
		    "v": [
		      1334
		      /*43641*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      65,
		      29
		    ],
		    "v": [
		      1136
		      /*30193*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU|Apple A9 GPU",
		    "m": function(n){return mediacolorgamut(n);},
		    "n": [
		      64,
		      31
		    ],
		    "v": [
		      2001
		      /*7451*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A9 GPU|Apple A8 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      66,
		      68,
		      67,
		      70,
		      69
		    ],
		    "v": [
		      "srgb"
		      /*29259*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      71,
		      37,
		      44,
		      73,
		      72
		    ],
		    "v": [
		      "p3"
		      /*9071*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      74,
		      75
		    ],
		    "v": [
		      "srgb"
		      /*6825*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      76,
		      77
		    ],
		    "v": [
		      "p3"
		      /*4450*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      78,
		      79
		    ],
		    "v": [
		      "srgb"
		      /*13696*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      76,
		      80
		    ],
		    "v": [
		      "p3"
		      /*7726*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A9 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      81,
		      82
		    ],
		    "v": [
		      "srgb"
		      /*14571*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A11 GPU|Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      71,
		      37,
		      44,
		      73,
		      72
		    ],
		    "v": [
		      "p3"
		      /*29813*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      958581112
		      /*39*/,
		      2301174800
		      /*1398*/,
		      4085158452
		      /*2*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      367695777
		      /*240*/,
		      411650080
		      /*4*/,
		      1220644697
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      4193218782
		      /*39752*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU",
		    "v": [
		      105985484
		      /*20540*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU",
		    "v": [
		      3403189785
		      /*32256*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU|Apple A15 GPU",
		    "v": [
		      2364051618
		      /*21241*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      352823931
		      /*19876*/,
		      4193218782
		      /*19876*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      958581112
		      /*105*/,
		      2301174800
		      /*419*/,
		      3403189785
		      /*21*/,
		      4085158452
		      /*11*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      352823931
		      /*19876*/,
		      3335845976
		      /*19876*/,
		      4193218782
		      /*19876*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      367695777
		      /*239*/,
		      411650080
		      /*1944*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU",
		    "v": [
		      105985484
		      /*32256*/,
		      679860869
		      /*11716*/,
		      3403189785
		      /*20540*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      352823931
		      /*19876*/
		    ]
		  },
		  {
		    "x": "Apple A15 GPU",
		    "v": [
		      679860869
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A15 GPU",
		    "v": [
		      1407135659
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU|Apple A8 GPU|Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8X GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      86,
		      83,
		      88,
		      89,
		      91,
		      87,
		      84,
		      85,
		      90,
		      66
		    ],
		    "v": [
		      "srgb"
		      /*219261*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU|Apple A12X GPU|Apple A12 GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      96,
		      57,
		      93,
		      92,
		      94,
		      95
		    ],
		    "v": [
		      "p3"
		      /*34627*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "v": [
		      "srgb"
		      /*14605*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A12X GPU|Apple M1 GPU|Apple A12Z GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      98,
		      97,
		      96,
		      99,
		      100
		    ],
		    "v": [
		      "p3"
		      /*25302*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "v": [
		      63583436
		      /*240*/,
		      2114570256
		      /*2159*/,
		      3129316290
		      /*8866*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      1349146759
		      /*355*/,
		      2917249763
		      /*916*/
		    ]
		  },
		  {
		    "x": "Apple A12X GPU|Apple A12Z GPU",
		    "v": [
		      4085158452
		      /*35*/
		    ]
		  },
		  {
		    "x": "Apple M1 GPU",
		    "v": [
		      105985484
		      /*23*/,
		      3403189785
		      /*22*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      2114570256
		      /*915*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      1349146759
		      /*106*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU|Apple A13 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      102,
		      101
		    ],
		    "v": [
		      2206992415
		      /*554*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU|Apple M1 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      103,
		      104
		    ],
		    "v": [
		      3403189785
		      /*23*/
		    ]
		  },
		  {
		    "x": "Apple M1 GPU",
		    "v": [
		      2364051618
		      /*27*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU|Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      111,
		      106,
		      108,
		      107,
		      105,
		      109,
		      110
		    ],
		    "v": [
		      "srgb"
		      /*143737*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      "srgb"
		      /*11348*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A10 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      112,
		      70,
		      69
		    ],
		    "v": [
		      "srgb"
		      /*21122*/
		    ]
		  },
		  {
		    "x": "Apple A7 GPU",
		    "v": [
		      857422828
		      /*503*/,
		      1915583345
		      /*3970*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      46663968
		      /*10*/,
		      3129316290
		      /*20451*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      839732043
		      /*1*/,
		      3816812018
		      /*2*/,
		      4125234388
		      /*3761*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      2114570256
		      /*153*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      63583436
		      /*408*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      583354101
		      /*970*/,
		      3458129248
		      /*1*/,
		      3928876783
		      /*359*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU|Apple A15 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      113,
		      114
		    ],
		    "v": [
		      3403189785
		      /*4*/
		    ]
		  },
		  {
		    "x": "Apple A15 GPU",
		    "v": [
		      2364051618
		      /*198*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      1411440593
		      /*3619*/,
		      1924197914
		      /*1*/,
		      4125234388
		      /*204*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      2114570256
		      /*1*/,
		      3129316290
		      /*3000*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      63583436
		      /*240*/,
		      2114570256
		      /*1007*/,
		      3129316290
		      /*3002*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      1349146759
		      /*1*/,
		      2917249763
		      /*200*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      1411440593
		      /*2303*/,
		      1913250432
		      /*2*/,
		      3074367344
		      /*4*/,
		      4125234388
		      /*39*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      46663968
		      /*10*/,
		      2114570256
		      /*1335*/,
		      3129316290
		      /*10003*/
		    ]
		  },
		  {
		    "x": "Apple A11 GPU",
		    "v": [
		      2917249763
		      /*310*/,
		      3237505312
		      /*55*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      3128296539
		      /*11*/,
		      3816812018
		      /*605*/,
		      4125234388
		      /*127*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      46663968
		      /*10*/,
		      63583436
		      /*239*/,
		      2114570256
		      /*1240*/,
		      3129316290
		      /*12339*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      2656686317
		      /*9*/,
		      3710391565
		      /*3*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		    "v": [
		      3129316290
		      /*65085*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      115,
		      105,
		      109
		    ],
		    "v": [
		      2114570256
		      /*44171*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      46663968
		      /*5*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      117,
		      116
		    ],
		    "v": [
		      4125234388
		      /*11708*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      118,
		      119,
		      120
		    ],
		    "v": [
		      4005673483
		      /*15888*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "v": [
		      1350183384
		      /*18*/,
		      1361285941
		      /*18*/,
		      3816812018
		      /*274*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      111,
		      110
		    ],
		    "v": [
		      63583436
		      /*2096*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return hash3d(n);},
		    "n": [
		      122,
		      121
		    ],
		    "v": [
		      2870741841
		      /*460*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU",
		    "v": [
		      3458129248
		      /*2*/
		    ]
		  },
		  {
		    "x": "Apple A12X GPU|Apple A12 GPU",
		    "v": [
		      4085158452
		      /*3*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      123,
		      124
		    ],
		    "v": [
		      583354101
		      /*303*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU|Apple A9X GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      125,
		      126
		    ],
		    "v": [
		      3928876783
		      /*906*/
		    ]
		  },
		  {
		    "x": "Apple A12Z GPU",
		    "v": [
		      958581112
		      /*200*/
		    ]
		  },
		  {
		    "x": "Apple A12X GPU",
		    "v": [
		      4085158452
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "v": [
		      583354101
		      /*206*/,
		      3458129248
		      /*1*/,
		      3928876783
		      /*240*/
		    ]
		  },
		  {
		    "x": "Apple M1 GPU",
		    "v": [
		      105985484
		      /*13*/
		    ]
		  },
		  {
		    "x": "Apple M1 GPU|Apple A10X GPU|Apple A12Z GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      128,
		      127
		    ],
		    "v": [
		      3403189785
		      /*25*/
		    ]
		  },
		  {
		    "x": "Apple A12 GPU",
		    "v": [
		      2301174800
		      /*269*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      3335845976
		      /*285*/
		    ]
		  },
		  {
		    "x": "Apple A14 GPU",
		    "v": [
		      1349146759
		      /*22*/
		    ]
		  },
		  {
		    "x": "Apple M1 GPU",
		    "v": [
		      1444462398
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A10 GPU",
		    "v": [
		      3458129248
		      /*2*/
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "v": [
		      1480368425
		      /*340*/,
		      1783160115
		      /*8*/
		    ]
		  },
		  {
		    "x": "Apple A8X GPU|Apple A10 GPU",
		    "m": function(n){return hash(n);},
		    "n": [
		      58,
		      129
		    ],
		    "v": [
		      3403189785
		      /*939*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      3312905059
		      /*120*/,
		      3928382683
		      /*784*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU|Apple A9X GPU|Apple A10 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      130,
		      131
		    ],
		    "v": [
		      583354101
		      /*760*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU|Apple A10 GPU",
		    "m": function(n){return benchmarkcpuavg(n);},
		    "n": [
		      132,
		      135,
		      133,
		      134
		    ],
		    "v": [
		      3928876783
		      /*2094*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      1058363647
		      /*1*/,
		      2015944978
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A9 GPU",
		    "v": [
		      46663968
		      /*10*/
		    ]
		  },
		  {
		    "x": "Apple A13 GPU",
		    "v": [
		      1349146759
		      /*2*/
		    ]
		  },
		  {
		    "x": "Apple A15 GPU",
		    "v": [
		      1444462398
		      /*2*/
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "v": [
		      3403189785
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      136,
		      137
		    ],
		    "r": [
		      {
		        "a": 29.78,
		        "b": 30.87
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 31.19,
		        "b": 31.59
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "v": [
		      1783160115
		      /*6*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      3928382683
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU|Apple A8X GPU",
		    "m": function(n){return benchmarkcpustd(n);},
		    "n": [
		      138,
		      139
		    ],
		    "v": [
		      3403189785
		      /*1907*/
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "v": [
		      3312905059
		      /*120*/
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "v": [
		      1480368425
		      /*340*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "r": [
		      {
		        "a": 14.16,
		        "b": 17.21
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "r": [
		      {
		        "a": 18.44,
		        "b": 35.94
		      }
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "r": [
		      {
		        "a": 12.16,
		        "b": 16.01
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "r": [
		      {
		        "a": 16.68,
		        "b": 121.37
		      }
		    ]
		  },
		  {
		    "x": "Apple M1 GPU|Apple A12Z GPU",
		    "v": [
		      1349146759
		      /*24*/
		    ]
		  },
		  {
		    "x": "Apple A10X GPU",
		    "v": [
		      2114570256
		      /*1*/
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "v": [
		      4005673483
		      /*938*/
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU",
		    "r": [
		      {
		        "a": 24.38,
		        "b": 31.67
		      }
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A9X GPU",
		    "r": [
		      {
		        "a": 16.82,
		        "b": 22.52
		      }
		    ]
		  },
		  {
		    "x": "Apple A10 GPU",
		    "r": [
		      {
		        "a": 13.38,
		        "b": 16.4
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU|Apple A9 GPU",
		    "r": [
		      {
		        "a": 19.75,
		        "b": 21.8
		      }
		    ]
		  },
		  {
		    "x": "Apple A10 GPU|Apple A9X GPU",
		    "r": [
		      {
		        "a": 16.41,
		        "b": 19.14
		      }
		    ]
		  },
		  {
		    "x": "Apple A9X GPU",
		    "r": [
		      {
		        "a": 89.03,
		        "b": 200.59
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "r": [
		      {
		        "a": 0.26,
		        "b": 5.62
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 7.18,
		        "b": 161.36
		      }
		    ]
		  },
		  {
		    "x": "Apple A8X GPU",
		    "r": [
		      {
		        "a": 0.53,
		        "b": 13.31
		      }
		    ]
		  },
		  {
		    "x": "Apple A8 GPU",
		    "r": [
		      {
		        "a": 83.08,
		        "b": 2952.42
		      }
		    ]
		  }
		];

    function hash3d() {
        // This function is based on this article: https://bl.ocks.org/camargo/649e5903c4584a21a568972d4a2c16d3
        // The 'mat4' object is created from code in the gl-matrix library: https://github.com/toji/gl-matrix
        var gl, program, canvas;

        // The non-minified versions of these shaders are available in
        // WebSite/partials/fragment-shader.glsl and
        // WebSite/partials/vertex-shader.glsl
        var VERTEX_SHADER = 'attribute vec3 c,d; uniform vec4 e; uniform vec3 f,g;uniform mat4 h,i;varying vec3 j;void main(){vec3 a=normalize(d);vec4 b=h*vec4(c,1.);vec3 k=normalize(vec3(e-b));j=g*f*max(dot(k,a),0.),gl_Position=i*vec4(c,1.);}';
        var FRAGMENT_SHADER = '#ifdef GL_ES\n' +
            'precision mediump float;\n' +
            '#endif\n' +
            'varying vec3 j;void main(){gl_FragColor = vec4(j, 1.0);}';

        // This object uses code from the gl-matrix library: https://github.com/toji/gl-matrix
        var mat4 = {
            create: function () {
                var result = new Array(16);
                for (var i = 0; i < 16; i++) {
                    result[i] = (i % 5 == 0 ? 1 : 0);
                }
                return result;
            },
            perspective: function (out, fovy, aspect, near, far) {
                var f = 1.0 / Math.tan(fovy / 2), nf;
                out[0] = f / aspect;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = f;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[11] = -1;
                out[12] = 0;
                out[13] = 0;
                out[15] = 0;
                if (far != null && far !== Infinity) {
                    nf = 1 / (near - far);
                    out[10] = (far + near) * nf;
                    out[14] = (2 * far * near) * nf;
                } else {
                    out[10] = -1;
                    out[14] = -2 * near;
                }
                return out;
            },
            lookAt: function (out, eye, center, up) {
                var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
                var eyex = eye[0];
                var eyey = eye[1];
                var eyez = eye[2];
                var upx = up[0];
                var upy = up[1];
                var upz = up[2];
                var centerx = center[0];
                var centery = center[1];
                var centerz = center[2];

                if (Math.abs(eyex - centerx) < 0.000001 &&
                    Math.abs(eyey - centery) < 0.000001 &&
                    Math.abs(eyez - centerz) < 0.000001) {
                    return mat4.identity(out);
                }

                z0 = eyex - centerx;
                z1 = eyey - centery;
                z2 = eyez - centerz;

                len = 1 / Math.hypot(z0, z1, z2);
                z0 *= len;
                z1 *= len;
                z2 *= len;

                x0 = upy * z2 - upz * z1;
                x1 = upz * z0 - upx * z2;
                x2 = upx * z1 - upy * z0;
                len = Math.hypot(x0, x1, x2);
                if (!len) {
                    x0 = 0;
                    x1 = 0;
                    x2 = 0;
                } else {
                    len = 1 / len;
                    x0 *= len;
                    x1 *= len;
                    x2 *= len;
                }

                y0 = z1 * x2 - z2 * x1;
                y1 = z2 * x0 - z0 * x2;
                y2 = z0 * x1 - z1 * x0;

                len = Math.hypot(y0, y1, y2);
                if (!len) {
                    y0 = 0;
                    y1 = 0;
                    y2 = 0;
                } else {
                    len = 1 / len;
                    y0 *= len;
                    y1 *= len;
                    y2 *= len;
                }

                out[0] = x0;
                out[1] = y0;
                out[2] = z0;
                out[3] = 0;
                out[4] = x1;
                out[5] = y1;
                out[6] = z1;
                out[7] = 0;
                out[8] = x2;
                out[9] = y2;
                out[10] = z2;
                out[11] = 0;
                out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
                out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
                out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
                out[15] = 1;

                return out;
            },
            multiply: function (out, a, b) {
                var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
                var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
                var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
                var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

                var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
                out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
                out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
                out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

                b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
                out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return out;
            },
            identity: function (out) {
                out[0] = 1;
                out[1] = 0;
                out[2] = 0;
                out[3] = 0;
                out[4] = 0;
                out[5] = 1;
                out[6] = 0;
                out[7] = 0;
                out[8] = 0;
                out[9] = 0;
                out[10] = 1;
                out[11] = 0;
                out[12] = 0;
                out[13] = 0;
                out[14] = 0;
                out[15] = 1;
                return out;
            }
        };

        function initVertexBuffers(gl) {
            var latitudeBands = 50;
            var longitudeBands = 50;
            var radius = 2;

            var vertexPositionData = [];
            var normalData = [];
            var textureCoordData = [];
            var indexData = [];

            var latNumber, longNumber;

            // Calculate sphere vertex positions, normals, and texture coordinates.
            for (latNumber = 0; latNumber <= latitudeBands; ++latNumber) {
                var theta = latNumber * Math.PI / latitudeBands;
                var sinTheta = Math.sin(theta);
                var cosTheta = Math.cos(theta);

                for (longNumber = 0; longNumber <= longitudeBands; ++longNumber) {
                    var phi = longNumber * 2 * Math.PI / longitudeBands;
                    var sinPhi = Math.sin(phi);
                    var cosPhi = Math.cos(phi);

                    var x = cosPhi * sinTheta;
                    var y = cosTheta;
                    var z = sinPhi * sinTheta;

                    var u = 1 - (longNumber / longitudeBands);
                    var v = 1 - (latNumber / latitudeBands);

                    vertexPositionData.push(radius * x);
                    vertexPositionData.push(radius * y);
                    vertexPositionData.push(radius * z);

                    normalData.push(x);
                    normalData.push(y);
                    normalData.push(z);

                    textureCoordData.push(u);
                    textureCoordData.push(v);
                }
            }

            // Calculate sphere indices.
            for (latNumber = 0; latNumber < latitudeBands; ++latNumber) {
                for (longNumber = 0; longNumber < longitudeBands; ++longNumber) {
                    var first = (latNumber * (longitudeBands + 1)) + longNumber;
                    var second = first + longitudeBands + 1;

                    indexData.push(first);
                    indexData.push(second);
                    indexData.push(first + 1);

                    indexData.push(second);
                    indexData.push(second + 1);
                    indexData.push(first + 1);
                }
            }

            vertexPositionData = new Float32Array(vertexPositionData);
            normalData = new Float32Array(normalData);
            textureCoordData = new Float32Array(textureCoordData);
            indexData = new Uint16Array(indexData);

            // Create buffer objects.
            var vertexPositionBuffer = gl.createBuffer();
            var vertexNormalBuffer = gl.createBuffer();
            var indexBuffer = gl.createBuffer();

            // Write the vertex positions to their buffer object.
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertexPositionData, gl.STATIC_DRAW);

            // Assign position coords to attrib and enable it.
            var VertexPosition = gl.getAttribLocation(program, 'c');
            gl.vertexAttribPointer(VertexPosition, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(VertexPosition);

            // Write the normals to their buffer object.
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, normalData, gl.STATIC_DRAW);

            // Assign normal to attrib and enable it.
            var VertexNormal = gl.getAttribLocation(program, 'd');
            gl.vertexAttribPointer(VertexNormal, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(VertexNormal);

            // Pass index buffer data to element array buffer.
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexData, gl.STATIC_DRAW);

            return indexData.length;
        }

        function generate() {
            if (!(gl = getRenderingContext()))
                return;

            var vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, VERTEX_SHADER);
            gl.compileShader(vertexShader);
            var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, FRAGMENT_SHADER);
            gl.compileShader(fragmentShader);
            program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.detachShader(program, vertexShader);
            gl.detachShader(program, fragmentShader);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.useProgram(program);

            // Init vertex buffers (position, color, and index data).
            var n = initVertexBuffers(gl);

            // Set up clear color and enable depth testing.
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);

            // Create projection matrix.
            var projection = mat4.create();
            mat4.perspective(projection, Math.PI / 6, 1.0, 0.1, 100.0);

            // Create model-view matrix.
            var modelView = mat4.create();
            mat4.lookAt(modelView, [0.0, 0.0, 10.0], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0]);

            // Multiply the projection matrix by the model-view matrix to create the mvpMatrix.
            var mvpMatrix = mat4.create();
            mat4.multiply(mvpMatrix, projection, modelView);

            // Pass the modelView matrix into the shader.
            var ModelViewMatrix = gl.getUniformLocation(program, 'h');
            gl.uniformMatrix4fv(ModelViewMatrix, false, modelView);

            // Pass the mvp matrix into the shader.
            var MVP = gl.getUniformLocation(program, 'i');
            gl.uniformMatrix4fv(MVP, false, mvpMatrix);

            // Pass the light position into the shader.
            var LightPosition = gl.getUniformLocation(program, 'e');
            gl.uniform4fv(LightPosition, [10.0, 10.0, 10.0, 1.0]);

            // Pass the material diffuse color into the shader.
            var Kd = gl.getUniformLocation(program, 'f');
            gl.uniform3fv(Kd, [0.9, 0.5, 0.3]);

            // Pass the light diffuse color into the shader.
            var Ld = gl.getUniformLocation(program, 'g');
            gl.uniform3fv(Ld, [1.0, 1.0, 1.0]);

            // Clear & draw.
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_SHORT, 0);

            cleanup();
            return canvas.toDataURL();
        }

        function cleanup() {
            gl.useProgram(null);
            if (program)
                gl.deleteProgram(program);
        }

        function getRenderingContext() {
            canvas.width = 67;
            canvas.height = 67;
            var gl = canvas.getContext("webgl")
                || canvas.getContext("experimental-webgl");
            if (gl) {
                gl.viewport(0, 0, 67, 67);
                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
            }
            return gl;
        }

        var imageHash = 0;

        canvas = document.createElement("canvas");
        if (canvas != null) {
            // Get the image data as a string.
            var imageData = generate();
            if (imageData) {
                // Hash the image data.
                imageHash = fnvHash(imageData);
            }
        }

        return imageHash;
    }

    // An uninitialised array of CPU benchmark results. Used to store results
    // from the first run to avoid performing the benchmark a subsequent time.
    var benchmarkValues = null;

    // Performs the CPU benchmark using multiple web workers and records the
    // samples in benchmarkValues. If the benchmark samples have already been
    // collected the promise resolves immediately.
    // @return a promise that will either resolve to the CPU benchmark
    // value, or reject with an error message. 
    function benchmarkcpu() {

        function workerState() {
            this.samples = [];
            this.active = 0;
        }

        function timerComplete(worker) {

            // Stop the web worker as it's timed out.
            worker.terminate();

            finished(worker.state);
        }

        function workerComplete(source) {

            // Clear the timer if present.
            clearTimeout(source.currentTarget.timeout);

            // Get the state attached to the web worker.
            var state = source.currentTarget.state;

            // Stop the web worker as there are no more messages for it.
            source.currentTarget.terminate();

            // Add the sample from the web worker to the main array of samples.
            state.samples = state.samples.concat(source.data);

            finished(state);
        }

        function finished(state) {

            // Reduce the number of active web workers.
            state.active--;

            // If this is the last web worker then finish the test.
            if (state.active === 0) {

                // Record the CPU cleaned benchmark value to avoid repeated
                // execution.
                benchmarkValues = state.samples;

                // Resolve the promise.
                state.resolve(benchmarkValues);
            }
        }

        // Starts the web workers using the URL provided.
        function workersStart(resolve, reject, url) {
            var workers = [];
            var state = new workerState();
            state.resolve = resolve;
            state.reject = reject;
            try {
                for (var i = 0; i < 2; i++) {

                    // Start a web worker with the URL provided.
                    var worker = new Worker(url);

                    // Add the state for all web workers to this web worker.
                    worker.state = state;

                    // Set functions and add to the array of workers.
                    worker.onmessage = workerComplete;
                    worker.onerror = function (error) { reject(error); };
                    workers.push(worker);
                }

                // Get the web workers to run the benchmark 80 times. If the 
                // worker doesn't complete within 4 seconds then timeout.
                for (var i = 0; i < workers.length; i++) {
                    state.active++;
                    workers[i].postMessage(80);
                    workers[i].timeout = setTimeout(
                        timerComplete, 4000, workers[i]);
                }
            }
            catch (ex) {
                reject(new Error(ex));
            }
        }

        // Valids the URL and starts the web workers if valid, otherwise
        // rejects the promise.
        function workerFetchUrl(resolve, reject, url) {
            fetch(url, {
                mode: 'same-origin'
            }).then(function (response) {

                // If the URL is valid then use it to start the workers
                // running the CPU benchmark.
                if (response.ok) {
                    workersStart(resolve, reject, response.url);
                }

                // If the URL is not valid then use the reject method
                // to return the Profile Id of the current node.
                else {
                    var error = new Error('Url could not be reached');
                    error.response = response;
                    reject(error);
                }
            }).catch(function (error) {

                // The Url can not be loaded. Reject the operation.                  
                reject(error);
            });
        }

        // Create a new promise that will validate the URL for the web workers
        // and then start them, or if the URL is invalid reject the promise.
        return new Promise(function (resolve, reject) {
            if (benchmarkValues != null) {
                resolve(benchmarkValues);
            }
            else {
                // Wait 1 second before executing the benchmark.
                // Testing has shown that this benchmark can return significantly
                // slower results when a page is being retrieved for the first
                // time.
                // This can often mean that devices are reported incorrectly.
                // Waiting for 1 second gives the device enough time to settle 
                // down and gives a far more consistent benchmark result.
                // Note that this does not affect page load time as the wait
                // occurs on a background thread.
                setTimeout(function () {
                    workerFetchUrl(resolve, reject, takUrl);
                }, 1000);
            }
        });
    }

    // Uses the CPU benchmark data to work out an average.
    // @param node that the benchmark is being run for. 
    // @return a promise which when resolved will produce the average.
    function benchmarkcpuavg(node) {
        return benchmarkcpu().then(function (values) {
            var average = 0;
            if (values.length > 0) {
                var sum = values.reduce(function (previous, current) {
                    return current += previous;
                });
                average = sum / values.length;
            }
            resolveNode(node, average, 0);
        }).catch(function (error) {
            complete(node.x);
        });;
    }

    // Uses the CPU benchmark data to work out a the standard deviation.
    // @param node that the benchmark is being run for. 
    // @return a promise which when resolved will produce the standard 
    // deviation..
    function benchmarkcpustd(node) {
        return benchmarkcpu().then(function (values) {
            var std = 0;
            if (values.length > 0) {
                var sum = values.reduce(function (previous, current) {
                    return current += previous;
                });
                var average = values.length > 0 ? sum / values.length : 0;
                std = values.reduce(function (sq, n) {
                    return sq + Math.pow(n - average, 2);
                }, 0) / (values.length - 1);
            }
            resolveNode(node, std, 0);
        }).catch(function (error) {
            complete(node.x);
        });;
    }

    // Performs an FNV hash on the string provided.
    // @param str the string to be hashed.
    // @return the hash value as a 32 bit integer.
    function fnvHash(str) {
        var h = 0x811c9dc5;
        for (var i = 0; i < str.length; ++i) {
            h ^= str.charCodeAt(i);
            h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
        }
        return h >>> 0;
    }

    function hash() {

        // Draws an image that changes very subtly based on the GPU model used
        // to render it.
        // @param a canvas instance that has not be drawn to.
        // @return a base 64 encoded string containing the image.
        function drawImage(canvas) {

            // Configure the canvas and get context.
            canvas.width = 67;
            canvas.height = 67;
            var ctx = canvas.getContext('2d', { alpha: true });

            if (ctx != null) {

                // Configure the canvas context.
                ctx.imageSmoothingQuality = "low";
                ctx.imageSmoothingEnabled = true;
                ctx.globalCompositeOperation = "source-over";
                ctx.globalAlpha = 1;
                ctx.miterLimit = Infinity;
                ctx.filter = "none";
                ctx.lineCap = "butt";
                ctx.lineDashOffset = 0;
                ctx.lineJoin = "miter";
                ctx.font = "10pt Arial";
                ctx.lineWidth = 2;
                // setLineDash not supported on iPhone 3G / iOS 4.2
                if (ctx.setLineDash !== undefined) {
                    ctx.setLineDash([10, 20]);
                }
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = -3;
                ctx.shadowOffsetY = -5;

                // Rotate the canvas and add some text.
                ctx.translate(canvas.width / 2, canvas.height / 2);
                ctx.rotate(0.8901179);
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("*51Degrees*", 0, 0);

                // Draw a transparent circle or elipse over the text. A circle
                // is used if the ellipse feature is not supported by the GPU.
                ctx.beginPath();
                ctx.shadowColor = "yellow";
                ctx.shadowBlur = 1;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                ctx.strokeStyle = "red";
                ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
                if (ctx.ellipse === undefined) {
                    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
                }
                else {
                    ctx.ellipse(0, 0, 25, 15, Math.PI / 4, 0, 2 * Math.PI);
                }
                ctx.fill();
                ctx.stroke();

                // Return the image as a base 64 encoded string.
                return canvas.toDataURL();
            }
        }

        var imageHash = 0;

        var canvas = document.createElement("canvas");
        if (canvas != null) {

            // Get the image data as a string.
            var imageData = drawImage(canvas);
            if (imageData) {

                // Hash the image data.
                imageHash = fnvHash(imageData);
            }
        }

        return imageHash;
    }

    // Try getting the renderer string via the conventional debug extension.
    // @return the UNMASKED_RENDERER_WEBGL parameter value.
    function reportedrenderer() {
        var canvas = document.createElement("canvas");
        if (canvas != null) {
            var context = canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl");
            if (context) {
                var info = context.getExtension("WEBGL_debug_renderer_info");
                if (info) {
                    return context.getParameter(info.UNMASKED_RENDERER_WEBGL);
                }
            }
        }
        return '';
    }

    // Width of the screen in pixels.
    function width() {
        return window.screen.width * window.devicePixelRatio;
    }

    // Height of the screen in pixels.
    function height() {
        return window.screen.height * window.devicePixelRatio;
    }

    // Pixel ratio of the screen.
    function ratio() {
        return window.devicePixelRatio;
    }

    // Determines if the query is supported by the device.
    // @param query the media query to check
    // @return true if the query is supported, otherwise false
    function hasMediaSupport(query) {
        return window.matchMedia(query).matches;
    }

    // Takes a list of values for a media query name and returns
    // the one that is supported, or undefined if none are supported.
    // @param name of the media query
    // @param possibleValues possible values for the media query name
    // @return the first value from the list that matches, otherwise "n/a"
    function getMediaSingleValue(name, possibleValues) {
        for (var i = 0; i < possibleValues.length; i++) {
            if (hasMediaSupport('(' + name + ': ' + possibleValues[i] + ')')) {
                return possibleValues[i];
            }
        }
        return 'n/a';
    }

    // Returns the color gamut value from the media queries.
    // @return p2 or srgb or undefined
    function mediacolorgamut() {
        return getMediaSingleValue('color-gamut', ['p3', 'srgb']);
    }

    // Returns the portion of the User-Agent which represents the family of 
    // Apple products the device belongs.
    // @return iPhone, iPad or Macintosh otherwise empty string
    function family() {
        var segments = /iPhone|iPad|Macintosh/.exec(navigator.userAgent);
        if (segments && segments.length > 0) {
            return segments[0];
        }
        return '';
    }

    function resolveNode(node, value, iterations) {

        // For all the children of the node being evaluated.
        for (var i = 0; i < node.n.length; i++) {

            // Get the values for the child.
            var child = nodes[node.n[i]];

            // If the child is a range of values.
            if (child.r) {

                for (var c = 0; c < child.r.length; c++) {
                    var range = child.r[c];

                    // If the value is between the two values as a range.
                    if ((range.a === null || value >= range.a) &&
                        (range.b === null || value <= range.b)) {
                        evaluateNode(child, 0);
                        return;
                    }
                }
            }

            // If the child has a specific list of values.
            else if (child.v) {

                // Compare for equality with the value found.
                if (child.v.indexOf(value) != -1) {
                    evaluateNode(child, 0);
                    return;
                }
            }
        }

        // If this node has children then wait 10ms and then retry the 
        // evaluation of this function if we've tried it less than 10 times.
        if (node.n.length > 0 && iterations < 10) {
            setTimeout(function () {
                evaluateNode(node, iterations + 1)
            }, 10);
        }

        // There child that have matched. Therefore return the Profile
        // Id of the node passed.
        complete(node.x);
    }

    // Evaluates the children of the node until a Profile Id is found.
    // @param node to be evaluated.
    // @return the profile Id of the best node found.
    function evaluateNode(node, iterations) {

        // If there is a function then execute it, get the result and
        // then find the matching item in the list.
        if (node.m) {

            // Get the value from the function.
            var result = node.m(node);

            // If this isn't a promise then resolve the value returned. If it
            // is a promise it's up to the evaluation method to handle
            // processing the promise once it's resolved.
            if (result || result === '') {
                if (!result.then) {
                    resolveNode(node, result, iterations);
                }
            }
            else if (node.x) {
                complete(node.x);
            }
        }

        // There is no method so return the Profile Id.
        else {
            complete(node.x);
        }
    }

    // Evaluate the root node of the tree.
    evaluateNode(nodes[0], 0);
}