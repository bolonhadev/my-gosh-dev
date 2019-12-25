module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    my_state_machine: {
      GUEST: {
        guest_is: true,
        confimation_is: false,
        user_is: false,
        user_role: "guest",
        girl_expression: "EXPRESSION_NEUTRAL",
        girl_talk: "TXT_GIRL_HI",
        panel: false,
        editor: false,
        tool_menu: {
          left: true,
          center: "WAITING_EMAIL",
          rigth: false
        }
      },
      CONFIRMATION: {
        guest_is: true,
        confimation_is: true,
        user_is: false,
        user_role: "guest",
        girl_expression: "EXPRESSION_SCARE",
        girl_talk: "TXT_GIRL_EARTH_GONE",
        panel: false,
        editor: false,
        tool_menu: {
          "left": true,
          "center": "TXT_CONFIRM_EMAIL",
          "rigth": false
        }
      },
      USER: {
        guest_is: true,
        confimation_is: true,
        user_is: true,
        user_role: "user",
        girl_expression: "EXPRESSION_NEUTRAL",
        girl_talk: "TXT_GIRL_LETS_START",
        panel: true,
        panel_stages:[
          "PANEL_EMPTY",
          "PANEL_UNIVERSE",
          "PANEL_PLANET",
          "PANEL_CONTINENT",
          "PANEL_PERSON",
          "PANEL_TALK"
        ],
        editor: true,
        editor_codes: {
          ml_code: {
            begins: "CODE_ML_INIT",
            ends: "CODE_ML_ENDS",
            element: [
              "ELEMENT_UNIVERSE",
              "ELEMENT_UNIVERSAL_LAWS",
              "ELEMENT_PLANET",
              "ELEMENT_CONTINENT",
              "ELEMENT_PERSON",
              "ELEMENT_TALK"
            ]
          },
          ol_code: {
            begins: "CODE_OL_INIT",
            ends: "CODE_OL_ENDS",
            element: {
              "idiomaUniversal": {
                "name": "LANGUAGE",
                "attr": "PT-BR"
              }
            }
          }
        },
        tool_menu: {
          left: true,
          center: {
            initial: "TYPE_UNIVERSE",
            is_typing: false,
            typing_phrase: "IS_TYPING",
            phrases: [
              "TXT_CODE_UNIVERSE",
              "TXT_CODE_PLANET",
              "TXT_CODE_CONTINENT",
              "TXT_CODE_PERSON",
              "TXT_CODE_TALK"
            ]
          },
          rigth: true
        }
      },
      CONGRATS: {
        guest_is: true,
        confimation_is: true,
        user_is: true
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
