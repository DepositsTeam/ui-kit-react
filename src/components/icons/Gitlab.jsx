import React from "react";
import PropTypes from "prop-types";

const GitlabComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  fillRule,
  clipRule,
  props,
}) => {
  return (
    <>
      <mask id="path-1-inside-1_717_2965" fill="white">
        <path
          fillRule={fillRule}
          clipRule={clipRule}
          d="M22.6112 8.49003L23.9556 12.6125C23.9601 12.6265 23.9642 12.6406 23.968 12.6548C24.0145 12.8256 24.0103 13.0066 23.9554 13.1757C23.8959 13.359 23.7799 13.5188 23.6239 13.6324L20.4785 15.9112L11.9993 22.0597L11.9937 22.0557L11.9968 22.0597L0.376048 13.6324C0.220079 13.5188 0.104068 13.359 0.0445737 13.1757C-0.0149204 12.9924 -0.0148564 12.795 0.044757 12.6117L1.38982 8.48926L1.39058 8.49023L1.39227 8.48506L4.04757 0.313164C4.07819 0.22194 4.13678 0.142626 4.21504 0.0864302C4.29331 0.0302348 4.38729 0 4.48372 0C4.58014 0 4.67413 0.0302348 4.7524 0.0864302C4.83066 0.142626 4.88925 0.22194 4.91987 0.313164L6.12994 4.03029L7.58286 8.48506H7.58323L7.58301 8.48438H16.4194H16.4198H16.42L19.0786 0.313164C19.1093 0.22194 19.1678 0.142626 19.2461 0.0864302C19.3244 0.0302348 19.4184 0 19.5148 0C19.6112 0 19.7052 0.0302348 19.7835 0.0864302C19.8617 0.142626 19.9203 0.22194 19.9509 0.313164L20.4005 1.69508L22.6107 8.48438H22.6115L22.611 8.48512L22.6123 8.48921H22.6109L22.6112 8.49003Z"
        />
      </mask>
      <path
        d="M23.9556 12.6125L25.2884 12.184L25.2866 12.1785L23.9556 12.6125ZM22.6112 8.49003L21.2797 8.92247L21.2802 8.92408L22.6112 8.49003ZM23.968 12.6548L22.6161 13.0184L22.617 13.0219L23.968 12.6548ZM23.9554 13.1757L25.287 13.6079L25.287 13.6079L23.9554 13.1757ZM23.6239 13.6324L24.4453 14.7662L24.4482 14.7641L23.6239 13.6324ZM20.4785 15.9112L19.6571 14.7775L19.6566 14.7778L20.4785 15.9112ZM11.9993 22.0597L11.1773 23.1931L11.9992 23.7891L12.8211 23.1931L11.9993 22.0597ZM11.9937 22.0557L12.8157 20.9224L10.8906 22.9178L11.9937 22.0557ZM11.9968 22.0597L11.1749 23.193L13.0999 21.1976L11.9968 22.0597ZM0.376048 13.6324L-0.448219 14.7641L-0.445847 14.7658L0.376048 13.6324ZM0.0445737 13.1757L1.37619 12.7434V12.7434L0.0445737 13.1757ZM0.044757 12.6117L-1.28619 12.1775L-1.28658 12.1787L0.044757 12.6117ZM1.38982 8.48926L2.49308 7.62738L0.874429 5.55543L0.0588775 8.055L1.38982 8.48926ZM1.39058 8.49023L0.287332 9.35211L1.90672 11.425L2.72169 8.92398L1.39058 8.49023ZM1.39227 8.48506L2.72338 8.91881L2.72374 8.9177L1.39227 8.48506ZM4.04757 0.313164L2.7203 -0.13242L2.71609 -0.119473L4.04757 0.313164ZM4.21504 0.0864302L5.03158 1.22365L5.03158 1.22365L4.21504 0.0864302ZM4.7524 0.0864302L5.56894 -1.05079L5.56893 -1.05079L4.7524 0.0864302ZM4.91987 0.313164L6.25116 -0.120224L6.24708 -0.132393L4.91987 0.313164ZM6.12994 4.03029L4.79871 4.46366L4.79895 4.4644L6.12994 4.03029ZM7.58286 8.48506L6.25186 8.91916L6.56689 9.88506H7.58286V8.48506ZM7.58323 8.48506V9.88506H9.51114L8.9145 8.0518L7.58323 8.48506ZM7.58301 8.48438V7.08437H5.6551L6.25174 8.91764L7.58301 8.48438ZM16.42 8.48438V9.88437H17.4367L17.7513 8.91754L16.42 8.48438ZM19.0786 0.313164L17.7514 -0.132431L17.7473 -0.119996L19.0786 0.313164ZM19.2461 0.0864302L20.0626 1.22365L20.0627 1.22364L19.2461 0.0864302ZM19.7835 0.0864302L18.9669 1.22364L19.7835 0.0864302ZM19.9509 0.313164L21.2823 -0.119987L21.2781 -0.132387L19.9509 0.313164ZM20.4005 1.69508L19.0692 2.12821L19.0693 2.12845L20.4005 1.69508ZM22.6107 8.48438L21.2795 8.91775L21.5942 9.88437H22.6107V8.48438ZM22.6115 8.48438L23.714 9.34721L25.485 7.08437H22.6115V8.48438ZM22.611 8.48512L21.5085 7.62229L21.0489 8.20954L21.2798 8.91861L22.611 8.48512ZM22.6123 8.48921V9.88921H24.5405L23.9435 8.05572L22.6123 8.48921ZM22.6109 8.48921V7.08921H20.6843L21.2794 8.92165L22.6109 8.48921ZM25.2866 12.1785L23.9422 8.05598L21.2802 8.92408L22.6246 13.0466L25.2866 12.1785ZM25.32 12.2911C25.3103 12.2552 25.2998 12.2195 25.2884 12.184L22.6228 13.041C22.6203 13.0335 22.6181 13.026 22.6161 13.0184L25.32 12.2911ZM25.287 13.6079C25.426 13.1795 25.4367 12.7207 25.3191 12.2877L22.617 13.0219C22.5922 12.9305 22.5945 12.8338 22.6238 12.7435L25.287 13.6079ZM24.4482 14.7641C24.8424 14.4769 25.1362 14.0724 25.287 13.6079L22.6238 12.7434C22.6556 12.6456 22.7173 12.5608 22.7997 12.5008L24.4482 14.7641ZM21.2998 17.045L24.4453 14.7662L22.8026 12.4987L19.6571 14.7775L21.2998 17.045ZM12.8211 23.1931L21.3003 17.0446L19.6566 14.7778L11.1774 20.9263L12.8211 23.1931ZM11.1718 23.1891L11.1773 23.1931L12.8212 20.9264L12.8157 20.9224L11.1718 23.1891ZM13.0999 21.1976L13.0968 21.1936L10.8906 22.9178L10.8937 22.9218L13.0999 21.1976ZM-0.445847 14.7658L11.1749 23.193L12.8187 20.9263L1.19794 12.4991L-0.445847 14.7658ZM-1.28704 13.6079C-1.13628 14.0723 -0.842491 14.4769 -0.448217 14.7641L1.20031 12.5008C1.28265 12.5608 1.34442 12.6456 1.37619 12.7434L-1.28704 13.6079ZM-1.28658 12.1787C-1.43765 12.6431 -1.43781 13.1433 -1.28704 13.6079L1.37619 12.7434C1.40797 12.8414 1.40794 12.9469 1.37609 13.0448L-1.28658 12.1787ZM0.0588775 8.055L-1.28619 12.1775L1.3757 13.046L2.72077 8.92351L0.0588775 8.055ZM2.49383 7.62835L2.49308 7.62738L0.286574 9.35114L0.287332 9.35211L2.49383 7.62835ZM0.0611548 8.05131L0.0594711 8.05647L2.72169 8.92398L2.72338 8.91881L0.0611548 8.05131ZM2.71609 -0.119473L0.0607915 8.05242L2.72374 8.9177L5.37904 0.745802L2.71609 -0.119473ZM3.3985 -1.05079C3.08201 -0.823543 2.84458 -0.50241 2.72036 -0.132399L5.37477 0.758728C5.3118 0.946291 5.19154 1.10879 5.03158 1.22365L3.3985 -1.05079ZM4.48372 -1.4C4.09456 -1.4 3.71494 -1.27799 3.3985 -1.05079L5.03158 1.22365C4.87167 1.33846 4.68003 1.4 4.48372 1.4V-1.4ZM5.56893 -1.05079C5.25249 -1.278 4.87287 -1.4 4.48372 -1.4V1.4C4.28741 1.4 4.09577 1.33847 3.93586 1.22365L5.56893 -1.05079ZM6.24708 -0.132393C6.12286 -0.502412 5.88542 -0.823544 5.56894 -1.05079L3.93585 1.22365C3.7759 1.1088 3.65563 0.946293 3.59266 0.758722L6.24708 -0.132393ZM7.46118 3.59692L6.25111 -0.120206L3.58863 0.746535L4.79871 4.46366L7.46118 3.59692ZM8.91386 8.05096L7.46094 3.59619L4.79895 4.4644L6.25186 8.91916L8.91386 8.05096ZM7.58323 7.08506H7.58286V9.88506H7.58323V7.08506ZM6.25174 8.91764L6.25196 8.91833L8.9145 8.0518L8.91428 8.05111L6.25174 8.91764ZM16.4194 7.08437H7.58301V9.88437H16.4194V7.08437ZM16.4198 7.08437H16.4194V9.88437H16.4198V7.08437ZM16.42 7.08437H16.4198V9.88437H16.42V7.08437ZM17.7473 -0.119996L15.0887 8.05121L17.7513 8.91754L20.4099 0.746325L17.7473 -0.119996ZM18.4296 -1.05079C18.1131 -0.823541 17.8756 -0.502406 17.7514 -0.132411L20.4058 0.75874C20.3429 0.946287 20.2226 1.10879 20.0626 1.22365L18.4296 -1.05079ZM19.5148 -1.4C19.1256 -1.4 18.746 -1.278 18.4296 -1.05078L20.0627 1.22364C19.9027 1.33847 19.7111 1.4 19.5148 1.4V-1.4ZM20.6 -1.05078C20.2836 -1.278 19.9039 -1.4 19.5148 -1.4V1.4C19.3185 1.4 19.1268 1.33847 18.9669 1.22364L20.6 -1.05078ZM21.2781 -0.132387C21.1539 -0.502414 20.9165 -0.823545 20.6 -1.05078L18.9669 1.22364C18.807 1.1088 18.6867 0.946295 18.6237 0.758715L21.2781 -0.132387ZM21.7318 1.26195L21.2822 -0.119968L18.6196 0.746297L19.0692 2.12821L21.7318 1.26195ZM19.0693 2.12845L21.2795 8.91775L23.942 8.051L21.7318 1.26171L19.0693 2.12845ZM22.6115 7.08437H22.6107V9.88437H22.6115V7.08437ZM23.7135 9.34795L23.714 9.34721L21.509 7.62154L21.5085 7.62229L23.7135 9.34795ZM21.2798 8.91861L21.2811 8.9227L23.9435 8.05572L23.9422 8.05163L21.2798 8.91861ZM22.6123 7.08921H22.6109V9.88921H22.6123V7.08921ZM23.9428 8.05759L23.9425 8.05677L21.2794 8.92165L21.2797 8.92246L23.9428 8.05759Z"
        fill={smartColor || fill || stroke}
        mask="url(#path-1-inside-1_717_2965)"
      />
    </>
  );
};

const Gitlab = {
  component: GitlabComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

GitlabComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
  fillRule: PropTypes.string,
  clipRule: PropTypes.string,
};

GitlabComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd",
};

export default Gitlab;