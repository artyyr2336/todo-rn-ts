import React from 'react';
import {Path} from 'react-native-svg';

export const iconList = {
  home: {
    viewBox: '0 1 511 511.999',
    data: (color: string | undefined) => (
      <>
        <Path
          fill={color}
          d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
        />
      </>
    ),
  },

  todo: {
    data: (color: string | undefined) => (
      <>
        <Path
          fill={color}
          d="M440.749 118.535L332.466 10.253C325.855 3.641 317.066 0 307.716 0H96C76.701 0 61 15.701 61 35v442c0 19.299 15.701 35 35 35h320c19.299 0 35-15.701 35-35V143.284c0-9.347-3.64-18.136-10.251-24.749zM399.787 120H336c-2.757 0-5-2.243-5-5V51.214zM416 482H96c-2.757 0-5-2.243-5-5V35c0-2.757 2.243-5 5-5h205v85c0 19.299 15.701 35 35 35h85v327c0 2.757-2.243 5-5 5z"
        />
        <Path
          fill={color}
          d="M272.1 229h95.571c8.284 0 15-6.716 15-15s-6.716-15-15-15H272.1c-8.284 0-15 6.716-15 15s6.715 15 15 15zM272.1 329h95.571c8.284 0 15-6.716 15-15s-6.716-15-15-15H272.1c-8.284 0-15 6.716-15 15s6.715 15 15 15zM368.1 399h-96c-8.284 0-15 6.716-15 15s6.716 15 15 15h96c8.284 0 15-6.716 15-15s-6.716-15-15-15zM197.256 173.157l-34.592 34.591-8.157-8.157c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.764c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0zM197.256 280.794l-34.592 34.592-8.157-8.157c-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.763c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.212.001zM197.256 380.794l-34.592 34.592-8.157-8.157c-5.857-5.857-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l18.764 18.763c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.464 10.606-4.394l45.198-45.198c5.858-5.858 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.212.001z"
        />
      </>
    ),
  },

  plus: {
    data: (color: string | undefined) => (
      <>
        <Path
          fill={color}
          d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
        />
      </>
    ),
  },

  basket: {
    data: (color: string | undefined) => (
      <>
        <Path
          fill={color}
          d="M485.7 198.5c-10.7-13.4-25.3-20.8-41.1-20.8h-36.1C405.1 85.1 338 11 256 11S106.9 85.1 103.5 177.7H67.4c-15.8 0-30.4 7.4-41.1 20.8-13.5 16.8-18.4 40.2-13.3 62.7L56.3 452c6.5 28.8 28.9 49 54.4 49h290.5c25.5 0 47.9-20.1 54.4-49L499 261.2c5.1-22.5.2-45.9-13.3-62.7zM256 51.8c59.6 0 108.4 55.8 111.6 125.9H144.4c3.2-70 52-125.9 111.6-125.9zm203.2 200.3L415.9 443c-2.2 9.8-8.5 17.2-14.6 17.2H110.7c-6.1 0-12.4-7.4-14.6-17.2L52.8 252.1c-2.3-10.1-3.7-33.6 14.6-33.6h377.2c19.7 0 16.9 23.5 14.6 33.6z"
        />
        <Path
          fill={color}
          d="M154.7 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c.1-11.2-9.1-20.4-20.4-20.4zM253.6 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.2-20.4-20.4-20.4zM352.4 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.1-20.4-20.4-20.4z"
        />
      </>
    ),
  },
};
