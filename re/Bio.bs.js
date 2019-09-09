// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");

function str(prim) {
  return prim;
}

var wrapper = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.marginBottom(Css.px(16)),
        /* [] */0
      ]
    ]);

var img = Css.style(/* :: */[
      Css.width(Css.px(64)),
      /* :: */[
        Css.height(Css.px(64)),
        /* :: */[
          Css.borderRadius(Css.px(32)),
          /* :: */[
            Css.marginRight(Css.px(12)),
            /* [] */0
          ]
        ]
      ]
    ]);

var bioText = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(/* center */98248149),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* wrapper */wrapper,
  /* img */img,
  /* bioText */bioText
];

function Bio(Props) {
  return React.createElement("div", {
              className: wrapper
            }, React.createElement("img", {
                  className: img,
                  alt: "Ian Wilson",
                  src: "/images/iwilsonq.jpg"
                }), React.createElement("p", {
                  className: bioText
                }, "Written by Ian Wilson who lives and works in Cupertino building useful things.", React.createElement("a", {
                      href: "https://twitter.com/iwilsonq"
                    }, "You should follow him on Twitter")));
}

var make = Bio;

var $$default = Bio;

exports.str = str;
exports.Styles = Styles;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* wrapper Not a pure module */
