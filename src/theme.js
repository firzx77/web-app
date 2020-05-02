import {
  nunitoSansLight,
  nunitoSansRegular,
  nunitoSansSemiBold,
  nunitoSansBold
} from "./fonts/NunitoSans";

import { createMuiTheme, fade } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const rootTheme = createMuiTheme();

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#14a9fa",
      light: "#e5f6ff",
      sideBar: "#1e2b3a",
      chipKeyLabel: "#6e95ab"
    },
    error: {
      main: "#f36161",
      light: "#ffd6e4"
    },
    success: {
      light: "#eafaf2",
      main: "#58d599"
    },
    warning: {
      light: "#fff3e0",
      main: "#ff9800"
    },
    contrastThreshold: 2,
    tonalOffset: 0.05
  },
  custom: {
    sideBarWidth: rootTheme.spacing(30)
  }
});

const theme = createMuiTheme({
  palette: {
    ...defaultTheme.palette
  },
  typography: {
    fontFamily: "Nunito Sans"
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        padding: defaultTheme.spacing(4, 0, 1, 0),
        margin: defaultTheme.spacing(0, 5),
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: defaultTheme.spacing(0.1),
        color: defaultTheme.palette.grey[600],
        //borderBottom: `1px solid ${defaultTheme.palette.grey[300]}`,
        textAlign: "center",
        "& .MuiAvatar-root": {
          margin: `0 auto ${defaultTheme.spacing(1.5)}px`,
          color: defaultTheme.palette.primary.main,
          backgroundColor: defaultTheme.palette.primary.light
        }
      }
    },
    MuiDialogContent: {
      root: {
        padding: defaultTheme.spacing(2, 5, 3, 5)
      }
    },
    MuiDialogActions: {
      root: {
        padding: defaultTheme.spacing(4, 5),
        backgroundColor: defaultTheme.palette.grey[50],
        borderTop: `1px solid ${defaultTheme.palette.grey[200]}`
      }
    },
    MuiFormHelperText: {
      root: {
        textAlign: "right"
      }
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${grey[300]}`
        }
      }
    },
    MuiDialog: {
      paper: {
        boxShadow: "0 8px 16px 2px rgba(0, 0, 0, 0.04)",
        border: `1px solid ${grey[300]}`
      },
      paperWidthSm: {
        maxWidth: defaultTheme.spacing(70)
      }
    },

    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(255,255,255,0.8)"
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 40
      }
    },
    MuiListItem: {
      root: {
        "&:hover": {
          color: "#14a9fa",
          "& .MuiListItemIcon-root": {
            color: "#14a9fa"
          }
        },
        "&$selected": {
          backgroundColor: "#e5f6ff",
          color: "#14a9fa",
          "&:hover": {
            backgroundColor: "#e5f6ff"
          },
          "& .MuiListItemIcon-root, & .MuiListItemText-secondary": {
            color: "#14a9fa"
          }
        }
      }
    },
    MuiButton: {
      // Name of the rule
      root: {
        textTransform: "none",
        borderRadius: 8
      },
      containedPrimary: {
        "&:focus, &:hover": {
          boxShadow: "none"
        },
        padding: "12px 20px",
        fontWeight: "bold",
        boxShadow: `0 2px 8px 2px ${fade(defaultTheme.palette.primary.main, 0.2)}`
      },
      containedSecondary: {
        "&:focus, &:hover": {
          boxShadow: "none"
        },
        padding: "12px 20px",
        fontWeight: "bold",
        boxShadow: `0 2px 8px 2px ${fade(defaultTheme.palette.error.main, 0.2)}`
      },
      outlined: {
        borderColor: defaultTheme.palette.grey[300]
      }
    },
    MuiTable: {
      root: {
        tableLayout: "fixed",
        whiteSpace: "nowrap"
      }
    },
    MuiTableCell: {
      root: {
        padding: "12px 24px",
        borderBottomColor: grey[200],
        "&$head": {
          borderBottom: 0,
          fontSize: 12,
          textTransform: "uppercase",
          fontWeight: "bold"
        },
        "&$paddingCheckbox": {
          padding: "0 0 0 16px"
        }
      },
      head: {
        color: defaultTheme.palette.grey[500]
      }
    },
    MuiTableRow: {
      root: {
        cursor: "pointer",
        "&:last-child td": {
          borderBottom: 0
        },
        "&$hover": {
          "&:hover": {
            backgroundColor: fade(grey[100], 0.4),
            "& .MuiTableCell-root, & .MuiTypography-root": {
              color: "#14a9fa"
            }
          }
        },
        "&$selected": {
          backgroundColor: fade(grey[100], 0.4),
          "& .MuiTableCell-root, & .MuiTypography-root": {
            color: "#14a9fa"
          }
        }
      }
    },
    MuiTableContainer: {
      root: {
        position: "relative",
        marginBottom: 24
      }
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: "#1e2b3a",
        borderRadius: 8
      }
    },
    MuiSnackbar: {
      anchorOriginBottomLeft: {
        "@media (min-width: 600px)": {
          left: defaultTheme.custom.sideBarWidth + defaultTheme.spacing(3)
        }
      }
    },
    MuiCardContent: {
      root: {
        padding: defaultTheme.spacing(4, 5)
      }
    },
    MuiCardActions: {
      root: {
        padding: defaultTheme.spacing(3, 5),
        backgroundColor: defaultTheme.palette.grey[50],
        borderTop: `1px solid ${defaultTheme.palette.grey[200]}`,
        justifyContent: "flex-end"
      }
    },
    MuiCheckbox: {
      root: {
        color: defaultTheme.palette.grey[300]
      }
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          nunitoSansLight,
          nunitoSansRegular,
          nunitoSansSemiBold,
          nunitoSansBold
        ],
        body: {
          backgroundColor: "#ffffff",
          overflowY: "scroll"
        }
      }
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      //disableRipple: true, // No more ripple, on the whole application 💣!
    }
  },
  custom: {
    ...defaultTheme.custom
  }
});

export { theme };
