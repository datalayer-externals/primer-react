import React from 'react'
import {Box, ThemeProvider, theme, themeGet, BaseStyles, CheckboxGroup, FormControl} from '../index'
import {createGlobalStyle} from 'styled-components'
import {ComponentProps} from './types'
import {ArgTypes} from '@storybook/react'
import {InputType} from '@storybook/csf'
import {Icon} from '@primer/octicons-react'

// we don't import StoryContext from storybook because of exports that conflict
// with primer/react more: https://github.com/primer/react/runs/6129115026?check_suite_focus=true
type StoryContext = Record<string, unknown> & {
  globals: {colorScheme: string; showSurroundingElements?: boolean}
  parameters: Record<string, unknown>
}

type CheckboxOrRadioGroupWrapperArgs = ComponentProps<typeof CheckboxGroup>
type CheckboxOrRadioGroupLabelArgs = ComponentProps<typeof CheckboxGroup.Label> & {
  labelChildren?: React.ReactNode
}
type CheckboxOrRadioGroupCaptionArgs = ComponentProps<typeof CheckboxGroup.Caption> & {
  captionChildren?: React.ReactNode
}
type CheckboxOrRadioGroupValidationMessageArgs = ComponentProps<typeof CheckboxGroup.Validation> & {
  validationChildren?: React.ReactNode
}
export type CheckboxOrRadioGroupArgs = CheckboxOrRadioGroupWrapperArgs &
  CheckboxOrRadioGroupLabelArgs &
  CheckboxOrRadioGroupCaptionArgs &
  CheckboxOrRadioGroupValidationMessageArgs

type FormControlParentArgs = Pick<ComponentProps<typeof FormControl>, 'required' | 'disabled'>
type FormControlLabelArgs = Omit<ComponentProps<typeof FormControl.Label>, 'as'> & {labelChildren?: React.ReactNode}
type FormControlCaptionArgs = ComponentProps<typeof FormControl.Caption> & {captionChildren?: React.ReactNode}
type FormControlValidationMessageArgs = ComponentProps<typeof FormControl.Validation> & {
  validationChildren?: React.ReactNode
}
export type FormControlArgs<TInputProps = unknown> = FormControlParentArgs &
  FormControlLabelArgs &
  FormControlCaptionArgs &
  Partial<FormControlValidationMessageArgs> & // partial because we don't pass use validation for checkbox or radio
  TInputProps

// set global theme styles for each story
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themeGet('colors.canvas.default')};
    color: ${themeGet('colors.fg.default')};
  }
`

// only remove padding for multi-theme view grid
const GlobalStyleMultiTheme = createGlobalStyle`
  body {
    padding: 0 !important;
  }
`

// Trick to export the theme
console.log(JSON.stringify(theme))
const jpTheme = {
  animation: {
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  },
  borderWidths: [0, '1px'],
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  fonts: {
    normal: 'var(--jp-ui-font-family)',
    mono: 'var(--jp-code-font-family)',
  },
  // Don't use other font-size props as it is a very bad practice
  // to use em unit
  fontSizes: [
    '10.833px',
    'var(--jp-ui-font-size1)',
    '15.6px',
    '18.72px',
    '22.464px',
    '25.96px',
    '32.35px',
    '38.82px',
    '46.58px',
  ],
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5,
  },
  radii: ['0', '3px', '6px', '100px'],
  sizes: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  space: ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'],
  colorSchemes: {
    jupyter: {
      colors: {
        canvasDefaultTransparent: 'rgba(255,255,255,0)',
        pageHeaderBg: 'var(--jp-layout-color1)',
        marketingIcon: {
          primary: 'var(--jp-brand-color1)',
          secondary: 'var(--jp-brand-color3)',
        },
        diffBlob: {
          addition: {
            numText: 'var(--jp-ui-font-color1)',
            fg: 'var(--jp-ui-font-color1)',
            numBg: 'var(--jp-success-color2)',
            lineBg: 'var(--jp-success-color3)',
            wordBg: 'var(--jp-success-color0)',
          },
          deletion: {
            numText: 'var(--jp-ui-font-color1)',
            fg: 'var(--jp-ui-font-color1)',
            numBg: 'var(--jp-error-color2)',
            lineBg: 'var(--jp-error-color3)',
            wordBg: 'var(--jp-error-color0)',
          },
          hunk: {
            numBg: 'var(--jp-brand-color0)',
          },
          expander: {
            icon: 'var(--jp-ui-font-color2)',
          },
        },
        diffstat: {
          deletionBorder: 'var(--jp-border-color1)',
          additionBorder: 'var(--jp-border-color1)',
          additionBg: 'var(--jp-accent-color1)',
        },
        searchKeyword: {
          hl: 'var(--jp-warn-color3)',
        },
        prettylights: {
          syntax: {
            comment: 'var(--jp-ui-font-color3)',
            constant: '#0550ae',
            entity: '#6639ba',
            storageModifierImport: 'var(--jp-ui-font-color1)',
            entityTag: '#116329',
            keyword: 'var(--jp-error-color1)',
            string: '#0a3069',
            variable: '#953800',
            brackethighlighterUnmatched: '#82071e',
            invalidIllegalText: 'var(--jp-layout-color1)',
            invalidIllegalBg: '#82071e',
            carriageReturnText: 'var(--jp-layout-color1)',
            carriageReturnBg: 'var(--jp-error-color1)',
            stringRegexp: '#116329',
            markupList: '#3b2300',
            markupHeading: '#0550ae',
            markupItalic: 'var(--jp-ui-font-color1)',
            markupBold: 'var(--jp-ui-font-color1)',
            markupDeletedText: '#82071e',
            markupDeletedBg: 'var(--jp-error-color3)',
            markupInsertedText: '#116329',
            markupInsertedBg: 'var(--jp-success-color3)',
            markupChangedText: '#953800',
            markupChangedBg: '#ffd8b5',
            markupIgnoredText: 'var(--jp-layout-color2)',
            markupIgnoredBg: '#0550ae',
            metaDiffRange: 'var(--jp-info-color1)',
            brackethighlighterAngle: '#57606a',
            sublimelinterGutterMark: 'var(--jp-layout-color4)',
            constantOtherReferenceLink: '#0a3069',
          },
        },
        codemirror: {
          text: 'var(--jp-ui-font-color1)',
          bg: 'var(--jp-ui-inverse-font-color1)',
          guttersBg: 'var(--jp-ui-inverse-font-color1)',
          guttermarkerText: 'var(--jp-ui-inverse-font-color1)',
          guttermarkerSubtleText: 'var(--jp-ui-font-color3)',
          linenumberText: 'var(--jp-ui-font-color2)',
          cursor: 'var(--jp-ui-font-color1)',
          selectionBg: 'var(--jp-brand-color0)',
          activelineBg: 'rgba(234,238,242,0.5)',
          matchingbracketText: 'var(--jp-ui-font-color1)',
          linesBg: 'var(--jp-ui-inverse-font-color1)',
          syntax: {
            comment: 'var(--jp-ui-font-color1)',
            constant: '#0550ae',
            entity: 'var(--jp-info-color1)',
            keyword: 'var(--jp-error-color1)',
            storage: 'var(--jp-error-color1)',
            string: '#0a3069',
            support: '#0550ae',
            variable: '#953800',
          },
        },
        checks: {
          bg: 'var(--jp-ui-font-color1)',
          textPrimary: 'var(--jp-layout-color1)',
          textSecondary: 'var(--jp-layout-color4)',
          textLink: '#54aeff',
          btnIcon: '#afb8c1',
          btnHoverIcon: 'var(--jp-layout-color1)',
          btnHoverBg: 'rgba(255,255,255,0.125)',
          inputText: 'var(--jp-layout-color2)',
          inputPlaceholderText: 'var(--jp-layout-color4)',
          inputFocusText: 'var(--jp-layout-color4)',
          inputBg: '#32383f',
          donutError: '#fa4549',
          donutPending: '#bf8700',
          donutSuccess: 'var(--jp-accent-color1)',
          donutNeutral: '#afb8c1',
          dropdownText: '#afb8c1',
          dropdownBg: '#32383f',
          dropdownBorder: '#424a53',
          dropdownShadow: 'rgba(31,35,40,0.3)',
          dropdownHoverText: 'var(--jp-layout-color1)',
          dropdownHoverBg: '#424a53',
          dropdownBtnHoverText: 'var(--jp-layout-color1)',
          dropdownBtnHoverBg: '#32383f',
          scrollbarThumbBg: '#57606a',
          headerLabelText: 'var(--jp-border-color1)',
          headerLabelOpenText: 'var(--jp-layout-color1)',
          headerBorder: '#32383f',
          headerIcon: 'var(--jp-layout-color4)',
          lineText: 'var(--jp-border-color1)',
          lineNumText: 'rgba(140,149,159,0.75)',
          lineTimestampText: 'var(--jp-layout-color4)',
          lineHoverBg: '#32383f',
          lineSelectedBg: 'rgba(33,139,255,0.15)',
          lineSelectedNumText: '#54aeff',
          lineDtFmText: 'var(--jp-ui-font-color1)',
          lineDtFmBg: 'var(--jp-warn-color2)',
          gateBg: 'rgba(125,78,0,0.15)',
          gateText: 'var(--jp-border-color1)',
          gateWaitingText: '#d4a72c',
          stepHeaderOpenBg: '#32383f',
          stepErrorText: '#ff8182',
          stepWarningText: '#d4a72c',
          loglineText: 'var(--jp-layout-color4)',
          loglineNumText: 'rgba(140,149,159,0.75)',
          loglineDebugText: '#c297ff',
          loglineErrorText: 'var(--jp-border-color1)',
          loglineErrorNumText: '#ff8182',
          loglineErrorBg: 'rgba(164,14,38,0.15)',
          loglineWarningText: 'var(--jp-border-color1)',
          loglineWarningNumText: '#d4a72c',
          loglineWarningBg: 'rgba(125,78,0,0.15)',
          loglineCommandText: '#54aeff',
          loglineSectionText: '#4ac26b',
          ansi: {
            black: 'var(--jp-ui-font-color1)',
            blackBright: '#32383f',
            white: 'var(--jp-border-color1)',
            whiteBright: 'var(--jp-border-color1)',
            gray: 'var(--jp-layout-color4)',
            red: '#ff8182',
            redBright: '#ffaba8',
            green: '#4ac26b',
            greenBright: '#6fdd8b',
            yellow: '#d4a72c',
            yellowBright: '#eac54f',
            blue: '#54aeff',
            blueBright: '#80ccff',
            magenta: '#c297ff',
            magentaBright: '#d8b9ff',
            cyan: '#76e3ea',
            cyanBright: '#b3f0ff',
          },
        },
        project: {
          headerBg: 'var(--jp-ui-font-color1)',
          sidebarBg: 'var(--jp-ui-inverse-font-color1)',
          gradientIn: 'var(--jp-ui-inverse-font-color1)',
          gradientOut: 'rgba(255,255,255,0)',
        },
        mktg: {
          btn: {
            bg: '#1b1f23',
          },
        },
        control: {
          borderColor: {
            emphasis: 'var(--jp-inverse-border-color)',
          },
        },
        avatar: {
          bg: 'var(--jp-ui-inverse-font-color1)',
          border: 'var(--jp-border-color1)',
          stackFade: '#afb8c1',
          stackFadeMore: 'var(--jp-border-color1)',
        },
        topicTag: {
          border: 'rgba(0,0,0,0)',
        },
        counter: {
          border: 'rgba(0,0,0,0)',
        },
        selectMenu: {
          backdropBorder: 'rgba(0,0,0,0)',
          tapHighlight: 'rgba(175,184,193,0.5)',
          tapFocusBg: '#b6e3ff',
        },
        overlay: {
          backdrop: 'rgba(140,149,159,0.2)',
        },
        header: {
          text: 'var(--jp-ui-inverse-font-color1)',
          bg: 'var(--jp-inverse-layout-color1)',
          divider: 'var(--jp-inverse-layout-color2)',
          logo: 'var(--jp-ui-inverse-font-color1)',
        },
        headerSearch: {
          bg: 'var(--jp-ui-font-color1)',
          border: '#57606a',
        },
        sidenav: {
          selectedBg: 'var(--jp-ui-inverse-font-color1)',
        },
        menu: {
          bgActive: 'rgba(0,0,0,0)',
        },
        input: {
          disabledBg: 'var(--jp-inverse-layout-color2)',
        },
        timeline: {
          badgeBg: 'var(--jp-layout-color2)',
        },
        ansi: {
          black: '#0e1116',
          blackBright: '#20252c',
          white: '#ced5dc',
          whiteBright: '#ced5dc',
          gray: '#88929d',
          red: '#ee5a5d',
          redBright: '#ff8e8a',
          green: '#26a148',
          greenBright: '#43c663',
          yellow: '#b58407',
          yellowBright: '#d5a824',
          blue: '#368cf9',
          blueBright: '#67b3fd',
          magenta: '#a371f7',
          magentaBright: '#c49bff',
          cyan: '#76e3ea',
          cyanBright: '#b3f0ff',
        },
        btn: {
          text: 'var(--jp-ui-font-color1)',
          bg: 'var(--jp-layout-color1)',
          border: 'var(--jp-border-color1)',
          hoverBg: 'var(--jp-layout-color2)',
          hoverBorder: 'var(--jp-border-color1)',
          activeBg: 'var(--jp-layout-color3)',
          activeBorder: 'var(--jp-border-color1)',
          selectedBg: 'var(--jp-layout-color0)',
          counterBg: 'var(--jp-layout-color4)',
          primary: {
            text: 'var(--jp-ui-inverse-font-color1)',
            bg: 'var(--jp-accent-color1)',
            border: 'var(--jp-border-color1)',
            hoverBg: 'var(--jp-accent-color2)',
            hoverBorder: 'var(--jp-border-color1)',
            selectedBg: 'var(--jp-accent-color0)',
            disabledText: 'var(--jp-ui-inverse-font-color2)',
            disabledBg: 'var(--jp-accent-color3)',
            disabledBorder: 'var(--jp-border-color1)',
            icon: 'var(--jp-ui-inverse-font-color2)',
            counterBg: 'var(--jp-inverse-layout-color3)',
          },
          outline: {
            text: 'var(--jp-brand-color1)',
            hoverText: 'var(--jp-ui-inverse-font-color1)',
            hoverBg: 'var(--jp-brand-color1)',
            hoverBorder: 'var(--jp-border-color1)',
            hoverCounterBg: 'var(--jp-brand-color4)',
            selectedText: 'var(--jp-ui-inverse-font-color1)',
            selectedBg: 'var(--jp-brand-color2)',
            selectedBorder: 'var(--jp-border-color1)',
            disabledText: 'var(--jp-brand-color3)',
            disabledBg: 'var(--jp-layout-color1)',
            disabledCounterBg: 'var(--jp-brand-color4)',
            counterBg: 'var(--jp-brand-color4)',
            counterFg: 'var(--jp-brand-color3)',
            hoverCounterFg: 'var(--jp-ui-inverse-font-color1)',
            disabledCounterFg: 'var(--jp-brand-color3)',
          },
          danger: {
            text: 'var(--jp-error-color0)',
            hoverText: 'var(--jp-ui-inverse-font-color1)',
            hoverBg: 'var(--jp-error-color1)',
            hoverBorder: 'var(--jp-border-color1)',
            hoverCounterBg: 'var(--jp-brand-color4)',
            selectedText: 'var(--jp-ui-inverse-font-color1)',
            selectedBg: 'var(--jp-error-color0)',
            selectedBorder: 'var(--jp-border-color1)',
            disabledText: 'var(--jp-error-color3)',
            disabledBg: 'var(--jp-layout-color1)',
            disabledCounterBg: 'var(--jp-error-color3)',
            counterBg: 'var(--jp-error-color2)',
            icon: 'var(--jp-error-color0)',
            hoverIcon: 'var(--jp-ui-inverse-font-color1)',
            counterFg: 'var(--jp-error-color1)',
            hoverCounterFg: 'var(--jp-ui-inverse-font-color1)',
            disabledCounterFg: 'var(--jp-error-color3)',
          },
          inactive: {
            bg: 'var(--jp-layout-color2)',
            text: 'var(--jp-ui-font-color2)',
          },
        },
        underlinenav: {
          icon: 'var(--jp-ui-font-color3)',
          borderHover: 'var(--jp-border-color2)',
        },
        actionListItem: {
          inlineDivider: 'rgba(208,215,222,0.48)',
          default: {
            hoverBg: 'rgba(208,215,222,0.32)',
            hoverBorder: 'rgba(0,0,0,0)',
            activeBg: 'rgba(208,215,222,0.48)',
            activeBorder: 'rgba(0,0,0,0)',
            selectedBg: 'rgba(208,215,222,0.24)',
          },
          danger: {
            hoverBg: 'var(--jp-error-color0)',
            activeBg: 'var(--jp-error-color3)',
            hoverText: 'var(--jp-error-color2)',
          },
        },
        switchTrack: {
          bg: 'var(--jp-layout-color2)',
          hoverBg: 'hsla(210,24%,90%,1)',
          activeBg: 'hsla(210,24%,88%,1)',
          disabledBg: 'var(--jp-layout-color4)',
          fg: 'var(--jp-ui-font-color2)',
          disabledFg: 'var(--jp-ui-inverse-font-color1)',
          border: 'rgba(0,0,0,0)',
          checked: {
            bg: 'var(--jp-brand-color1)',
            hoverBg: '#0860CA',
            activeBg: '#0757BA',
            fg: 'var(--jp-ui-inverse-font-color1)',
            disabledFg: 'var(--jp-ui-inverse-font-color1)',
            border: 'rgba(0,0,0,0)',
          },
        },
        switchKnob: {
          bg: 'var(--jp-ui-inverse-font-color1)',
          disabledBg: 'var(--jp-layout-color1)',
          border: 'var(--jp-inverse-border-color)',
          checked: {
            bg: 'var(--jp-ui-inverse-font-color1)',
            disabledBg: 'var(--jp-layout-color1)',
            border: 'var(--jp-brand-color1)',
          },
        },
        segmentedControl: {
          bg: 'var(--jp-layout-color2)',
          button: {
            bg: 'var(--jp-inverse-layout-color1)',
            hover: {
              bg: 'var(--jp-inverse-layout-color2)',
            },
            active: {
              bg: 'var(--jp-inverse-layout-color3)',
            },
            selected: {
              border: 'var(--jp-border-color3)',
            },
          },
        },
        treeViewItem: {
          chevron: {
            hoverBg: 'var(--jp-inverse-layout-color1)',
          },
          directory: {
            fill: 'var(--jp-brand-color3)',
          },
        },
        fg: {
          default: 'var(--jp-ui-font-color1)',
          muted: 'var(--jp-ui-font-color2)',
          subtle: 'var(--jp-ui-font-color3)',
          onEmphasis: 'var(--jp-ui-inverse-font-color1)',
        },
        canvas: {
          default: 'var(--jp-ui-inverse-font-color1)',
          overlay: 'var(--jp-ui-inverse-font-color1)',
          inset: 'var(--jp-layout-color1)',
          subtle: 'var(--jp-layout-color1)',
        },
        border: {
          default: 'var(--jp-border-color1)',
          muted: 'var(--jp-border-color2)',
          subtle: 'var(--jp-border-color3)',
        },
        neutral: {
          emphasisPlus: 'var(--jp-layout-color2)',
          emphasis: 'var(--jp-layout-color1)',
          muted: 'var(--jp-layout-color0)',
          subtle: 'var(--jp-layout-color3)',
        },
        accent: {
          fg: 'var(--jp-brand-color1)',
          emphasis: 'var(--jp-brand-color2)',
          muted: 'var(--jp-brand-color0)',
          subtle: 'var(--jp-brand-color3)',
        },
        success: {
          fg: 'var(--jp-success-color1)',
          emphasis: 'var(--jp-success-color2)',
          muted: 'var(--jp-success-color0)',
          subtle: 'var(--jp-success-color3)',
        },
        attention: {
          fg: 'var(--jp-warn-color1)',
          emphasis: 'var(--jp-warn-color2)',
          muted: 'var(--jp-warn-color0)',
          subtle: 'var(--jp-warn-color3)',
        },
        severe: {
          fg: 'var(--jp-warn-color1)',
          emphasis: 'var(--jp-warn-color2)',
          muted: 'var(--jp-warn-color0)',
          subtle: 'var(--jp-warn-color3)',
        },
        danger: {
          fg: 'var(--jp-error-color1)',
          emphasis: 'var(--jp-error-color2)',
          muted: 'var(--jp-error-color0)',
          subtle: 'var(--jp-error-color3)',
        },
        open: {
          fg: 'var(--jp-success-color1)',
          emphasis: 'var(--jp-success-color2)',
          muted: 'var(--jp-success-color0)',
          subtle: 'var(--jp-success-color3)',
        },
        closed: {
          fg: 'var(--jp-error-color1)',
          emphasis: 'var(--jp-error-color2)',
          muted: 'var(--jp-error-color0)',
          subtle: 'var(--jp-error-color3)',
        },
        done: {
          fg: 'var(--jp-info-color1)',
          emphasis: 'var(--jp-info-color2)',
          muted: 'var(--jp-info-color0)',
          subtle: 'var(--jp-info-color3)',
        },
        sponsors: {
          fg: '#bf3989',
          emphasis: '#bf3989',
          muted: 'rgba(255,128,200,0.4)',
          subtle: '#ffeff7',
        },
        primer: {
          fg: {
            disabled: 'var(--jp-layout-color4)',
          },
          canvas: {
            backdrop: 'rgba(31,35,40,0.5)',
            sticky: 'rgba(255,255,255,0.95)',
          },
          border: {
            active: '#fd8c73',
            contrast: 'rgba(31,35,40,0.1)',
          },
        },
      },
      shadows: {
        mktg: {
          btn: {
            shadow: {
              outline: 'rgb(0 0 0 / 15%) 0 0 0 1px inset',
              focus: 'rgb(0 0 0 / 15%) 0 0 0 4px',
              hover:
                '0 3px 2px rgba(0, 0, 0, 0.07), 0 7px 5px rgba(0, 0, 0, 0.04), 0 12px 10px rgba(0, 0, 0, 0.03), 0 22px 18px rgba(0, 0, 0, 0.03), 0 42px 33px rgba(0, 0, 0, 0.02), 0 100px 80px rgba(0, 0, 0, 0.02)',
              hoverMuted: 'rgb(0 0 0 / 70%) 0 0 0 2px inset',
            },
          },
        },
        avatar: {
          childShadow: '0 0 0 2px var(--jp-ui-inverse-font-color2)',
        },
        overlay: {
          shadow: '0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12)',
        },
        btn: {
          shadow: '0 1px 0 rgba(31,35,40,0.04)',
          insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
          primary: {
            shadow: '0 1px 0 rgba(31,35,40,0.1)',
            insetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 var(--jp-inverse-layout-color3)',
          },
          outline: {
            hoverShadow: '0 1px 0 rgba(31,35,40,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(0,33,85,0.2)',
          },
          danger: {
            hoverShadow: '0 1px 0 rgba(31,35,40,0.1)',
            hoverInsetShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
            selectedShadow: 'inset 0 1px 0 rgba(76,0,20,0.2)',
          },
        },
        shadow: {
          small: '0 1px 0 rgba(31,35,40,0.04)',
          medium: '0 3px 6px rgba(140,149,159,0.15)',
          large: '0 8px 24px rgba(140,149,159,0.2)',
          extraLarge: '0 12px 28px rgba(140,149,159,0.3)',
        },
        primer: {
          shadow: {
            highlight: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            inset: 'inset 0 1px 0 rgba(208,215,222,0.2)',
          },
        },
      },
    },
  },
}

export const withThemeProvider = (Story: React.FC<React.PropsWithChildren<StoryContext>>, context: StoryContext) => {
  // used for testing ThemeProvider.stories.tsx
  if (context.parameters.disableThemeDecorator) return Story(context)

  const {colorScheme} = context.globals

  if (colorScheme === 'all') {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          height: '100vh',
        }}
      >
        <GlobalStyleMultiTheme />
        {Object.keys(theme.colorSchemes).map(scheme => (
          <ThemeProvider
            key={scheme}
            colorMode={scheme.includes('dark') ? 'dark' : 'light'}
            dayScheme={scheme}
            nightScheme={scheme}
          >
            <BaseStyles>
              <Box
                sx={{
                  padding: '1rem',
                  height: '100%',
                  backgroundColor: 'canvas.default',
                  color: 'fg.default',
                }}
              >
                <div id={`html-addon-root-${scheme}`}>{Story(context)}</div>
              </Box>
            </BaseStyles>
          </ThemeProvider>
        ))}
      </Box>
    )
  }

  return (
    <ThemeProvider theme={jpTheme} colorMode={'light'} dayScheme={'jupyter'} nightScheme={'jupyter'}>
      <GlobalStyle />
      <BaseStyles>
        <div id="html-addon-root">{Story(context)}</div>
      </BaseStyles>
    </ThemeProvider>
  )
}

export const toolbarTypes = {
  colorScheme: {
    name: 'Color scheme',
    description: 'Switch color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'photo',
      items: [...Object.keys(theme.colorSchemes), 'all'],
      title: 'Color scheme',
    },
    showSurroundingElements: {},
  },
}

export const inputWrapperArgTypes: ArgTypes = {
  block: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  contrast: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  disabled: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  placeholder: {
    defaultValue: '',
    control: {
      type: 'text',
    },
  },
  size: {
    name: 'size (input)', // TODO: remove '(input)'
    defaultValue: 'medium',
    options: ['small', 'medium', 'large'],
    control: {type: 'radio'},
  },
  validationStatus: {
    defaultValue: undefined,
    options: ['error', 'success', undefined],
    control: {type: 'radio'},
  },
}

const textInputArgTypesUnsorted: ArgTypes = {
  ...inputWrapperArgTypes,
  loading: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  loaderPosition: {
    defaultValue: 'auto',
    options: ['auto', 'leading', 'trailing'],
    control: {
      type: 'radio',
    },
  },
  monospace: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
}

// Alphabetize and optionally categorize the props
export const getTextInputArgTypes = (category?: string) =>
  Object.keys(textInputArgTypesUnsorted)
    .sort()
    .reduce<Record<string, unknown>>((obj, key) => {
      obj[key] = category
        ? {
            // have to do weird type casting so we can spread the object
            ...(textInputArgTypesUnsorted[key] as {[key: string]: unknown}),
            table: {
              category,
            },
          }
        : textInputArgTypesUnsorted[key]
      return obj
    }, {})

export const textInputExcludedControlKeys = ['as', 'icon', 'leadingVisual', 'sx', 'trailingVisual', 'trailingAction']

export const textInputWithTokensArgTypes: ArgTypes = {
  hideTokenRemoveButtons: {
    defaultValue: false,
    type: 'boolean',
    table: {
      category: 'TextInputWithTokens props',
    },
  },
  maxHeight: {
    type: 'string',
    defaultValue: 'none',
    description: 'Any valid value for the CSS max-height property',
    table: {
      category: 'TextInputWithTokens props',
    },
  },
  preventTokenWrapping: {
    defaultValue: false,
    type: 'boolean',
    table: {
      category: 'TextInputWithTokens props',
    },
  },
  size: {
    name: 'size (token size)',
    defaultValue: 'xlarge',
    options: ['small', 'medium', 'large', 'xlarge'],
    control: {
      type: 'radio',
    },
    table: {
      category: 'TextInputWithTokens props',
    },
  },
  visibleTokenCount: {
    defaultValue: 999,
    type: 'number',
    table: {
      category: 'TextInputWithTokens props',
    },
  },
}

export const formControlArgs = {
  required: false,
  disabled: false,
  labelChildren: 'Label',
  visuallyHidden: false,
  captionChildren: '',
  validationChildren: '',
  variant: 'error',
}

export const formControlArgTypes: ArgTypes = {
  // FormControl
  required: {
    control: {
      type: 'boolean',
    },
    table: {
      category: 'FormControl',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    table: {
      category: 'FormControl',
    },
  },

  // FormControl.Label
  labelChildren: {
    name: 'children',
    type: 'string',
    table: {
      category: 'FormControl.Label',
    },
  },
  visuallyHidden: {
    type: 'boolean',
    table: {
      category: 'FormControl.Label',
    },
  },

  // FormControl.Caption
  captionChildren: {
    name: 'children',
    type: 'string',
    table: {
      category: 'FormControl.Caption',
    },
  },

  // FormControl.Validation
  validationChildren: {
    name: 'children',
    type: 'string',
    table: {
      category: 'FormControl.Validation',
    },
  },
  variant: {
    control: {
      type: 'radio',
    },
    options: ['error', 'success'],
    table: {
      category: 'FormControl.Validation',
    },
  },
}

const formControlArgTypeKeys = Object.keys(formControlArgTypes) as Array<keyof typeof formControlArgTypes>

export const formControlArgTypesWithoutValidation = formControlArgTypeKeys.reduce<
  Partial<Record<keyof typeof formControlArgTypes, InputType>>
>((acc, key) => {
  if (formControlArgTypes[key].table.category !== 'FormControl.Validation') {
    acc[key] = formControlArgTypes[key]
  }
  return acc
}, {})

export const getFormControlArgsByChildComponent = ({
  captionChildren,
  disabled,
  labelChildren,
  required,
  validationChildren,
  variant,
  visuallyHidden,
}: FormControlArgs) => ({
  parentArgs: {disabled, required},
  labelArgs: {visuallyHidden, children: labelChildren},
  captionArgs: {children: captionChildren},
  validationArgs: {children: validationChildren, variant},
})

// Use this function for icon options in the controls. Desired icons are passed in as an array of Octicons
export const OcticonArgType = (iconList: Icon[]) => {
  const icons = iconList.reduce<Record<string, Icon>>((obj, icon) => {
    obj[icon.displayName || 'Icon'] = icon
    return obj
  }, {})

  return {
    options: Object.keys(icons),
    control: {
      type: 'select',
    },
    mapping: icons,
  }
}

export const withSurroundingElements = (
  Story: React.FC<React.PropsWithChildren<StoryContext>>,
  context: StoryContext,
) => {
  const showSurroundingElements =
    context.globals.showSurroundingElements ?? window.localStorage.getItem('showSurroundingElements') === 'true'

  return (
    <>
      {showSurroundingElements ? <a href="https://github.com/primer/react">Primer documentation</a> : ''}
      {Story(context)}
      {showSurroundingElements ? <a href="https://github.com/primer/react">Primer documentation</a> : ''}
    </>
  )
}
