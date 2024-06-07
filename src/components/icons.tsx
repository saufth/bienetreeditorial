import React from 'react'
import { siteConfig } from '@/config/site'

type IconProps = React.ComponentProps<'svg'>

export const Icons = {
  Logotype: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        width={512}
        height={35.9}
        viewBox='0 0 512 35.9'
        fill='currentColor'
        {...props}
      >
        <title>{`${siteConfig.name} logotype`}</title>
        <g id='logotype-mark'>
          <path
            d='M262.8,20.4c-1-1.3-2.6-2.4-4.5-3c1.3-0.7,2.3-1.5,3-2.3c0.2-0.3,0.5-0.6,0.6-0.9c0.8-1.2,1.2-2.7,1.2-4.4
            c0-1.5-0.3-2.8-0.8-4c-0.1-0.2-0.1-0.3-0.2-0.4c-0.5-1-1.2-1.9-2.1-2.7c-1-0.9-2.3-1.5-3.8-2S252.9,0,251,0h-21.8v5.4h22.2
            c1.8,0,3.2,0.4,4.2,1.3c1,0.9,1.5,2,1.5,3.5c0,1.4-0.6,2.5-1.7,3.5s-2.6,1.4-4.3,1.4h-21.9v5.4h22.4c2.3,0,4,0.4,5.1,1.3
            c1.1,0.9,1.6,2.2,1.6,4s-0.6,3-1.9,3.7c-1.2,0.8-3.2,1.2-5.8,1.2h-21.4V36h21.4c4.7,0,8.2-0.8,10.5-2.4c1.2-0.8,2.1-1.8,2.6-3
            c0.6-1.2,0.9-2.5,0.9-4.1C264.6,24.1,264,22,262.8,20.4'
          />
          <rect x='248.5' y='0' width='36.8' height='5.4' />
          <rect x='227.2' y='0' width='5.4' height='35.9' />
          <rect x='248.5' y='15.1' width='36.8' height='5.4' />
          <rect x='248.5' y='30.6' width='36.8' height='5.4' />
        </g>
        <g id='logotype-name'>
          <path
            d='M22.3,17.7c2.5,0.9,3.8,2.7,3.8,5.6c0,1.9-0.7,3.4-2.1,4.4s-3.5,1.5-6.3,1.5H0V6.9h18c1.1,0,2.2,0.1,3.1,0.4
            s1.7,0.7,2.3,1.2s1.1,1.2,1.4,1.9s0.5,1.6,0.5,2.5c0,1.1-0.2,1.9-0.7,2.7C24.1,16.5,23.3,17.1,22.3,17.7 M18,16.3
            c1,0,1.9-0.3,2.6-0.9s1-1.3,1-2.2c0-0.9-0.3-1.6-0.9-2.2s-1.5-0.8-2.5-0.8H3.7v6H18L18,16.3z M17.7,25.8c1.6,0,2.7-0.2,3.5-0.7
            s1.1-1.2,1.1-2.3s-0.3-1.9-1-2.5c-0.7-0.5-1.7-0.8-3-0.8H3.7v6.3H17.7L17.7,25.8z'
          />
          <rect x='32.1' y='6.9' width='3.7' height='22.2' />
          <polygon
            points='43.2,29.2 43.2,6.9 65.6,6.9 65.6,10.2 46.9,10.2 46.9,16 59.9,16 59.9,19.3 46.9,19.3 46.9,25.8
            66.5,25.8 66.5,29.2'
          />
          <polygon points='92.7,29.2 75.7,10.9 75.7,29.2 72,29.2 72,6.9 76.6,6.9 93.6,25.2 93.6,6.9 97.3,6.9 97.3,29.2' />
          <polygon
            points='104.7,29.2 104.7,6.9 127.1,6.9 127.1,10.2 108.4,10.2 108.4,16 121.4,16 121.4,19.3 108.4,19.3
            108.4,25.8 128,25.8 128,29.2'
          />
          <polygon points='144.7,10.2 144.7,29.2 141.1,29.2 141.1,10.2 130.4,10.2 130.4,6.9 155.4,6.9 155.4,10.2' />
          <path
            d='M180.2,29.2l-6-8.5h-11.2v8.5h-3.7V6.9h17.5c2.4,0,4.2,0.6,5.5,1.9c1.3,1.2,2,3,2,5.1c0,1-0.1,1.9-0.4,2.6
            c-0.3,0.8-0.7,1.4-1.2,2s-1.1,1-1.8,1.3c-0.7,0.3-1.5,0.6-2.3,0.7l6,8.7H180.2z M176.2,17.4c1.4,0,2.4-0.3,3.2-0.9
            c0.7-0.6,1.1-1.4,1.1-2.6c0-2.5-1.5-3.7-4.6-3.7h-13v7.1H176.2L176.2,17.4z'
          />
          <polygon
            points='190.2,29.2 190.2,6.9 212.6,6.9 212.6,10.2 193.9,10.2 193.9,16 206.9,16 206.9,19.3 193.9,19.3
            193.9,25.8 213.5,25.8 213.5,29.2'
          />
        </g>
        <g id='logotype-role'>
          <polygon
            points='299,29.2 299,6.9 320.4,6.9 320.4,8.8 301,8.8 301,16.4 314.5,16.4 314.5,18.3 301,18.3 301,27.2
            321.3,27.2 321.3,29.2'
          />
          <path
            d='M340.3,6.9c1.9,0,3.6,0.3,5.1,0.8s2.8,1.3,3.8,2.3c1,1,1.9,2.2,2.4,3.6s0.8,3,0.8,4.7c0,1.5-0.3,3-0.8,4.3
            c-0.5,1.3-1.4,2.5-2.4,3.5c-1.1,1-2.3,1.8-3.7,2.3c-1.4,0.5-2.9,0.8-4.5,0.8h-14.4V6.9H340.3L340.3,6.9z M341.2,27.2
            c2.6,0,4.7-0.9,6.4-2.7c0.8-0.8,1.4-1.8,1.8-2.9c0.4-1.1,0.6-2.2,0.6-3.5c0-1.4-0.2-2.7-0.7-3.8c-0.5-1.1-1.1-2.1-1.9-3
            c-0.8-0.8-1.8-1.5-3-1.9s-2.5-0.7-3.9-0.7h-11.9v18.4H341.2L341.2,27.2z'
          />
          <rect x='359.1' y='6.9' width='2.1' height='22.2' />
          <polygon points='377.7,8.8 377.7,29.1 375.7,29.1 375.7,8.8 364.7,8.8 364.7,6.9 388.7,6.9 388.7,8.8' />
          <path
            d='M417.3,18c0,3.6-1.4,6.5-4.2,8.8c-1.2,1-2.6,1.7-4.2,2.2c-1.6,0.5-3.4,0.8-5.3,0.8s-3.7-0.3-5.4-0.8
            c-1.6-0.5-3.1-1.3-4.3-2.2c-2.8-2.2-4.2-5.2-4.2-8.8s1.4-6.4,4.3-8.7c1.2-1,2.7-1.7,4.3-2.3c1.6-0.5,3.4-0.8,5.3-0.8
            s3.6,0.3,5.2,0.8s3.1,1.3,4.3,2.3C415.9,11.6,417.3,14.5,417.3,18 M415.1,18c0-3-1.2-5.5-3.8-7.4c-1-0.8-2.2-1.4-3.6-1.8
            c-1.4-0.4-2.8-0.7-4.3-0.7s-3,0.2-4.3,0.7c-1.4,0.4-2.5,1.1-3.6,1.8c-2.5,1.9-3.7,4.4-3.7,7.4c0,1.5,0.3,2.8,0.8,4
            c0.5,1.2,1.3,2.3,2.4,3.1c1,0.9,2.2,1.5,3.7,2c1.4,0.5,3,0.7,4.8,0.7s3.4-0.2,4.8-0.7s2.6-1.1,3.7-2c1-0.9,1.8-1.9,2.4-3.1
            C414.9,20.8,415.2,19.5,415.1,18'
          />
          <path
            d='M445.8,29.2l-7.2-9.1h-12.5v9.1H424V6.9h17.3c1.1,0,2,0.2,2.9,0.5c0.9,0.3,1.6,0.8,2.2,1.3
            c0.6,0.6,1.1,1.3,1.4,2.1s0.5,1.7,0.5,2.7c0,1.9-0.6,3.4-1.8,4.6c-1.2,1.1-2.9,1.8-5.1,1.9l7,9.1L445.8,29.2L445.8,29.2z
             M441.2,18.1c1.5,0,2.7-0.4,3.5-1.2s1.2-2,1.2-3.4c0-3.1-1.9-4.6-5.5-4.6h-14.3v9.3H441.2L441.2,18.1z'
          />
          <rect x='455' y='6.9' width='2.1' height='22.2' />
          <path
            d='M485.9,29.1l-3.1-5.8h-16.2l-3.2,5.8H461l12.1-22.2h3l12.1,22.2H485.9L485.9,29.1z M474.8,8.8h-0.3l-6.9,12.6
            h14.1L474.8,8.8L474.8,8.8z'
          />
          <polygon points='492.2,29.2 492.2,6.9 494.3,6.9 494.3,27.2 512,27.2 512,29.2' />
        </g>
      </svg>
    )
  },
  Logoalt: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width={512}
        height={84.7}
        viewBox='0 0 512 84.7'
        fill='currentColor'
        {...props}
      >
        <title>{`${siteConfig.name} logotype alt`}</title>
        <g id='logoalt-mark'>
          <path
            d='M83,47.6c-2.5-3.1-6-5.5-10.6-7c3-1.7,5.3-3.5,7.1-5.5c0.5-0.7,1-1.3,1.5-2c1.8-2.9,2.7-6.3,2.7-10.2
            c0-3.5-0.6-6.6-1.9-9.4c-0.2-0.3-0.3-0.7-0.5-1c-1.2-2.4-2.9-4.5-5-6.2c-2.4-2-5.3-3.6-8.8-4.6C63.9,0.6,59.9,0,55.5,0H4.7v12.5
            h51.6c4.1,0,7.4,1,9.8,3c2.4,2,3.6,4.7,3.6,8.2c0,3.2-1.3,5.9-3.9,8.1c-2.6,2.2-6,3.3-10,3.3h-51v12.5h52.2c5.3,0,9.3,1,11.8,3
            s3.8,5,3.8,9.2s-1.5,6.9-4.4,8.7c-2.9,1.8-7.4,2.7-13.6,2.7h-50v12.5h49.8c10.9,0,19.1-1.8,24.5-5.6c2.8-1.8,4.8-4.2,6.2-6.9
            c1.3-2.7,2-5.8,2-9.5C87.2,56,85.8,51.3,83,47.6'
          />
          <rect x='49.7' y='0' width='85.7' height='12.5' />
          <rect y='0' width='12.5' height='83.7' />
          <rect x='49.7' y='35.1' width='85.7' height='12.5' />
          <rect x='49.7' y='71.2' width='85.7' height='12.5' />
        </g>
        <g id='logoalt-name'>
          <path
            d='M202.5,17.5c4.1,1.4,6.2,4.4,6.2,9.1c0,3.1-1.1,5.5-3.4,7s-5.7,2.4-10.2,2.4h-28.7V0h29.1
              c1.9,0,3.5,0.2,5,0.7s2.7,1.1,3.7,2c1,0.9,1.8,1.9,2.3,3.1s0.8,2.6,0.8,4.1c0,1.7-0.4,3.1-1.1,4.4S204.1,16.5,202.5,17.5
               M195.6,15.1c1.7,0,3.1-0.5,4.2-1.4c1.1-1,1.6-2.1,1.6-3.5c0-1.5-0.5-2.7-1.5-3.5s-2.4-1.3-4.1-1.3h-23.5v9.8H195.6L195.6,15.1z
               M195.1,30.6c2.6,0,4.4-0.4,5.6-1.1c1.2-0.8,1.8-2,1.8-3.8s-0.5-3.1-1.6-4c-1.1-0.9-2.7-1.3-4.9-1.3h-23.7v10.1L195.1,30.6
              L195.1,30.6z'
          />
          <rect x='218.3' y='0' width='6' height='36' />
          <polygon
            points='236.3,36 236.3,0 272.6,0 272.6,5.4 242.3,5.4 242.3,14.7 263.3,14.7 263.3,20 242.3,20 242.3,30.6
              274,30.6 274,36'
          />
          <polygon points='316.5,36 289,6.5 289,36 283,36 283,0 290.4,0 317.9,29.5 317.9,0 323.9,0 323.9,36' />
          <polygon
            points='335.9,36 335.9,0 372.2,0 372.2,5.4 341.9,5.4 341.9,14.7 362.9,14.7 362.9,20 341.9,20 341.9,30.6
              373.6,30.6 373.6,36'
          />
          <polygon points='400.7,5.4 400.7,36 394.8,36 394.8,5.4 377.5,5.4 377.5,0 417.9,0 417.9,5.4' />
          <path
            d='M458.1,36l-9.7-13.7h-18.2V36h-6V0h28.4c3.8,0,6.8,1,8.9,3c2.1,2,3.2,4.8,3.2,8.3c0,1.6-0.2,3-0.7,4.2
              s-1.1,2.3-2,3.2c-0.9,0.9-1.8,1.6-3,2.1s-2.4,0.9-3.7,1.1l9.6,14H458.1L458.1,36z M451.7,16.9c2.2,0,4-0.5,5.1-1.4
              s1.8-2.3,1.8-4.1c0-4-2.5-6-7.5-6h-21v11.5H451.7L451.7,16.9z'
          />
          <polygon
            points='474.3,36 474.3,0 510.6,0 510.6,5.4 480.3,5.4 480.3,14.7 501.4,14.7 501.4,20 480.3,20 480.3,30.6
              512,30.6 512,36'
          />
        </g>
        <g id='logoalt-role'>
          <polygon
            points='166.8,83.7 166.8,47.7 201.5,47.7 201.5,50.8 170.2,50.8 170.2,63.1 192,63.1 192,66.2 170.2,66.2
              170.2,80.6 203,80.6 203,83.7'
          />
          <path
            d='M233.7,47.7c3.1,0,5.8,0.4,8.2,1.3c2.4,0.9,4.5,2.1,6.2,3.7s3,3.5,3.9,5.8s1.4,4.8,1.4,7.6
              c0,2.5-0.4,4.8-1.3,6.9s-2.2,4-3.9,5.7c-1.7,1.6-3.7,2.9-5.9,3.7c-2.2,0.8-4.6,1.3-7.2,1.3h-23.4v-36H233.7L233.7,47.7z
               M235.2,80.6c4.1,0,7.6-1.4,10.4-4.3c1.3-1.4,2.2-2.9,2.9-4.7c0.7-1.8,1-3.6,1-5.6c0-2.3-0.4-4.3-1.1-6.2
              c-0.7-1.9-1.8-3.5-3.1-4.8s-2.9-2.4-4.8-3.1s-4-1.1-6.3-1.1h-19.3v29.8C214.9,80.6,235.2,80.6,235.2,80.6z'
          />
          <rect x='264.2' y='47.7' width='3.3' height='36' />
          <polygon points='294.4,50.8 294.4,83.7 291,83.7 291,50.8 273.2,50.8 273.2,47.7 312.1,47.7 312.1,50.8' />
          <path
            d='M358.5,65.6c0,5.8-2.3,10.5-6.9,14.2c-2,1.6-4.2,2.8-6.9,3.6s-5.5,1.3-8.6,1.3s-6-0.4-8.7-1.3
              c-2.6-0.9-5-2.1-6.9-3.6c-4.6-3.7-6.9-8.4-6.9-14.2s2.3-10.4,6.9-14.1c2-1.6,4.3-2.8,7-3.7s5.5-1.3,8.6-1.3s5.9,0.4,8.5,1.3
              s5,2.1,7,3.7C356.2,55.2,358.5,59.9,358.5,65.6 M354.9,65.6c0-4.9-2-8.9-6.1-12c-1.6-1.2-3.6-2.2-5.8-3s-4.5-1.1-7-1.1
              s-4.8,0.3-7,1.1c-2.2,0.7-4.1,1.7-5.8,3c-4,3.1-6,7.1-6,12c0,2.4,0.5,4.6,1.3,6.5c0.9,2,2.2,3.7,3.8,5.1c1.6,1.4,3.6,2.5,5.9,3.2
              s4.9,1.1,7.7,1.1s5.4-0.4,7.7-1.2s4.3-1.9,5.9-3.2c1.6-1.4,2.9-3.1,3.8-5C354.5,70.2,354.9,68,354.9,65.6'
          />
          <path
            d='M404.6,83.7l-11.7-14.8h-20.3v14.8h-3.3v-36h28c1.7,0,3.3,0.2,4.6,0.8c1.4,0.5,2.6,1.2,3.5,2.2
              c1,1,1.7,2.1,2.2,3.4s0.8,2.8,0.8,4.4c0,3.1-1,5.6-2.9,7.4s-4.7,2.8-8.3,3.1l11.3,14.8L404.6,83.7L404.6,83.7z M397.1,65.8
              c2.5,0,4.4-0.7,5.7-2c1.4-1.3,2-3.2,2-5.6c0-5-3-7.5-9-7.5h-23.2v15.1H397.1L397.1,65.8z'
          />
          <rect x='419.5' y='47.7' width='3.3' height='36' />
          <path
            d='M469.5,83.7l-5.1-9.3h-26.2l-5.2,9.3h-3.9l19.7-36h4.9l19.6,36H469.5L469.5,83.7z M451.6,50.8h-0.5
              l-11.2,20.5h22.8L451.6,50.8z'
          />
          <polygon points='479.7,83.7 479.7,47.7 483,47.7 483,80.6 511.7,80.6 511.7,83.7' />
        </g>
      </svg>
    )
  },
  Logomark: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        width={512}
        height={316.5}
        viewBox='0 0 512 316.5'
        fill='currentColor'
        {...props}
      >
        <path
          d='M314,180.1c-9.3-11.8-22.6-20.7-40-26.5c11.2-6.2,20-13.1,26.7-20.7c2-2.5,3.9-5,5.6-7.6
          c6.7-10.8,10.2-23.7,10.2-38.5c0-13.1-2.4-25.1-7.2-35.6c-0.6-1.3-1.3-2.5-2-3.8c-4.6-9.2-10.9-16.9-18.8-23.5
          c-9-7.6-20.1-13.5-33.3-17.6c-13.2-4.1-28.4-6.1-45.2-6.1H17.7v47.2h195.4c15.6,0,28,3.8,37,11.5c9,7.6,13.5,18,13.5,30.9
          c0,12.1-5,22.3-14.9,30.7c-9.9,8.4-22.5,12.6-37.9,12.6H17.7v47.2h197.5c20.2,0,35.1,3.7,44.8,11.2c9.7,7.5,14.5,19.1,14.5,35
          s-5.6,26.1-16.5,32.8c-10.9,6.7-28.1,10.2-51.3,10.2h-189v47.2h188.5c41.4,0,72.3-7,92.9-21c10.4-7,18.2-15.8,23.3-26.2
          c5.1-10.3,7.6-22.1,7.6-35.8C330,211.7,324.7,193.9,314,180.1'
        />
        <rect x='187.9' y='0.1' width='324.1' height='47.2' />
        <rect y='0' width='47.2' height='316.5' />
        <rect x='187.9' y='132.9' width='324.1' height='47.2' />
        <rect x='187.8' y='269.3' width='324.2' height='47.2' />
      </svg>
    )
  },
  Logoname: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        width={512}
        height={125.5}
        viewBox='0 0 512 125.5'
        fill='currentColor'
        {...props}
      >
        <title>{`${siteConfig.name} logotype name`}</title>
        <g id='logoname-name'>
          <path
            d='M53.5,25.9c6.1,2.1,9.1,6.5,9.1,13.5c0,4.6-1.7,8.1-5,10.5c-3.4,2.3-8.4,3.5-15.1,3.5H0V0h43.1
            c2.8,0,5.2,0.3,7.4,1c2.2,0.7,4,1.7,5.5,3s2.6,2.8,3.4,4.6c0.8,1.8,1.2,3.8,1.2,6c0,2.5-0.5,4.7-1.7,6.5S56,24.5,53.5,25.9
            M43.2,22.4c2.5,0,4.6-0.7,6.2-2.1s2.4-3.1,2.4-5.2c0-2.2-0.7-3.9-2.2-5.2c-1.5-1.3-3.5-1.9-6-1.9H8.8v14.4H43.2L43.2,22.4z
            M42.6,45.4c3.8,0,6.6-0.6,8.4-1.7s2.7-3,2.7-5.5s-0.8-4.6-2.4-5.9c-1.6-1.3-4-1.9-7.3-1.9H8.8v15L42.6,45.4L42.6,45.4z'
          />
          <rect x='76.9' y='0' width='8.8' height='53.3' />
          <polygon
            points='103.6,53.3 103.6,0 157.3,0 157.3,7.9 112.4,7.9 112.4,21.7 143.6,21.7 143.6,29.7 112.4,29.7
            112.4,45.4 159.4,45.4 159.4,53.3'
          />
          <polygon
            points='222.4,53.3 181.6,9.6 181.6,53.3 172.7,53.3 172.7,0 183.7,0 224.4,43.7 224.4,0 233.3,0 233.3,53.3
            '
          />
          <polygon
            points='251.1,53.3 251.1,0 304.9,0 304.9,7.9 259.9,7.9 259.9,21.7 291.2,21.7 291.2,29.7 259.9,29.7
            259.9,45.4 306.9,45.4 306.9,53.3'
          />
          <polygon points='347.1,7.9 347.1,53.3 338.3,53.3 338.3,7.9 312.8,7.9 312.8,0 372.6,0 372.6,7.9' />
          <path
            d='M432.2,53.3L417.7,33h-27v20.3h-8.8V0H424c5.6,0,10,1.5,13.2,4.5s4.8,7.1,4.8,12.3c0,2.4-0.3,4.5-1,6.3
            s-1.6,3.4-2.9,4.7c-1.2,1.3-2.7,2.3-4.4,3.1c-1.7,0.8-3.5,1.3-5.5,1.7l14.3,20.8H432.2L432.2,53.3z M422.7,25
            c3.3,0,5.9-0.7,7.6-2.1c1.7-1.4,2.6-3.5,2.6-6.1c0-5.9-3.7-8.8-11-8.8h-31.1V25C390.8,25,422.7,25,422.7,25z'
          />
          <polygon
            points='456.2,53.3 456.2,0 509.9,0 509.9,7.9 465,7.9 465,21.7 496.2,21.7 496.2,29.7 465,29.7 465,45.4
            512,45.4 512,53.3'
          />
        </g>
        <g id='logoname-role'>
          <polygon
            points='0.7,124 0.7,70.6 52,70.6 52,75.2 5.6,75.2 5.6,93.5 37.9,93.5 37.9,98 5.6,98 5.6,119.4 54.2,119.4
            54.2,124'
          />
          <path
            d='M99.8,70.6c4.5,0,8.6,0.6,12.2,1.9c3.6,1.3,6.7,3.1,9.2,5.4s4.4,5.2,5.8,8.6c1.3,3.4,2,7.1,2,11.3
            c0,3.7-0.7,7.1-2,10.3s-3.3,6-5.9,8.4c-2.5,2.4-5.5,4.2-8.8,5.5c-3.3,1.2-6.9,1.9-10.7,1.9H67V70.6L99.8,70.6L99.8,70.6z
             M102,119.4c6.1,0,11.3-2.1,15.4-6.4c1.9-2,3.3-4.3,4.3-6.9c1-2.6,1.5-5.4,1.5-8.3c0-3.3-0.5-6.4-1.6-9.2s-2.6-5.1-4.6-7.1
            s-4.4-3.5-7.2-4.6s-5.9-1.6-9.3-1.6H71.9v44.2H102L102,119.4z'
          />
          <rect x='144.9' y='70.6' width='4.9' height='53.3' />
          <polygon points='189.6,75.2 189.6,124 184.6,124 184.6,75.2 158.3,75.2 158.3,70.6 215.9,70.6 215.9,75.2' />
          <path
            d='M284.6,97.2c0,8.6-3.4,15.6-10.2,21c-2.9,2.3-6.3,4.1-10.2,5.4s-8.2,1.9-12.8,1.9s-8.9-0.6-12.8-1.9
            c-3.9-1.3-7.4-3.1-10.2-5.4c-6.8-5.4-10.2-12.4-10.2-21s3.4-15.5,10.3-20.9c2.9-2.4,6.4-4.2,10.3-5.4s8.2-1.9,12.7-1.9
            s8.7,0.6,12.6,1.9c3.9,1.3,7.4,3.1,10.3,5.4C281.1,81.7,284.6,88.7,284.6,97.2 M279.3,97.3c0-7.3-3-13.2-9-17.8
            c-2.4-1.9-5.3-3.3-8.6-4.4s-6.7-1.6-10.4-1.6s-7.1,0.5-10.4,1.6c-3.3,1.1-6.1,2.5-8.6,4.4c-5.9,4.6-8.9,10.5-8.9,17.8
            c0,3.5,0.7,6.8,2,9.7c1.3,2.9,3.2,5.4,5.6,7.5c2.4,2.1,5.4,3.7,8.8,4.8c3.4,1.1,7.2,1.7,11.4,1.7s8-0.6,11.5-1.7
            c3.4-1.2,6.4-2.8,8.8-4.8c2.4-2.1,4.3-4.6,5.7-7.5C278.6,104,279.3,100.8,279.3,97.3'
          />
          <path
            d='M352.9,124l-17.3-21.9h-30.1V124h-5V70.6h41.6c2.5,0,4.8,0.4,6.9,1.1c2,0.7,3.8,1.8,5.2,3.2
            c1.5,1.4,2.5,3.1,3.3,5.1c0.8,2,1.1,4.2,1.1,6.6c0,4.6-1.4,8.3-4.3,10.9s-7,4.2-12.3,4.6l16.7,21.9H352.9z M341.7,97.5
            c3.6,0,6.5-1,8.5-2.9c2-1.9,3-4.7,3-8.3c0-7.4-4.4-11.1-13.3-11.1h-34.4v22.3C305.5,97.5,341.7,97.5,341.7,97.5z'
          />
          <rect x='375' y='70.6' width='5' height='53.3' />
          <path
            d='M449.1,124l-7.5-13.8h-38.8L395,124h-5.7l29.1-53.3h7.3l29,53.3H449.1L449.1,124z M422.5,75.2h-0.7l-16.6,30.3
            H439L422.5,75.2z'
          />
          <polygon points='464.1,124 464.1,70.7 469.1,70.7 469.1,119.4 511.6,119.4 511.6,124' />
        </g>
      </svg>
    )
  },
  Facebook: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <title>Facebook</title>
        <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z' />
      </svg>
    )
  },
  Instagram: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <path d='M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z' />
      </svg>
    )
  },
  Tiktok: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <title>Tiktok</title>
        <path d='M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z' />
      </svg>
    )
  },
  Twitter: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <title>Twitter</title>
        <path
          d='M4,0C1.8,0,0,1.8,0,4v16c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V4c0-2.2-1.8-4-4-4H4z M5.2,5.1h4.5l3.2,4.6l3.9-4.6h1.4
          l-4.7,5.5l5.8,8.2h-4.5l-3.7-5.3l-4.5,5.3H5.1l5.3-6.2L5.2,5.1z M7.4,6.3l8.1,11.4h1.8L9.1,6.3H7.4z'
        />
      </svg>
    )
  },
  Linkedin: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <title>Linkedin</title>
        <path d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z' />
      </svg>
    )
  },
  WhatsappOutlined: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        <title>Whatsapp</title>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
        <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
      </svg>
    )
  },
  Whatsapp: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='currentColor'
        {...props}
      >
        <title>Whatsapp</title>
        <path d='M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z' />
      </svg>
    )
  },
  Sun: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        fill='currentColor'
        {...props}
      >
        <path
          d='M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386
          0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276
          4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967
          2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7
          2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867
          4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967
          12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386
          14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144
          12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772
          4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5
          15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986
          12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938
          10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457
          8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5
          7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z'
        />
      </svg>
    )
  },
  Moon: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={15}
        height={15}
        viewBox='0 0 15 15'
        fill='currentColor'
        {...props}
      >
        <path
          d='M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998
          0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998
          1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998
          2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998
          1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998
          3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906
          4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998
          5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089
          4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906
          6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756
          7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998
          8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998
          7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275
          0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932
          9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563
          11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883
          12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157
          13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857
          13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241
          14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032
          7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891
          5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773
          13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134
          2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488
          1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032
          4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002
          7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963
          10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373
          9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403
          8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853
          5.90487 10.4032 5.60464 10.4032 5.30023Z'
        />
      </svg>
    )
  },
  Spinner: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        {...props}
      >
        <title>Loading</title>
        <g>
          <circle
            cx='12'
            cy='12'
            r='9.5'
            fill='none'
            stroke-width='3'
            stroke-linecap='round'
          >
            <animate
              attributeName='stroke-dasharray'
              dur='1.5s'
              calcMode='spline'
              values='0 150;42 150;42 150;42 150'
              keyTimes='0;0.475;0.95;1'
              keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
              repeatCount='indefinite'
            />
            <animate
              attributeName='stroke-dashoffset'
              dur='1.5s'
              calcMode='spline'
              values='0;-16;-59;-59'
              keyTimes='0;0.475;0.95;1'
              keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
              repeatCount='indefinite'
            />
          </circle>
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='2s'
            values='0 12 12;360 12 12'
            repeatCount='indefinite'
          />
        </g>
      </svg>
    )
  },
  ImageOff: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={32}
        height={32}
        viewBox='0 0 32 32'
        fill='currentColor'
        {...props}
      >
        <title>no-image</title>
        <path d='M30,3.4141,28.5859,2,2,28.5859,3.4141,30l2-2H26a2.0027,2.0027,0,0,0,2-2V5.4141ZM26,26H7.4141l7.7929-7.793,2.3788,2.3787a2,2,0,0,0,2.8284,0L22,19l4,3.9973Zm0-5.8318-2.5858-2.5859a2,2,0,0,0-2.8284,0L19,19.1682l-2.377-2.3771L26,7.4141Z' />
        <path d='M6,22V19l5-4.9966,1.3733,1.3733,1.4159-1.416-1.375-1.375a2,2,0,0,0-2.8284,0L6,16.1716V6H22V4H6A2.002,2.002,0,0,0,4,6V22Z' />
        <rect className='!fill-none' width='32' height='32' />
      </svg>
    )
  },
  Shapes: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        {...props}
      >
        <title>Shapes</title>
        <path d='M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z' />
        <rect x='3' y='14' width='7' height='7' rx='1' />
        <circle cx='17.5' cy='17.5' r='3.5' />
      </svg>
    )
  },
  Play: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        viewBox='0 0 16 16'
        {...props}
      >
        <polygon points='2 2 14 8 2 14 2 2' />
      </svg>
    )
  },
  Pause: (props: IconProps) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height={16}
        viewBox='0 0 16 16'
        {...props}
      >
        <g>
          <rect x='9.81' y='2' width='1.38' height='12' />
          <rect x='4.81' y='2' width='1.38' height='12' />
        </g>
      </svg>
    )
  }
}
